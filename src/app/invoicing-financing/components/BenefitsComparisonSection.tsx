'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const comparison = [
  {
    feature: 'Nature',
    traditional: 'Debt/Loan',
    invoiceFinancing: 'Asset-based advance',
  },
  {
    feature: 'Repayment',
    traditional: 'Fixed EMI',
    invoiceFinancing: 'When client pays',
  },
  {
    feature: 'Interest',
    traditional: '12-18% p.a.',
    invoiceFinancing: 'One-time 2% fee',
  },
  {
    feature: 'Collateral',
    traditional: 'Required',
    invoiceFinancing: 'Invoice is collateral',
  },
  {
    feature: 'Credit Impact',
    traditional: 'Affects credit line',
    invoiceFinancing: 'No impact',
  },
  {
    feature: 'Approval Time',
    traditional: '7-15 days',
    invoiceFinancing: '24 hours',
  },
]

export default function BenefitsComparisonSection() {
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Invoice Financing?
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Compare with traditional business loans
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
          <div className="w-full max-w-[900px] h-[350px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
            <div className="text-center text-gray-400">
              <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <p className="text-xs">900x350</p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-gray-600 text-sm font-bold uppercase tracking-wider">
              Feature
            </div>
            <div className="text-center text-gray-600 text-sm font-bold uppercase tracking-wider">
              Traditional Loan
            </div>
            <div className="text-center text-indigo-600 text-sm font-bold uppercase tracking-wider">
              Invoice Financing
            </div>
          </div>

          <div className="space-y-3">
            {comparison.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-gray-900 font-semibold flex items-center">
                  {row.feature}
                </div>
                <div className="text-center text-gray-600 flex items-center justify-center text-sm">
                  {row.traditional}
                </div>
                <div className="text-center text-indigo-600 font-bold flex items-center justify-center text-sm">
                  {row.invoiceFinancing}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
