'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '1M+', label: 'Transactions Processed' },
  { value: '100K+', label: 'Active Users' },
  { value: '1000+', label: 'Businesses Onboard' },
  { value: '12+', label: 'Regional Languages Supported' },
]

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 15 },
  },
}

export default function StatsSection() {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left image area */}
        <div className="relative w-full max-w-sm lg:max-w-md flex-shrink-0">
          <Image
            src="/images/smiling-man.png" // 👈 change to your image path
            alt="Happy customer"
            width={500}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />

          {/* Decorative green curve */}
          <svg
            viewBox="0 0 500 500"
            className="absolute -top-10 left-0 w-full h-full opacity-90 pointer-events-none"
          >
            <path
              d="M0,200 C150,300 350,100 500,200"
              stroke="#10B981"
              strokeWidth="20"
              fill="none"
            />
          </svg>
        </div>

        {/* Right content area */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Trusted by Thousands, <br className="hidden md:block" />
            Growing Every Day
          </h2>

          {/* Animated stats grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white shadow-md rounded-2xl py-10 flex flex-col items-center justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mt-2 text-center px-3">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
