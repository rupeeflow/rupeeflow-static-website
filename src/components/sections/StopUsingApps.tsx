'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const FloatingCards3D = dynamic(() => import('@/components/FloatingCards3D'), {
  ssr: false,
})

export default function StopUsingApps() {
  return (
    <section className="border-t border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
        {/* Left: heading + description only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center px-8 py-16 md:px-12 lg:py-20"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            All in one
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B1628] md:text-4xl">
            Stop using 5<br />
            different apps.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            One unified platform for AI-powered payments, instant payouts, smart
            cards, and business credit — everything seamlessly connected.
          </p>
        </motion.div>

        {/* Right: floating cards — no divider, flows as one */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="h-[480px] lg:h-auto lg:min-h-[520px]"
        >
          <FloatingCards3D />
        </motion.div>
      </div>
    </section>
  )
}
