'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is RupeeFlow?',
      answer:
        'RupeeFlow is a unified UPI platform that enables users and businesses to send, receive, and manage payments seamlessly — across borders and languages.',
    },
    {
      question: 'Is RupeeFlow free?',
      answer:
        'Yes! Basic UPI transactions and core features are completely free. Premium features like AI Insights and international transfers may have small fees.',
    },
    {
      question: 'How is RupeeFlow different from other UPI apps?',
      answer:
        'RupeeFlow supports voice-enabled payments, cross-border transactions, and AI-powered analytics — offering a smarter and more inclusive experience.',
    },
    {
      question: 'Is RupeeFlow Safe?',
      answer:
        'Absolutely. RupeeFlow uses RBI and NPCI-compliant security standards, end-to-end encryption, and multi-factor authentication to protect your data.',
    },
    {
      question: 'How does RupeeFlow Work?',
      answer:
        'Simply link your bank account and start sending or receiving money instantly via UPI. You can also automate bill payments and monitor expenses in real time.',
    },
    {
      question: 'How to do bulk invoice payments?',
      answer:
        'With RupeeFlow Business, you can upload invoices in bulk and process all payments in one go — saving time while maintaining full payment tracking.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-gray-50 text-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-gray-600 max-w-md">
            Explore our FAQ section to find answers about RupeeFlow’s financial
            solutions.
          </p>
        </div>

        {/* Right Accordion Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-medium text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
