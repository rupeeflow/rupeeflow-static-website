'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is Rupeeflow Bulk Pay?',
    answer:
      'Rupeeflow Bulk Pay is an enterprise-grade payout solution that allows businesses to process thousands of payments simultaneously. Whether it\'s salary disbursements, vendor payments, or refunds, you can automate and manage all your outgoing payments from a single dashboard.',
  },
  {
    question: 'What payment methods are supported for bulk payouts?',
    answer:
      'Rupeeflow Bulk Pay supports multiple payout methods including NEFT, RTGS, IMPS, UPI, and bank transfers. You can choose the method that best suits your speed and cost requirements for each batch of payouts.',
  },
  {
    question: 'How fast are bulk payouts processed?',
    answer:
      'With Rupeeflow, most payouts are processed within 2 seconds on average via IMPS. NEFT transfers are settled within banking hours, while RTGS is available for high-value real-time transfers during business hours.',
  },
  {
    question: 'Is there a limit on the number of payouts per batch?',
    answer:
      'Rupeeflow supports processing thousands of payouts in a single batch. There are no hard limits on the number of transactions per batch, making it ideal for enterprises with high-volume disbursement needs.',
  },
  {
    question: 'How does the maker-checker approval workflow work?',
    answer:
      'Rupeeflow provides a configurable maker-checker workflow where one user creates the payment batch (maker) and another authorized user reviews and approves it (checker). This ensures dual authorization for every payout, enhancing security and compliance.',
  },
  {
    question: 'Can I integrate Bulk Pay with my existing ERP or accounting software?',
    answer:
      'Yes, Rupeeflow offers RESTful APIs and pre-built integrations with popular ERP, HRMS, and accounting platforms like Zoho, Tally, and SAP. Our developer documentation makes integration straightforward.',
  },
]

export default function BulkPayoutsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
            Frequently Asked <span className="text-emerald-500">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="fontheading text-base md:text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-emerald-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-sm md:text-base text-gray-500 fontbody2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
