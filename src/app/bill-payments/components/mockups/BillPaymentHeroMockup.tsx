'use client';

import { motion } from 'framer-motion';
import { Zap, Calendar, Bell, CheckCircle } from 'lucide-react';

interface MockupProps {
  className?: string;
}

/**
 * BillPaymentHeroMockup - Animated hero mockup component for bill payments page
 * 
 * Features:
 * - Floating animation with y-axis movement between -14px and 0px
 * - 6 second loop duration for smooth, ambient animation
 * - Displays bills.jpeg image
 * - Animated feature cards showcasing key features
 * 
 * Requirements: 3.7, 4.3, 4.4, 16.3
 */
export default function BillPaymentHeroMockup({ className = '' }: MockupProps) {
  const features = [
    { icon: Zap, text: 'Auto-Fetch Bills', delay: 0.2 },
    { icon: Calendar, text: 'Schedule Payments', delay: 0.4 },
    { icon: Bell, text: 'Smart Reminders', delay: 0.6 },
    { icon: CheckCircle, text: 'Instant Confirmation', delay: 0.8 },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Image container - larger and without frame */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Glow effect behind image */}
        <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl" />
        
        {/* Bill payments image */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/bills.jpeg"
            alt="Bill payment dashboard interface showing utility bills and payment options"
            className="w-full h-auto"
          />
        </div>

        {/* Animated Feature Cards - Top Right */}
        <div className="absolute -top-8 -right-8 space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: feature.delay,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, x: -5 }}
              className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-emerald-100 min-w-[220px]"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: feature.delay,
                }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0"
              >
                <feature.icon className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-sm font-semibold text-gray-800">{feature.text}</span>
              
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: feature.delay + 0.3, type: 'spring' }}
              >
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Badge - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CheckCircle className="w-5 h-5" />
          </motion.div>
          <span className="font-bold text-sm">99.9% Success Rate</span>
        </motion.div>
      </div>
    </div>
  );
}
