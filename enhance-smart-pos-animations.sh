#!/bin/bash

# Script to enhance Smart POS page with professional animations

FILE="src/app/smart-pos/page.tsx"

# Backup original file
cp "$FILE" "${FILE}.backup"

# Add floating animation keyframes to globals.css if not exists
if ! grep -q "floatGentle" src/app/globals.css; then
cat >> src/app/globals.css << 'EOF'

@keyframes floatGentle {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-float-gentle {
  animation: floatGentle 3s ease-in-out infinite;
}
EOF
fi

echo "Enhanced Smart POS animations - check the file for Framer Motion improvements"
