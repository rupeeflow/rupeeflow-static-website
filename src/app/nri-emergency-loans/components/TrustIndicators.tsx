'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const indicators = [
  {
    title: 'RBI Compliant',
    desc: 'Fully compliant with RBI and FEMA regulations for NRI transactions',
    icon: '/features/shield.svg',
  },
  {
    title: 'Secure Transfers',
    desc: 'Bank-grade encryption for all international money transfers',
    icon: '/Developer-friendly/security-card.svg',
  },
  {
    title: 'Transparent Pricing',
    desc: 'No hidden charges. Clear exchange rates and fees upfront',
    icon: '/home/rupee.svg',
  },
  {
    title: 'Quick Disbursal',
    desc: 'Funds reach your family in India within 24 hours',
    icon: '/features/clock.svg',
  },
]

export default function TrustIndicators() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Why NRIs{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Trust Us
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Your family&apos;s financial security is our top priority
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center flex-shrink-0">
                <Image src={indicator.icon} alt={indicator.title} width={24} height={24} />
              </div>
              <div>
                <h3 className="text-gray-900 text-lg font-bold mb-2">{indicator.title}</h3>
                <p className="text-gray-600 fontbody2 text-sm">{indicator.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: '25K+', label: 'NRIs Served' },
            { number: '₹500Cr+', label: 'Disbursed' },
            { number: '99.5%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
