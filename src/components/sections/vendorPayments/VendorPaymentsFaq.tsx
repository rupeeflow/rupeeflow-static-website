'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What payment methods does Rupeeflow support for vendor payouts?',
    answer:
      'Rupeeflow supports multiple payout channels including NEFT, RTGS, IMPS, UPI, and bank transfers. You can choose the appropriate method based on your urgency and transaction size requirements.',
  },
  {
    question: 'How fast are vendor payments processed?',
    answer:
      'IMPS payments are processed in under 2 seconds. NEFT transfers are settled within banking hours (typically 30 minutes to 2 hours), and RTGS is available for real-time high-value transfers during business hours.',
  },
  {
    question: 'Can I process bulk vendor payments at once?',
    answer:
      'Yes, Rupeeflow allows you to upload payment details in bulk via CSV or API and process thousands of vendor payments simultaneously. Our maker-checker workflow ensures every batch is verified before execution.',
  },
  {
    question: 'How does automatic reconciliation work?',
    answer:
      'Rupeeflow automatically matches outgoing vendor payments with corresponding invoices and purchase orders. The system flags discrepancies in real time, generates settlement reports, and helps you close your books faster.',
  },
  {
    question: 'Is Rupeeflow secure for vendor payments?',
    answer:
      'Absolutely. Rupeeflow is PCI DSS Level 1 compliant with 256-bit encryption, multi-factor authentication, IP whitelisting, and AI-powered fraud detection. Every transaction goes through our multi-layer security framework.',
  },
  {
    question: 'Can I integrate Rupeeflow with my ERP or accounting software?',
    answer:
      'Yes, Rupeeflow provides RESTful APIs and pre-built connectors for popular platforms like Zoho, Tally, SAP, and QuickBooks. Our developer documentation makes integration straightforward for your tech team.',
  },
]

export default function VendorPaymentsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 bg-[#f4f8fb]">
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
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
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
