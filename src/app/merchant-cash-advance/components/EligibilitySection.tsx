'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const eligibilityCriteria = [
  {
    title: 'Credit Score',
    requirement: 'Minimum 650',
    desc: 'A decent credit history helps us assess your repayment capability',
    icon: '/Developer-friendly/security-card.svg',
  },
  {
    title: 'Business Age',
    requirement: '6+ Months',
    desc: 'Your business should have at least 6 months of operational history',
    icon: '/features/clock.svg',
  },
  {
    title: 'Monthly Revenue',
    requirement: '₹50,000+',
    desc: 'Consistent monthly UPI collections of at least ₹50,000',
    icon: '/payments/upi-collections.svg',
  },
  {
    title: 'Business Type',
    requirement: 'All Types',
    desc: 'Retailers, freelancers, gig workers, delivery partners, and SMEs',
    icon: '/business/kirana.svg',
  },
]

export default function EligibilitySection() {
  return (
    <section className="relative bg-[var(--card)] py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Eligibility{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Criteria
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Check if you qualify for Merchant Cash Advance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eligibilityCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[var(--card)] rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={criteria.icon}
                  alt={criteria.title}
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 text-lg font-bold mb-3">
                {criteria.title}
              </h3>

              {/* Requirement Badge */}
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                <span className="text-emerald-700 text-sm font-semibold">
                  {criteria.requirement}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 fontbody2 text-sm leading-relaxed">
                {criteria.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-[var(--foreground)] font-semibold text-base hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--card)] animate-pulse" />
            Check Your Eligibility
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
