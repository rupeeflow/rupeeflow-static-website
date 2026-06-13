'use client';

import { motion } from 'framer-motion';

/**
 * Integration Mockup Component
 * Shows API request/response flow visualization
 * Requirements: 4.1, 12.5, 14.2
 */
export default function IntegrationMockup() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="relative"
    >
      {/* Code Editor Mockup */}
      <div className="bg-[#1e1e1e] rounded-2xl border border-emerald-500/20 shadow-2xl overflow-hidden">
        {/* Editor Header */}
        <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-gray-400 ml-4">payment-integration.js</span>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-300">rupeeflow</span>{' '}
            <span className="text-[var(--foreground)]">=</span>{' '}
            <span className="text-yellow-300">require</span>
            <span className="text-[var(--foreground)]">(</span>
            <span className="text-green-400">&apos;rupeeflow&apos;</span>
            <span className="text-[var(--foreground)]">);</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4"
          >
            <span className="text-gray-500">{`// Create payment`}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-2"
          >
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-300">payment</span>{' '}
            <span className="text-[var(--foreground)]">=</span>{' '}
            <span className="text-purple-400">await</span>{' '}
            <span className="text-blue-300">rupeeflow</span>
            <span className="text-[var(--foreground)]">.</span>
            <span className="text-yellow-300">payments</span>
            <span className="text-[var(--foreground)]">.</span>
            <span className="text-yellow-300">create</span>
            <span className="text-[var(--foreground)]">(&#123;</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="ml-4"
          >
            <span className="text-blue-300">amount</span>
            <span className="text-[var(--foreground)]">:</span>{' '}
            <span className="text-orange-400">50000</span>
            <span className="text-[var(--foreground)]">,</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="ml-4"
          >
            <span className="text-blue-300">currency</span>
            <span className="text-[var(--foreground)]">:</span>{' '}
            <span className="text-green-400">&apos;INR&apos;</span>
            <span className="text-[var(--foreground)]">,</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="ml-4"
          >
            <span className="text-blue-300">method</span>
            <span className="text-[var(--foreground)]">:</span>{' '}
            <span className="text-green-400">&apos;upi&apos;</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <span className="text-[var(--foreground)]">&#125;);</span>
          </motion.div>

          {/* Response */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
          >
            <div className="text-gray-400 text-xs mb-2">{`// Response`}</div>
            <div>
              <span className="text-[var(--foreground)]">&#123;</span>
            </div>
            <div className="ml-4">
              <span className="text-blue-300">id</span>
              <span className="text-[var(--foreground)]">:</span>{' '}
              <span className="text-green-400">&apos;pay_abc123&apos;</span>
              <span className="text-[var(--foreground)]">,</span>
            </div>
            <div className="ml-4">
              <span className="text-blue-300">status</span>
              <span className="text-[var(--foreground)]">:</span>{' '}
              <span className="text-green-400">&apos;success&apos;</span>
              <span className="text-[var(--foreground)]">,</span>
            </div>
            <div className="ml-4">
              <span className="text-blue-300">amount</span>
              <span className="text-[var(--foreground)]">:</span>{' '}
              <span className="text-orange-400">50000</span>
            </div>
            <div>
              <span className="text-[var(--foreground)]">&#125;</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Success Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-[var(--foreground)] px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm font-semibold">Payment Success</span>
      </motion.div>
    </motion.div>
  );
}
