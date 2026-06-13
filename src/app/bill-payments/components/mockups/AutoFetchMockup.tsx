'use client';

import { motion } from 'framer-motion';
import { Download, CheckCircle2, Loader2 } from 'lucide-react';

interface MockupProps {
  className?: string;
}

/**
 * AutoFetchMockup - Animated mockup showing automatic bill fetching
 * 
 * Features:
 * - Displays automatic bill fetching with loading states
 * - Progress indicators showing fetch status
 * - Floating animation with y-axis movement between -7px and 0px
 * - 5 second loop duration for smooth, ambient animation
 * 
 * Requirements: 4.1, 4.5, 11.2
 */
export default function AutoFetchMockup({ className = '' }: MockupProps) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`relative ${className}`}
    >
      {/* Glow effect behind mockup */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl rounded-3xl" />
      
      {/* Auto-fetch card */}
      <div className="relative bg-[var(--card)] rounded-2xl shadow-xl border border-gray-200 p-6 max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Download className="w-5 h-5 text-[var(--foreground)]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Auto-Fetch Bills</p>
              <p className="text-xs text-gray-500">Fetching your bills...</p>
            </div>
          </div>
        </div>

        {/* Progress section */}
        <div className="space-y-4 mb-6">
          {/* Completed fetch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Electricity Bill</p>
              <p className="text-xs text-gray-600">State Power Co. - ₹2,450</p>
            </div>
          </motion.div>

          {/* In progress fetch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <Loader2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
            </motion.div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Internet Bill</p>
              <p className="text-xs text-gray-600">Fetching from provider...</p>
            </div>
          </motion.div>

          {/* Pending fetch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Water Bill</p>
              <p className="text-xs text-gray-600">Queued</p>
            </div>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
            <span>Fetching bills</span>
            <span>1 of 3 complete</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '33%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
            />
          </div>
        </div>

        {/* Info text */}
        <p className="text-xs text-center text-gray-500">
          Bills are automatically fetched from your service providers
        </p>
      </div>
    </motion.div>
  );
}
