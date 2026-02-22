'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useState } from 'react'

export default function InvoiceSimulator() {
  const [invoiceAmount, setInvoiceAmount] = useState('')
  const [paymentTerms, setPaymentTerms] = useState('30')
  const [result, setResult] = useState<{
    upfront: string
    remaining: string
    fee: string
  } | null>(null)

  const handleCalculate = () => {
    const amount = parseInt(invoiceAmount) || 0
    const upfrontPercent = 80
    const feePercent = 2

    const upfront = amount * (upfrontPercent / 100)
    const fee = amount * (feePercent / 100)
    const remaining = amount - upfront - fee

    setResult({
      upfront: `₹${(upfront / 100000).toFixed(2)}L`,
      remaining: `₹${(remaining / 100000).toFixed(2)}L`,
      fee: `₹${(fee / 1000).toFixed(1)}K`,
    })
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
            Invoice{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Calculator
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            See how much you can get against your pending invoices
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border-2 border-indigo-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Enter Invoice Details
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-sm">
                    Invoice Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={invoiceAmount}
                    onChange={(e) => setInvoiceAmount(e.target.value)}
                    placeholder="e.g., 500000"
                    className="w-full px-4 py-4 rounded-xl border-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-colors text-gray-900 text-lg font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-sm">
                    Payment Terms (Days)
                  </label>
                  <select
                    value={paymentTerms}
                    onChange={(e) => setPaymentTerms(e.target.value)}
                    className="w-full px-4 py-4 rounded-xl border-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-colors text-gray-900"
                  >
                    <option value="30">30 Days</option>
                    <option value="45">45 Days</option>
                    <option value="60">60 Days</option>
                    <option value="90">90 Days</option>
                  </select>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-500/30"
                >
                  Calculate Financing
                </button>

                <div className="pt-6 border-t border-indigo-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>80% upfront payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>2% processing fee</span>
                  </div>
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
                    <div className="text-gray-600 text-sm mb-2">You Get Immediately</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {result.upfront}
                    </div>
                    <div className="text-gray-500 text-sm">80% Upfront Payment</div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gray-50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-600 text-sm">Processing Fee (2%)</span>
                        <span className="text-gray-900 font-bold">{result.fee}</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-600 text-sm">Balance on Collection</span>
                        <span className="text-indigo-600 font-bold text-lg">{result.remaining}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Paid after your client settles the invoice
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">24-hour approval & disbursal</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">No personal guarantee required</span>
                    </div>
                  </div>

                  <a
                    href="#apply"
                    className="block w-full py-3 rounded-xl bg-gray-900 text-white font-semibold text-center hover:bg-gray-800 transition-colors"
                  >
                    Apply for Financing
                  </a>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Enter your invoice details to see<br />how much you can get
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
