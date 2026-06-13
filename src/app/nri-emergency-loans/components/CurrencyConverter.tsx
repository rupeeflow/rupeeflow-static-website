'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useState } from 'react'

const currencies = [
  { code: 'USD', symbol: '$', rate: 83, flag: '🇺🇸' },
  { code: 'GBP', symbol: '£', rate: 105, flag: '🇬🇧' },
  { code: 'EUR', symbol: '€', rate: 90, flag: '🇪🇺' },
  { code: 'AED', symbol: 'د.إ', rate: 22.6, flag: '🇦🇪' },
  { code: 'SGD', symbol: 'S$', rate: 62, flag: '🇸🇬' },
]

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
  const [inrAmount, setInrAmount] = useState('')

  const handleConvert = () => {
    const amt = parseFloat(amount) || 0
    const converted = amt * selectedCurrency.rate
    setInrAmount(converted.toLocaleString('en-IN'))
  }

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
            Calculate Loan in{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Your Currency
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            See how much you can send to your family in India
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 border-2 border-cyan-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* From Currency */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm">
                  Your Currency
                </label>
                <select
                  value={selectedCurrency.code}
                  onChange={(e) => setSelectedCurrency(currencies.find(c => c.code === e.target.value)!)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none transition-colors text-gray-900 mb-4"
                >
                  {currencies.map((curr) => (
                    <option key={curr.code} value={curr.code}>
                      {curr.flag} {curr.code} ({curr.symbol})
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-4 rounded-xl border-2 border-cyan-300 focus:border-cyan-500 focus:outline-none transition-colors text-gray-900 text-lg font-semibold"
                />
              </div>

              {/* To INR */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-sm">
                  Amount in India (INR)
                </label>
                <div className="w-full px-4 py-3 rounded-xl bg-[var(--card)] border-2 border-gray-200 mb-4 text-gray-500">
                  🇮🇳 INR (₹)
                </div>
                <div className="w-full px-4 py-4 rounded-xl bg-[var(--card)] border-2 border-emerald-300 text-emerald-600 text-lg font-bold flex items-center justify-between">
                  <span>₹ {inrAmount || '0'}</span>
                  {inrAmount && (
                    <span className="text-xs text-gray-500">
                      @ ₹{selectedCurrency.rate}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={handleConvert}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-[var(--foreground)] font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              Convert & Check Eligibility
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              * Exchange rates are indicative. Actual rates may vary.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
