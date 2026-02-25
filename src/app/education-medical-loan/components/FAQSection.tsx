'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is the maximum loan amount I can get?',
    answer: 'For education loans, you can get up to ₹25 lakhs. For medical loans, the maximum amount is ₹15 lakhs. The actual amount depends on your income, credit score, and specific requirements.',
  },
  {
    question: 'How long does the approval process take?',
    answer: 'Most applications are approved within 48 hours of document submission. For emergency medical loans, we offer express approval within 2 hours during business hours.',
  },
  {
    question: 'Do I need collateral for these loans?',
    answer: 'No collateral is required for loans up to ₹7.5 lakhs. For higher amounts, we may require collateral or a co-applicant depending on your credit profile.',
  },
  {
    question: 'Can I prepay my loan without penalties?',
    answer: 'Yes, we offer zero prepayment charges on all education and medical loans. You can pay off your loan anytime without any additional fees.',
  },
  {
    question: 'What is the moratorium period for education loans?',
    answer: 'Education loans come with a moratorium period of course duration plus 6 months or 1 year after course completion, whichever is earlier. During this period, you only pay simple interest.',
  },
  {
    question: 'Are there any tax benefits on education loans?',
    answer: 'Yes, education loans are eligible for tax deduction under Section 80E of the Income Tax Act. You can claim deduction on the interest paid for up to 8 years.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Everything you need to know about our loans
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-gray-900 font-bold text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 fontbody2 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 fontbody2 mb-4">
            Still have questions?
          </p>
          <a
            href="/support"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-emerald-500 text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition-all duration-300"
          >
            Contact Support
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
