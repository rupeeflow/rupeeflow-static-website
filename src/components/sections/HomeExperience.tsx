'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '₹2,400 Cr+', label: 'Processed monthly' },
  { value: '1.2M+', label: 'Businesses onboarded' },
  { value: '99.98%', label: 'Uptime SLA' },
  { value: '<200ms', label: 'API response time' },
]

export default function HomeExperience() {
  return (
    <div className="bg-white">
      {/* ── Row 1: Headline + Placeholder ── */}
      <div className="grid grid-cols-1 border-b border-gray-200 lg:grid-cols-[1fr_420px]">
        {/* Left: headline & description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center border-b border-gray-200 px-8 py-14 md:px-12 lg:border-b-0 lg:border-r"
        >
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1628] md:text-5xl lg:text-[3.4rem]">
            Financial infrastructure
            <br />
            that flows with{' '}
            <span className="text-[#00875A]">your business.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-500">
            RupeeFlow unifies payments, lending, treasury, and customer finance
            journeys in one platform built for Indian and global growth.
          </p>
        </motion.div>

        {/* Right: placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center px-8 py-10 md:px-10"
        >
          <div className="flex h-56 w-full items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50">
            <span className="text-xs text-gray-400">Visual coming soon</span>
          </div>
        </motion.div>
      </div>

      {/* ── Row 2: Stats ── */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
            className={`px-8 py-7 md:px-10 ${i < stats.length - 1 ? 'border-r border-gray-200' : ''}`}
          >
            <div className="text-2xl font-extrabold tracking-tight text-[#0B1628] md:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
