'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How does Rupeeflow simplify rent payments?',
    answer:
      'Rupeeflow automates your entire rent payment process. Set up recurring payments, link your rental agreements, and let the platform handle timely disbursements via NEFT, RTGS, IMPS, or UPI — all from a single dashboard.',
  },
  {
    question: 'What payment methods can I use to pay rent?',
    answer:
      'You can pay rent using UPI, NEFT, RTGS, IMPS, credit cards, debit cards, or digital wallets. Choose the method that best suits your convenience and cash flow requirements.',
  },
  {
    question: 'Can I set up automatic recurring rent payments?',
    answer:
      'Yes, Rupeeflow supports scheduled recurring payments. Set up your rent amount, landlord details, and preferred date once — the system will automatically process payments every month with reminders before each due date.',
  },
  {
    question: 'Is it secure to pay rent through Rupeeflow?',
    answer:
      'Absolutely. Rupeeflow uses bank-grade 256-bit encryption, PCI DSS compliance, and multi-factor authentication. All transactions are processed through RBI-authorized payment channels.',
  },
  {
    question: 'Can I split rent payments with roommates?',
    answer:
      'Yes, Rupeeflow offers split payment options that allow you to divide rent across multiple payers. Each person can pay their share independently, and the platform tracks all contributions.',
  },
  {
    question: 'Will I get receipts for my rent payments?',
    answer:
      'Yes, digital receipts are generated instantly after each successful payment. You can download and share them from your dashboard, making it easy to maintain records for tax purposes.',
  },
]

export default function RentalFaq() {
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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
