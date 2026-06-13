'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import MerchantAdvanceVisual from './MerchantAdvanceVisual'

const features = [
  {
    title: 'Lightning Fast Approval',
    desc: 'Get approved in just 3 minutes with our AI-powered assessment. No lengthy paperwork or waiting periods.',
  },
  {
    title: 'Flexible Repayment',
    desc: 'Auto-deduct from daily sales. Pay more when business is good, less when it is slow. No fixed EMIs.',
  },
  {
    title: 'No Collateral Required',
    desc: 'Based purely on your UPI transaction history and credit score. No property or assets needed.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'No hidden charges. Clear fee structure with competitive rates. Know exactly what you pay.',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative bg-[var(--card)] py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Merchant Cash Advance
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Designed for gig workers and small businesses who need quick access to capital
          </p>
        </motion.div>

        {/* Two Column Layout: Features + Animated Visual */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Feature List */}
          <div className="flex-1 space-y-6 w-full pl-5 lg:pl-0">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[var(--card)] rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                {/* Number Badge */}
                <div className="absolute -left-3 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-[var(--foreground)] font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="pl-6">
                  <h3 className="text-gray-900 text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 fontbody2 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Right: Premium Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <MerchantAdvanceVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
