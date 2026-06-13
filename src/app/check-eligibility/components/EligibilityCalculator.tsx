'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useState } from 'react'

export default function EligibilityCalculator() {
  const [formData, setFormData] = useState({
    income: '',
    creditScore: '',
    employment: 'salaried',
    loanType: 'personal',
  })

  const [result, setResult] = useState<{
    eligible: boolean
    amount: string
    message: string
  } | null>(null)

  const handleCalculate = () => {
    const income = parseInt(formData.income) || 0
    const creditScore = parseInt(formData.creditScore) || 0
    
    if (income < 15000 || creditScore < 600) {
      setResult({
        eligible: false,
        amount: '₹0',
        message: 'Unfortunately, you do not meet the minimum eligibility criteria at this time.',
      })
    } else {
      const multiplier = formData.employment === 'salaried' ? 15 : 10
      const amount = income * multiplier
      setResult({
        eligible: true,
        amount: `₹${(amount / 100000).toFixed(1)}L`,
        message: 'Congratulations! You are eligible for a loan.',
      })
    }
  }

  return (
    <section id="calculator" className="relative bg-[var(--card)] py-20 md:py-28 overflow-hidden">
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
              Calculator
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Enter your details to check your loan eligibility instantly
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-100 shadow-xl"
          >
            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Monthly Income */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm">
                  Monthly Income (₹)
                </label>
                <input
                  type="number"
                  value={formData.income}
                  onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                  placeholder="e.g., 50000"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>

              {/* Credit Score */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm">
                  Credit Score
                </label>
                <input
                  type="number"
                  value={formData.creditScore}
                  onChange={(e) => setFormData({ ...formData, creditScore: e.target.value })}
                  placeholder="e.g., 750"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                />
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm">
                  Employment Type
                </label>
                <select
                  value={formData.employment}
                  onChange={(e) => setFormData({ ...formData, employment: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                >
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="business">Business Owner</option>
                  <option value="freelancer">Freelancer</option>
                </select>
              </div>

              {/* Loan Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm">
                  Loan Type
                </label>
                <select
                  value={formData.loanType}
                  onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                >
                  <option value="personal">Personal Loan</option>
                  <option value="business">Business Loan</option>
                  <option value="education">Education Loan</option>
                  <option value="medical">Medical Loan</option>
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-[var(--foreground)] font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02]"
            >
              Calculate Eligibility
            </button>

            {/* Result */}
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`mt-8 p-6 rounded-2xl border-2 ${
                  result.eligible
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    result.eligible ? 'bg-emerald-500' : 'bg-red-500'
                  }`}>
                    {result.eligible ? (
                      <svg className="w-6 h-6 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className={`text-2xl font-bold mb-2 ${
                      result.eligible ? 'text-emerald-700' : 'text-red-700'
                    }`}>
                      {result.eligible ? `Eligible for ${result.amount}` : 'Not Eligible'}
                    </div>
                    <p className={`text-sm ${
                      result.eligible ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {result.message}
                    </p>
                    {result.eligible && (
                      <a
                        href="#apply"
                        className="inline-block mt-4 px-6 py-2 rounded-lg bg-emerald-600 text-[var(--foreground)] font-semibold text-sm hover:bg-emerald-700 transition-colors"
                      >
                        Apply Now
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mt-6"
          >
            * This is an indicative calculation. Final loan amount subject to verification and approval.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
