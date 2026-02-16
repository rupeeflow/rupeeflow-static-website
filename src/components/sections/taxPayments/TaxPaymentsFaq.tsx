'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What types of tax payments can I make through Rupeeflow?',
    answer:
      'Rupeeflow supports GST challan payments including CGST, SGST, IGST, and Cess. You can generate and pay challans for regular returns, advance tax, and any demand notices through our platform.',
  },
  {
    question: 'What payment methods are supported for GST payments?',
    answer:
      'You can pay GST via credit card, debit card, net banking, UPI, NEFT, or RTGS. All payment methods are processed through RBI-authorized payment gateways for maximum security.',
  },
  {
    question: 'How quickly will my GST payment reflect on the GST portal?',
    answer:
      'Online payments through net banking and UPI are reflected almost instantly. Credit/debit card payments may take up to 2-4 hours. NEFT/RTGS payments follow standard banking timelines.',
  },
  {
    question: 'Will I get a CIN (Challan Identification Number) after payment?',
    answer:
      'Yes, you will receive your CIN immediately after a successful payment. You can download the challan receipt from your Rupeeflow dashboard, which serves as proof of payment for your records.',
  },
  {
    question: 'Can I schedule recurring GST payments?',
    answer:
      'Yes, Rupeeflow allows you to set up scheduled payments for your regular GST filing dates. You will also receive automated reminders before due dates to ensure you never miss a deadline.',
  },
  {
    question: 'Is it safe to make tax payments through Rupeeflow?',
    answer:
      'Absolutely. Rupeeflow is PCI DSS Level 1 compliant with 256-bit SSL encryption. All payments are processed through RBI-authorized channels with multi-factor authentication for maximum security.',
  },
]

export default function TaxPaymentsFaq() {
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
