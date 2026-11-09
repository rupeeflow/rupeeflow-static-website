'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Container from '@/components/ui/Container'
import { MODULE_LABELS } from '@/components/financial-flow/config'

const FinancialFlowNetwork = dynamic(
  () => import('@/components/financial-flow/FinancialFlowNetwork'),
  { ssr: false }
)

export default function UnifiedPlatformSection() {
  return (
    <section className="relative bg-white overflow-hidden border-t border-[#53BEC2]/20">
      <Container className="relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 md:mb-14 px-4"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#109F58]">
            Financial Flow Network
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#054C38] max-w-3xl mx-auto">
            Stop using 5<br className="hidden sm:block" />
            different apps.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#109F58]/80 max-w-2xl mx-auto">
            One unified platform for AI-powered payments, instant payouts, smart
            cards, and business credit — everything seamlessly connected.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <FinancialFlowNetwork />
        </motion.div>

        {/* Module legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 px-4"
        >
          {MODULE_LABELS.map(item => (
            <span
              key={item.id}
              className="inline-flex items-center gap-2 text-xs text-[#5A8F7A]"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: item.color,
                  boxShadow: `0 0 8px ${item.color}88`,
                }}
              />
              {item.label}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
