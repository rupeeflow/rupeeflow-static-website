#!/bin/bash

# Next.js + PNPM + Caddy Automated Deployment Script
# Idempotent - Safe to run multiple times
# Usage: ./nextjs-deploy.sh

set -e

echo "🚀 Starting Next.js deployment with PNPM and Caddy..."

# Variables
DOMAIN="rupeeflow.co"
APP_DIR="/var/www/nextjs-app"
REPO_URL=""
NODE_VERSION="18"
PORT="3000"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${GREEN}[INFO]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }
print_skip() { echo -e "${BLUE}[SKIP]${NC} $1"; }

# Check if root
if [[ $EUID -eq 0 ]]; then
   print_error "Run as regular user with sudo privileges, not as root"
   exit 1
fi

# Detect first run or update
IS_FIRST_RUN=false
[ ! -d "$APP_DIR" ] && IS_FIRST_RUN=true

echo ""
if [ "$IS_FIRST_RUN" = true ]; then
    echo "🎯 First time deployment detected"
else
    echo "🔄 Existing installation detected - will update"
fi

# Configuration
echo ""
echo "🔧 Configuration"
echo "================"

if [ "$IS_FIRST_RUN" = true ] || [ ! -f ~/.nextjs-deploy-config ]; then
    read -p "Domain (default: $DOMAIN): " user_domain
    [ ! -z "$user_domain" ] && DOMAIN="$user_domain"

    if [ ! -d "$APP_DIR/.git" ]; then
        read -p "GitHub repository URL: " user_repo
        [ ! -z "$user_repo" ] && REPO_URL="$user_repo"
    fi

    read -p "Port (default: $PORT): " user_port
    [ ! -z "$user_port" ] && PORT="$user_port"

    # Save config
    cat > ~/.nextjs-deploy-config << EOL
DOMAIN="$DOMAIN"
REPO_URL="$REPO_URL"
PORT="$PORT"
APP_DIR="$APP_DIR"
EOL
    chmod 600 ~/.nextjs-deploy-config
else
    print_status "Loading saved configuration..."
    source ~/.nextjs-deploy-config
fi

echo ""
print_status "Configuration:"
echo "   Domain: $DOMAIN"
echo "   Repository: ${REPO_URL:-'Already cloned'}"
echo "   Port: $PORT"
echo "   App Directory: $APP_DIR"
echo ""

if [ "$IS_FIRST_RUN" = true ]; then
    read -p "Continue with deployment? (y/n): " confirm
    [[ ! $confirm =~ ^[Yy]$ ]] && echo "Cancelled." && exit 1
fi

# System update (first run only)
if [ "$IS_FIRST_RUN" = true ]; then
    print_status "Updating system..."
    sudo apt update && sudo apt upgrade -y
    sudo apt install -y curl wget git unzip software-properties-common build-essential
else
    print_skip "System already updated"
fi

# Node.js
if command -v node &> /dev/null; then
    print_skip "Node.js already installed ($(node -v))"
else
    print_status "Installing Node.js $NODE_VERSION..."
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# PNPM
if command -v pnpm &> /dev/null; then
    print_skip "PNPM already installed ($(pnpm -v))"
else
    print_status "Installing PNPM..."
    sudo npm install -g pnpm
fi

# PM2
if command -v pm2 &> /dev/null; then
    print_skip "PM2 already installed ($(pm2 -v))"
else
    print_status "Installing PM2..."
    sudo npm install -g pm2
fi

# Caddy
if command -v caddy &> /dev/null; then
    print_skip "Caddy already installed"
else
    print_status "Installing Caddy..."
    sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
    sudo apt update
    sudo apt install -y caddy
fi

# App directory
if [ ! -d "$APP_DIR" ]; then
    print_status "Creating app directory..."
    sudo mkdir -p $APP_DIR
    sudo chown -R $USER:$USER $APP_DIR
else
    print_skip "App directory exists"
fi

# Git repository
if [ -d "$APP_DIR/.git" ]; then
    print_status "Pulling latest changes..."
    cd $APP_DIR
    git stash
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
    git pull origin $BRANCH || {
        print_warning "Pull failed, resetting..."
        git fetch origin
        git reset --hard origin/$BRANCH
    }
elif [[ ! -z "$REPO_URL" ]]; then
    print_status "Cloning repository..."
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
else
    print_error "No repository found!"
    exit 1
fi

# Install dependencies
print_status "Installing dependencies..."
cd $APP_DIR
pnpm install

# Build
print_status "Building application..."
pnpm build

# PM2 config
print_status "Configuring PM2..."
cat > $APP_DIR/ecosystem.config.js << EOL
module.exports = {
  apps: [{
    name: 'nextjs-app',
    script: 'pnpm',
    args: 'start',
    cwd: '$APP_DIR',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: $PORT
    },
    error_file: '/var/log/pm2/nextjs-error.log',
    out_file: '/var/log/pm2/nextjs-out.log',
    log_file: '/var/log/pm2/nextjs.log',
    time: true
  }]
}
EOL

sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# PM2 start/restart
if pm2 list | grep -q "nextjs-app"; then
    print_status "Restarting PM2 app..."
    pm2 restart nextjs-app
    pm2 save
else
    print_status "Starting PM2 app..."
    cd $APP_DIR
    pm2 start ecosystem.config.js
    pm2 save
    STARTUP_CMD=$(pm2 startup | tail -n 1 | grep -o 'sudo.*')
    [ ! -z "$STARTUP_CMD" ] && eval "$STARTUP_CMD"
fi

# Caddy config
print_status "Configuring Caddy..."
sudo tee /etc/caddy/Caddyfile > /dev/null <<EOL
$DOMAIN {
    # Reverse proxy to Next.js app
    reverse_proxy localhost:$PORT {
        header_up Host {host}
        header_up X-Real-IP {remote}
        header_up X-Forwarded-For {remote}
        header_up X-Forwarded-Proto {scheme}
    }

    # Security headers
    header {
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        X-XSS-Protection "1; mode=block"
        Referrer-Policy strict-origin-when-cross-origin
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
        Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
    }

    # Compression
    encode gzip

    # Handle Next.js static files efficiently
    @static {
        path /_next/static/*
    }
    header @static Cache-Control "public, max-age=31536000, immutable"

    # Logging
    log {
        output file /var/log/caddy/access.log {
            roll_size 100MB
            roll_keep 5
        }
        format json
    }
}
EOL

sudo mkdir -p /var/log/caddy
sudo chown caddy:caddy /var/log/caddy

# Firewall (first run only)
if [ "$IS_FIRST_RUN" = true ]; then
    print_status "Configuring firewall..."
    sudo ufw --force enable
    sudo ufw allow ssh
    sudo ufw allow 80
    sudo ufw allow 443
else
    print_skip "Firewall already configured"
fi

# Caddy start/restart
if systemctl is-active --quiet caddy; then
    print_status "Reloading Caddy..."
    sudo systemctl reload caddy
else
    print_status "Starting Caddy..."
    sudo systemctl enable caddy
    sudo systemctl start caddy
fi

# Helper scripts
if [ ! -f ~/deploy-nextjs.sh ]; then
    print_status "Creating helper scripts..."

    cat > ~/deploy-nextjs.sh << 'EOL'
#!/bin/bash
set -e
source ~/.nextjs-deploy-config
echo "🚀 Deploying..."
cd $APP_DIR
git stash
git pull origin $(git rev-parse --abbrev-ref HEAD)
pnpm install
pnpm build
pm2 restart nextjs-app
sudo systemctl reload caddy
echo "✅ Deployed!"
pm2 status
EOL

    cat > ~/status-nextjs.sh << 'EOL'
#!/bin/bash
echo "📊 Status:"
pm2 status
echo ""
sudo systemctl status caddy --no-pager
EOL

    cat > ~/env-nextjs.sh << 'EOL'
#!/bin/bash
source ~/.nextjs-deploy-config
case "$1" in
    "edit")
        nano $APP_DIR/.env.local
        pm2 restart nextjs-app
        ;;
    "show")
        [ -f "$APP_DIR/.env.local" ] && cat $APP_DIR/.env.local || echo "No .env.local file"
        ;;
    "backup")
        [ -f "$APP_DIR/.env.local" ] && cp $APP_DIR/.env.local $APP_DIR/.env.local.backup.$(date +%Y%m%d_%H%M%S) && echo "✅ Backup created" || echo "No .env.local file"
        ;;
    *)
        echo "Usage: $0 {edit|show|backup}"
        ;;
esac
EOL

    chmod +x ~/deploy-nextjs.sh ~/status-nextjs.sh ~/env-nextjs.sh
else
    print_skip "Helper scripts exist"
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ "$IS_FIRST_RUN" = true ]; then
    print_status "🎉 Initial deployment complete!"
else
    print_status "🎉 Update complete!"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Summary:"
echo "   Domain: $DOMAIN"
echo "   App: $APP_DIR"
echo "   Port: $PORT"
echo ""
echo "🛠️  Quick Commands:"
echo "   ~/deploy-nextjs.sh  - Redeploy from Git"
echo "   ~/status-nextjs.sh  - Check status"
echo "   ~/env-nextjs.sh     - Manage environment"
echo "   pm2 logs            - View logs"
echo ""

if [ "$IS_FIRST_RUN" = true ]; then
    print_warning "⚠️  Next Steps:"
    echo "1. Update DNS to point $DOMAIN to server IP"
    echo "2. Set env vars: ~/env-nextjs.sh edit"
    echo "3. SSL auto-provisions once DNS configured"
    echo ""
fi

print_status "📊 Current Status:"
pm2 status
echo ""
print_status "🔗 App: https://$DOMAIN"
