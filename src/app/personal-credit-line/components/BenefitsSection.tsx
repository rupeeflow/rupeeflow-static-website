'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const benefits = [
  {
    title: 'Instant Access 24/7',
    desc: 'Withdraw funds anytime through voice command or app. Available round the clock.',
    icon: '/features/clock.svg',
  },
  {
    title: 'Pay Only for What You Use',
    desc: 'Interest charged only on withdrawn amount. Unused credit limit costs you nothing.',
    icon: '/home/wallet.svg',
  },
  {
    title: 'Revolving Credit',
    desc: 'Repaid amount becomes available instantly. Borrow, repay, and borrow again.',
    icon: '/payments/upi-collections.svg',
  },
  {
    title: 'Voice-Enabled',
    desc: 'Request funds using voice in 12 Indian languages. No typing, no hassle.',
    icon: '/features/mic.png',
  },
  {
    title: 'No Prepayment Fee',
    desc: 'Pay off anytime without penalties. Complete flexibility in managing your credit.',
    icon: '/Developer-friendly/security-card.svg',
  },
  {
    title: 'Build Credit Score',
    desc: 'Responsible usage improves your credit score and unlocks higher limits.',
    icon: '/payments/payment-gateway.svg',
  },
]

export default function BenefitsSection() {
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
            Key{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Why thousands choose our Personal Credit Line
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 fontbody2 text-sm leading-relaxed">
                {benefit.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-3xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
