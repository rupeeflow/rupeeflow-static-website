'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const ImagePlaceholder = ({ size }: { size?: string }) => (
  <div className="text-center text-gray-400">
    <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
    </svg>
    {size && <p className="text-xs">{size}</p>}
  </div>
)

const comparisonData = [
  {
    feature: 'Approval Time',
    traditional: '2-4 weeks',
    mca: '3 minutes',
  },
  {
    feature: 'Interest',
    traditional: 'On full amount',
    mca: 'Only on used amount',
  },
  {
    feature: 'Repayment',
    traditional: 'Fixed EMI',
    mca: 'Flexible, anytime',
  },
  {
    feature: 'Prepayment Fee',
    traditional: '2-5% penalty',
    mca: 'Zero charges',
  },
  {
    feature: 'Re-borrowing',
    traditional: 'New application',
    mca: 'Instant revolving',
  },
  {
    feature: 'Access',
    traditional: 'Branch visit',
    mca: 'Voice + App 24/7',
  },
]

export default function ComparisonSection() {
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
            Credit Line vs{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Personal Loans
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            See how Personal Credit Line compares to traditional personal loans
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 px-4">
              <div className="text-gray-600 text-sm font-bold uppercase tracking-wider">
                Feature
              </div>
              <div className="text-center text-gray-600 text-sm font-bold uppercase tracking-wider">
                Personal Loan
              </div>
              <div className="text-center text-emerald-600 text-sm font-bold uppercase tracking-wider">
                Credit Line
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 bg-[var(--card)] rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-gray-900 font-semibold flex items-center">
                    {row.feature}
                  </div>
                  <div className="text-center text-gray-600 flex items-center justify-center text-sm">
                    {row.traditional}
                  </div>
                  <div className="text-center text-emerald-600 font-bold flex items-center justify-center text-sm">
                    {row.mca}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <div className="w-full max-w-[500px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
              <Image
                src="/personal-credit/tradvnew.jpeg"
                alt="Credit Line vs Personal Loans"
                width={500}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 fontbody2 mb-6">
            Experience the difference with our modern lending solution
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-[var(--foreground)] font-semibold text-base hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--card)] animate-pulse" />
            Get Started Now
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
