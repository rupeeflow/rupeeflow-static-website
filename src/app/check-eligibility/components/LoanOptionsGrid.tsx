'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const loanOptions = [
  {
    name: 'Personal Credit Line',
    minIncome: '₹15,000',
    minScore: '650',
    maxAmount: '₹50,000',
    icon: '/home/wallet.svg',
    color: 'emerald',
  },
  {
    name: 'Merchant Cash Advance',
    minIncome: '₹50,000',
    minScore: '650',
    maxAmount: '₹5,00,000',
    icon: '/business/kirana.svg',
    color: 'teal',
  },
  {
    name: 'Education Loan',
    minIncome: '₹25,000',
    minScore: '650',
    maxAmount: '₹25,00,000',
    icon: '/business/developer.svg',
    color: 'cyan',
  },
  {
    name: 'Medical Loan',
    minIncome: '₹20,000',
    minScore: '600',
    maxAmount: '₹15,00,000',
    icon: '/features/shield.svg',
    color: 'blue',
  },
  {
    name: 'NRI Emergency Loan',
    minIncome: '$2,000',
    minScore: '700',
    maxAmount: '₹10,00,000',
    icon: '/home/globe.svg',
    color: 'indigo',
  },
  {
    name: 'Invoice Financing',
    minIncome: '₹1,00,000',
    minScore: '680',
    maxAmount: '₹50,00,000',
    icon: '/payments/payment-links.svg',
    color: 'purple',
  },
]

export default function LoanOptionsGrid() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Compare{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Loan Options
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            See minimum requirements for each loan type
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanOptions.map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Image src={loan.icon} alt={loan.name} width={28} height={28} />
              </div>

              {/* Name */}
              <h3 className="text-gray-900 text-xl font-bold mb-6 group-hover:text-emerald-600 transition-colors">
                {loan.name}
              </h3>

              {/* Requirements */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Min. Income</span>
                  <span className="text-gray-900 font-bold text-sm">{loan.minIncome}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Min. Credit Score</span>
                  <span className="text-gray-900 font-bold text-sm">{loan.minScore}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-600 text-sm">Max Amount</span>
                  <span className="text-emerald-600 font-bold text-base">{loan.maxAmount}</span>
                </div>
              </div>

              {/* Check Button */}
              <button className="mt-6 w-full py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold text-sm hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 border border-gray-200 hover:border-emerald-300">
                Check Eligibility
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
