'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useState } from 'react'

export default function RevenueCalculator() {
  const [dailyRevenue, setDailyRevenue] = useState('')
  const [result, setResult] = useState<{
    eligible: string
    monthly: string
    repayment: string
  } | null>(null)

  const handleCalculate = () => {
    const revenue = parseInt(dailyRevenue) || 0
    if (revenue < 1500) {
      setResult({
        eligible: '₹0',
        monthly: '₹0',
        repayment: 'Minimum ₹1,500 daily revenue required',
      })
    } else {
      const monthlyRevenue = revenue * 30
      const eligibleAmount = Math.min(monthlyRevenue * 2, 500000)
      const dailyRepayment = Math.floor(revenue * 0.05)
      
      setResult({
        eligible: `₹${(eligibleAmount / 100000).toFixed(1)}L`,
        monthly: `₹${(monthlyRevenue / 100000).toFixed(1)}L`,
        repayment: `₹${dailyRepayment.toLocaleString()}/day`,
      })
    }
  }

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
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Loan Amount
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Based on your daily UPI collections, see how much you can borrow
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Enter Your Daily Revenue
              </h3>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3 text-sm">
                  Average Daily UPI Collections (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-bold">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={dailyRevenue}
                    onChange={(e) => setDailyRevenue(e.target.value)}
                    placeholder="5000"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-emerald-300 focus:border-emerald-500 focus:outline-none transition-colors text-gray-900 text-lg font-semibold"
                  />
                </div>
                <p className="text-gray-600 text-xs mt-2">
                  Enter your average daily sales through UPI
                </p>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
              >
                Calculate Now
              </button>

              {/* Quick Examples */}
              <div className="mt-6 pt-6 border-t border-emerald-200">
                <p className="text-gray-600 text-sm mb-3 font-semibold">Quick Examples:</p>
                <div className="grid grid-cols-3 gap-2">
                  {['2000', '5000', '10000'].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setDailyRevenue(amount)
                        setTimeout(handleCalculate, 100)
                      }}
                      className="px-3 py-2 rounded-lg bg-white border border-emerald-200 text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl"
            >
              {result ? (
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b border-gray-100">
                    <div className="text-gray-600 text-sm mb-2">You're Eligible For</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                      {result.eligible}
                    </div>
                    <div className="text-gray-500 text-sm">Loan Amount</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                      <span className="text-gray-600 text-sm">Monthly Revenue</span>
                      <span className="text-gray-900 font-bold text-lg">{result.monthly}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                      <span className="text-gray-600 text-sm">Daily Repayment</span>
                      <span className="text-emerald-600 font-bold text-lg">{result.repayment}</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-start gap-3 mb-4">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">3-minute approval process</span>
                    </div>
                    <div className="flex items-start gap-3 mb-4">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">Funds in 24 hours</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">No collateral required</span>
                    </div>
                  </div>

                  <a
                    href="#apply"
                    className="block w-full py-3 rounded-xl bg-gray-900 text-white font-semibold text-center hover:bg-gray-800 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Enter your daily revenue to see<br />how much you can borrow
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
