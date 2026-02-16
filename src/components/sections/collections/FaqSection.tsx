'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What payment methods does Rupeeflow support for collections?',
    answer:
      'Rupeeflow supports a wide range of payment methods including credit cards, debit cards, UPI, net banking, digital wallets, EMI, pay later options, and QR code payments. This ensures your customers can pay using their preferred method.',
  },
  {
    question: 'How quickly are payments settled to my bank account?',
    answer:
      'With Rupeeflow Instant Settlement, you can receive funds in your bank account within minutes of a successful transaction. Standard settlements are processed within T+1 business day.',
  },
  {
    question: 'Is there a setup fee or monthly charge for using Rupeeflow?',
    answer:
      'Rupeeflow offers a transparent pricing model with no setup fees or hidden charges. You only pay a small transaction fee per successful payment. Contact our sales team for custom pricing based on your business volume.',
  },
  {
    question: 'How do I integrate Rupeeflow into my website or app?',
    answer:
      'Rupeeflow provides developer-friendly APIs, SDKs for popular platforms, and pre-built plugins for major e-commerce platforms. You can also use no-code solutions like Payment Links and Payment Pages to start collecting payments without any technical integration.',
  },
  {
    question: 'What security measures does Rupeeflow use to protect transactions?',
    answer:
      'Rupeeflow is PCI DSS Level 1 compliant and uses 256-bit encryption to secure all transactions. We also support 3D Secure authentication, tokenization, and fraud detection systems to ensure every payment is safe and secure.',
  },
  {
    question: 'Can I accept international payments through Rupeeflow?',
    answer:
      'Yes, Rupeeflow supports cross-border payments in multiple currencies across 100+ countries. You can accept payments from international customers with competitive exchange rates and full regulatory compliance.',
  },
]

export default function FaqSection() {
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
