'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const factors = [
  {
    title: 'Credit Score',
    impact: 'High Impact',
    desc: 'Your credit score is the most important factor. Higher scores unlock better rates and amounts.',
    icon: '/Developer-friendly/security-card.svg',
    percentage: '40%',
    color: 'emerald',
  },
  {
    title: 'Monthly Income',
    impact: 'High Impact',
    desc: 'Stable and sufficient income ensures you can comfortably repay the loan.',
    icon: '/home/rupee.svg',
    percentage: '30%',
    color: 'teal',
  },
  {
    title: 'Employment Type',
    impact: 'Medium Impact',
    desc: 'Salaried employees typically get higher amounts than self-employed individuals.',
    icon: '/business/developer.svg',
    percentage: '15%',
    color: 'cyan',
  },
  {
    title: 'Existing Debts',
    impact: 'Medium Impact',
    desc: 'Lower debt-to-income ratio improves your eligibility and loan amount.',
    icon: '/payments/payment-gateway.svg',
    percentage: '10%',
    color: 'blue',
  },
  {
    title: 'Age',
    impact: 'Low Impact',
    desc: 'Younger borrowers get longer tenures, while older borrowers may have income stability.',
    icon: '/features/clock.svg',
    percentage: '5%',
    color: 'indigo',
  },
]

export default function FactorsSection() {
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
            Factors That{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Affect Eligibility
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Understanding what lenders look at when evaluating your application
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-[700px] h-[280px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
            <div className="text-center text-gray-400">
              <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <p className="text-xs">700x280</p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {factors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Image src={factor.icon} alt={factor.title} width={28} height={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-gray-900 text-xl font-bold group-hover:text-emerald-600 transition-colors">
                      {factor.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      factor.impact === 'High Impact'
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : factor.impact === 'Medium Impact'
                        ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}>
                      {factor.impact}
                    </span>
                  </div>
                  <p className="text-gray-600 fontbody2 text-sm leading-relaxed mb-4">
                    {factor.desc}
                  </p>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 text-xs">Weight in Decision</span>
                      <span className="text-emerald-600 text-sm font-bold">{factor.percentage}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: factor.percentage }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
