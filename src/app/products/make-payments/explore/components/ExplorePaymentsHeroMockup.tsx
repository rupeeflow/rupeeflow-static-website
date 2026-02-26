'use client';

import { motion } from 'framer-motion';
import { CreditCard, QrCode, Wallet, Send, Receipt, Zap, Users, Banknote } from 'lucide-react';

interface MockupProps {
  className?: string;
}

/**
 * Hero mockup component for Explore More Payments page
 * Shows a grid of payment method icons with floating animations
 * Requirements: 3.7, 4.3, 4.4, 11.2
 */
export default function ExplorePaymentsHeroMockup({ className = '' }: MockupProps) {
  const paymentIcons = [
    { Icon: CreditCard, delay: 0 },
    { Icon: QrCode, delay: 0.1 },
    { Icon: Wallet, delay: 0.2 },
    { Icon: Send, delay: 0.3 },
    { Icon: Receipt, delay: 0.4 },
    { Icon: Zap, delay: 0.5 },
    { Icon: Users, delay: 0.6 },
    { Icon: Banknote, delay: 0.7 },
  ];

  return (
    <motion.div
      animate={{
        y: [0, -14, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`relative w-full max-w-lg ${className}`}
    >
      {/* Main container with gradient background */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-emerald-500/20">
        {/* Grid of payment icons */}
        <div className="grid grid-cols-4 gap-6">
          {paymentIcons.map(({ Icon, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: delay,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 2,
              }}
              className="aspect-square bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 hover:border-emerald-500/50 transition-colors"
            >
              <Icon className="w-8 h-8 text-emerald-400" />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
}
