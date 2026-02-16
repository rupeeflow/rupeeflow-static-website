'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How does Rupeeflow handle bulk salary disbursement?',
    answer:
      'Rupeeflow allows you to upload employee salary data via CSV or through our API. Once uploaded, the system validates all entries, routes them through your configured approval workflow, and processes payments in bulk via NEFT, RTGS, IMPS, or UPI.',
  },
  {
    question: 'What payment channels are supported for salary payouts?',
    answer:
      'We support NEFT, RTGS, IMPS, and UPI for salary disbursements. IMPS transfers are processed in under 2 seconds, while NEFT and RTGS follow standard banking timelines. You can choose the channel based on speed and cost preferences.',
  },
  {
    question: 'Can I schedule recurring payroll runs?',
    answer:
      'Yes, Rupeeflow supports scheduled payroll with configurable frequencies — monthly, bi-weekly, or custom dates. Set it up once and the system automatically processes salaries on schedule with the appropriate approval workflow.',
  },
  {
    question: 'How does the maker-checker approval work for salary batches?',
    answer:
      'You can configure multi-level approval hierarchies where a maker creates the salary batch and one or more checkers review and approve before execution. This ensures dual authorization and prevents unauthorized disbursements.',
  },
  {
    question: 'Is Rupeeflow compliant with Indian payroll regulations?',
    answer:
      'Yes, Rupeeflow is fully compliant with RBI guidelines and Indian labor regulations. We support TDS deduction tracking, PF contributions, and generate reports that are compatible with standard tax filing requirements.',
  },
  {
    question: 'Can I integrate Rupeeflow with my existing HRMS or ERP?',
    answer:
      'Absolutely. Rupeeflow provides RESTful APIs and pre-built integrations with popular platforms like Zoho People, greytHR, SAP SuccessFactors, and Tally. Our developer documentation makes integration straightforward.',
  },
]

export default function SalaryFaq() {
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
