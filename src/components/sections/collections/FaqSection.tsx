'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What makes RupeeFlow different from other payment gateways in India?',
    answer:
      'RupeeFlow stands out with India\'s first voice-powered payment system, supporting 12+ regional languages. We offer instant settlements, 99.9% uptime guarantee, and zero setup fees. Our AI-powered fraud detection and customizable workflows make us the preferred choice for 50,000+ Indian businesses.',
  },
  {
    question: 'How quickly can I start accepting payments with RupeeFlow?',
    answer:
      'You can start accepting payments within 5 minutes! Simply sign up, complete KYC (takes 2-3 minutes), and integrate using our ready-to-use Payment Links or copy-paste code. No technical knowledge required. For developers, we offer REST APIs and SDKs for seamless integration.',
  },
  {
    question: 'What are RupeeFlow\'s pricing and transaction fees?',
    answer:
      'RupeeFlow offers transparent pricing with zero setup fees, no monthly charges, and no hidden costs. UPI transactions start at just 0.5%, card payments at 1.99%, and net banking at 1.5%. Volume-based discounts available for businesses processing ₹10L+ monthly. Contact sales for custom enterprise pricing.',
  },
  {
    question: 'How secure are payments processed through RupeeFlow?',
    answer:
      'RupeeFlow is PCI DSS Level 1 certified, RBI compliant, and uses 256-bit SSL encryption. We implement 3D Secure authentication, tokenization, and real-time fraud detection powered by machine learning. All transactions are monitored 24/7, and we offer 100% money-back guarantee for unauthorized transactions.',
  },
  {
    question: 'Can RupeeFlow handle international payments and multiple currencies?',
    answer:
      'Yes! RupeeFlow supports international payments from 100+ countries in 15+ currencies including USD, EUR, GBP, and AED. We offer competitive forex rates, automatic currency conversion, and seamless integration with Indian bank accounts. Perfect for exporters, freelancers, and SaaS companies.',
  },
  {
    question: 'What kind of customer support does RupeeFlow provide?',
    answer:
      'RupeeFlow provides 24/7/365 support via phone, email, WhatsApp, and live chat in English, Hindi, and 8 regional languages. Dedicated account managers for enterprise clients, average response time under 2 minutes, and 98% customer satisfaction rate. We also offer comprehensive documentation and video tutorials.',
  },
  {
    question: 'Does RupeeFlow offer recurring payment and subscription management?',
    answer:
      'Absolutely! RupeeFlow excels at recurring payments with automated billing, subscription management, and failed payment recovery. Support for variable amounts, trial periods, prorated billing, and dunning management. Perfect for SaaS, memberships, insurance premiums, and EMI collections with 95% success rate.',
  },
  {
    question: 'How does RupeeFlow help with business analytics and reporting?',
    answer:
      'RupeeFlow provides real-time analytics dashboard with 50+ insights, customizable reports, and data export capabilities. Track payment trends, customer behavior, revenue forecasts, and conversion rates. Advanced features include cohort analysis, churn prediction, and integration with accounting software like Tally, QuickBooks, and Zoho Books.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
            Frequently Asked <span className="text-emerald-500">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about RupeeFlow's payment solutions
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-all duration-300 group"
              >
                <span className="fontheading text-base md:text-lg text-gray-900 pr-4 group-hover:text-emerald-600 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0,
                    scale: hoveredIndex === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <svg
                    className="w-5 h-5 text-emerald-500 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>
              <motion.div
                animate={{ 
                  height: openIndex === index || hoveredIndex === index ? 'auto' : 0,
                  opacity: openIndex === index || hoveredIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm md:text-base text-gray-600 fontbody2 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
