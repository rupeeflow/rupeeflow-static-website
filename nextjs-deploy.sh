#!/bin/bash

# Next.js + PNPM + Caddy Automated Deployment Script
# Usage: curl -sSL https://your-domain.com/nextjs-deploy.sh | bash
# Or: wget -O - https://your-domain.com/nextjs-deploy.sh | bash

set -e

echo "🚀 Starting Next.js deployment with PNPM and Caddy..."

# Variables (customize these before running)
DOMAIN="yourdomain.com"
APP_DIR="/var/www/nextjs-app"
REPO_URL=""  # Will prompt user if empty
NODE_VERSION="18"
PORT="3000"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_prompt() {
    echo -e "${BLUE}[INPUT]${NC} $1"
}

# Get user inputs
echo "🔧 Configuration Setup"
echo "===================="

read -p "Enter your domain name (e.g., myapp.com): " user_domain
if [[ ! -z "$user_domain" ]]; then
    DOMAIN="$user_domain"
fi

read -p "Enter your GitHub repository URL: " user_repo
if [[ ! -z "$user_repo" ]]; then
    REPO_URL="$user_repo"
fi

read -p "Enter port for Next.js app (default: 3000): " user_port
if [[ ! -z "$user_port" ]]; then
    PORT="$user_port"
fi

echo ""
print_status "Configuration:"
echo "   Domain: $DOMAIN"
echo "   Repository: $REPO_URL"
echo "   Port: $PORT"
echo "   App Directory: $APP_DIR"
echo ""

read -p "Continue with deployment? (y/n): " confirm
if [[ ! $confirm =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 1
fi

# Update system
print_status "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install essential packages
print_status "Installing essential packages..."
sudo apt install -y curl wget git unzip software-properties-common build-essential

# Install Node.js
print_status "Installing Node.js $NODE_VERSION..."
curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PNPM
print_status "Installing PNPM..."
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
export PATH="$HOME/.local/share/pnpm:$PATH"

# Verify installations
print_status "Verifying installations..."
node --version
npm --version
pnpm --version

# Install PM2 for process management
print_status "Installing PM2..."
sudo npm install -g pm2

# Install Caddy
print_status "Installing Caddy server..."
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy

# Create application directory
print_status "Setting up application directory..."
sudo mkdir -p $APP_DIR
sudo chown -R $USER:$USER $APP_DIR

# Clone and setup Next.js application
if [[ ! -z "$REPO_URL" ]]; then
    print_status "Cloning Next.js repository..."
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
    
    print_status "Installing dependencies with PNPM..."
    pnpm install
    
    print_status "Building Next.js application..."
    pnpm build
    
    print_status "Setting up PM2 ecosystem..."
    cat > ecosystem.config.js << EOL
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
    
    # Create log directory
    sudo mkdir -p /var/log/pm2
    sudo chown -R $USER:$USER /var/log/pm2
    
    print_status "Starting Next.js application with PM2..."
    pm2 start ecosystem.config.js
    pm2 save
    pm2 startup
else
    print_warning "No repository URL provided. You'll need to manually deploy your Next.js app to $APP_DIR"
fi

# Configure Caddy for Next.js
print_status "Configuring Caddy for Next.js..."
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
        Strict-Transport-Security max-age=31536000;
        Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
    }
    
    # Compression
    encode gzip
    
    # Handle Next.js static files efficiently
    @static {
        path /_next/static/*
    }
    header @static Cache-Control max-age=31536000
    
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

# Create log directories
sudo mkdir -p /var/log/caddy
sudo chown caddy:caddy /var/log/caddy

# Configure firewall
print_status "Configuring UFW firewall..."
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443

# Start and enable Caddy
print_status "Starting Caddy server..."
sudo systemctl enable caddy
sudo systemctl start caddy

# Create deployment script for future updates
print_status "Creating deployment scripts..."

# Main deployment script
cat > ~/deploy-nextjs.sh << 'EOL'
#!/bin/bash

set -e

APP_DIR="/var/www/nextjs-app"
BRANCH="main"

echo "🚀 Deploying Next.js application..."

# Navigate to app directory
cd $APP_DIR

# Pull latest changes
echo "📥 Pulling latest changes from Git..."
git pull origin $BRANCH

# Install dependencies
echo "📦 Installing dependencies with PNPM..."
pnpm install

# Build application
echo "🏗️  Building Next.js application..."
pnpm build

# Restart PM2 process
echo "🔄 Restarting application..."
pm2 restart nextjs-app

# Reload Caddy (in case of config changes)
sudo systemctl reload caddy

echo "✅ Deployment completed successfully!"
echo ""
echo "📊 Application Status:"
pm2 status
echo ""
echo "🔗 Your app should be available at: https://$(grep -o '[^[:space:]]*\.com' /etc/caddy/Caddyfile | head -1)"
EOL

# Quick status check script
cat > ~/status-nextjs.sh << 'EOL'
#!/bin/bash

echo "📊 Next.js Application Status"
echo "============================="
echo ""

echo "🔧 PM2 Processes:"
pm2 status

echo ""
echo "🌐 Caddy Status:"
sudo systemctl status caddy --no-pager -l

echo ""
echo "�� System Resources:"
echo "Memory Usage:"
free -h
echo ""
echo "Disk Usage:"
df -h /

echo ""
echo "📝 Recent Logs:"
echo "PM2 Logs (last 20 lines):"
pm2 logs --lines 20

echo ""
echo "Caddy Logs (last 10 lines):"
sudo tail -10 /var/log/caddy/access.log 2>/dev/null || echo "No Caddy logs yet"
EOL

# Environment management script
cat > ~/env-nextjs.sh << 'EOL'
#!/bin/bash

APP_DIR="/var/www/nextjs-app"

case "$1" in
    "edit")
        echo "📝 Editing environment variables..."
        nano $APP_DIR/.env.local
        echo "🔄 Restarting application to apply changes..."
        pm2 restart nextjs-app
        ;;
    "show")
        echo "📋 Current environment variables:"
        if [ -f "$APP_DIR/.env.local" ]; then
            cat $APP_DIR/.env.local
        else
            echo "No .env.local file found"
        fi
        ;;
    "backup")
        echo "💾 Backing up environment variables..."
        if [ -f "$APP_DIR/.env.local" ]; then
            cp $APP_DIR/.env.local $APP_DIR/.env.local.backup.$(date +%Y%m%d_%H%M%S)
            echo "✅ Backup created"
        else
            echo "No .env.local file to backup"
        fi
        ;;
    *)
        echo "Usage: $0 {edit|show|backup}"
        echo "  edit   - Edit environment variables"
        echo "  show   - Display current environment variables"
        echo "  backup - Create a backup of current environment variables"
        ;;
esac
EOL

# Make scripts executable
chmod +x ~/deploy-nextjs.sh
chmod +x ~/status-nextjs.sh
chmod +x ~/env-nextjs.sh

# Setup PM2 startup
pm2 startup | tail -n 1 | bash

# Final status and instructions
print_status "🎉 Next.js deployment setup completed!"
echo ""
echo "📋 Summary:"
echo "   Domain: $DOMAIN"
echo "   App Directory: $APP_DIR"
echo "   Port: $PORT"
echo "   Caddy Config: /etc/caddy/Caddyfile"
echo ""
echo "🛠️  Available Scripts:"
echo "   ~/deploy-nextjs.sh    - Deploy updates"
echo "   ~/status-nextjs.sh    - Check application status"
echo "   ~/env-nextjs.sh       - Manage environment variables"
echo ""
echo "🔧 Useful Commands:"
echo "   pm2 status            - Check PM2 processes"
echo "   pm2 logs              - View application logs"
echo "   pm2 restart nextjs-app - Restart the app"
echo "   sudo systemctl status caddy - Check Caddy status"
echo ""
print_warning "Important Next Steps:"
echo "1. 🌍 Update your DNS settings to point $DOMAIN to this server's IP"
echo "2. 📝 Add environment variables: ~/env-nextjs.sh edit"
echo "3. 🔒 SSL certificate will be automatically provisioned by Caddy once DNS is configured"
echo "4. 📊 Monitor your app: ~/status-nextjs.sh"
echo ""

# Show current status
print_status "Current Application Status:"
if [[ ! -z "$REPO_URL" ]]; then
    pm2 status
else
    echo "Application not started yet (no repository provided)"
fi

echo ""
print_status "🎯 Your Next.js app will be available at: https://$DOMAIN"
print_warning "Remember to configure your domain's DNS settings!"
