'use client'

import { HelpCircle } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How do I generate Client ID and Secret Key?',
    answer: 'To generate Client ID and Secret Key, login to your dashboard and go to Settings → Developer Section → Click on Generate → New Client ID and Secret Key is Generated.'
  },
  {
    question: 'How do I whitelist my IP address?',
    answer: 'To whitelist the IP address, go to Settings → Developer Section → (Scroll down) Enter IP Address → Click Add.'
  },
  {
    question: 'What is the minimum payout amount?',
    answer: 'The minimum payout amount is ₹100. There is no maximum limit for NEFT and RTGS. IMPS has a maximum limit of ₹5 lakhs per transaction.'
  },
  {
    question: 'How long does a payout take to process?',
    answer: 'IMPS: Instant (24x7), NEFT: 2-4 hours (24x7), RTGS: Same day (during bank hours). Minimum RTGS amount is ₹2 lakhs.'
  },
  {
    question: 'How do I set up webhooks?',
    answer: 'Go to Settings → Webhooks → Add Webhook URL. Configure your endpoint URL and select the events you want to receive. Your endpoint must return HTTP 200 status code.'
  },
  {
    question: 'What payment modes are supported for Pay-In?',
    answer: 'Currently, we support UPI payments for Pay-In. Customers can pay using any UPI app like Google Pay, PhonePe, Paytm, BHIM, etc.'
  },
  {
    question: 'What happens if a payout fails?',
    answer: 'If a payout fails, the amount is automatically refunded to your wallet. You can retry the payout or contact support if the issue persists.'
  },
  {
    question: 'How do I check my wallet balance?',
    answer: 'Use the GET /api/v1/payments/payout/wallet endpoint to check your available balance, total payouts, and total top-ups.'
  },
  {
    question: 'Can I do bulk payouts?',
    answer: 'Yes! You can send multiple payouts in a single API call by passing an array of payout objects in the data field. Each payout will be processed independently.'
  },
  {
    question: 'How do I top up my payout wallet?',
    answer: 'Contact our support team to top up your payout wallet. You can reach us via the Support page or email support@rupeeflow.co.'
  },
  {
    question: 'Is there a testing/sandbox environment?',
    answer: 'Yes, we provide a sandbox environment for testing. Contact support to get sandbox credentials and base URL.'
  },
  {
    question: 'What are the API rate limits?',
    answer: 'Standard rate limit is 100 requests per minute per IP address. Contact us if you need higher limits for your use case.'
  },
  {
    question: 'How do I handle webhook retries?',
    answer: 'We automatically retry failed webhooks up to 3 times with exponential backoff (1 min, 5 min, 15 min). Ensure your endpoint is idempotent and returns 200 status code.'
  },
  {
    question: 'Can I cancel a pending payout?',
    answer: 'Payouts in PENDING status cannot be cancelled as they are already being processed by the bank. Contact support immediately for assistance.'
  },
  {
    question: 'What information is required for a payout?',
    answer: 'Required fields: amount, purpose, beneficiaryName, bankName, accountNumber, ifscCode, paymentMode. Optional fields: remarks, payoutId.'
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl fontheading2 text-gradient-teal-emerald mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-300 fontbody">
          Find answers to common questions about RupeeFlow APIs, integration, and features.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-12"></div>

      {/* FAQs */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 rounded-xl overflow-hidden hover:border-teal-500/30 transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-start gap-4 text-left"
            >
              <div className="flex-shrink-0 mt-1">
                <HelpCircle className={`w-5 h-5 ${openIndex === index ? 'text-teal-400' : 'text-gray-500'}`} />
              </div>
              <div className="flex-1">
                <h3 className={`text-lg fontheading ${openIndex === index ? 'text-teal-400' : 'text-[var(--foreground)]'}`}>
                  {faq.question}
                </h3>
              </div>
              <div className="flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 pl-[52px]">
                <p className="text-gray-300 fontbody2 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Need More Help */}
      <div className="mt-12 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-xl p-8">
        <h3 className="text-2xl fontheading text-[var(--foreground)] mb-3">Still have questions?</h3>
        <p className="text-gray-300 fontbody2 mb-4">
          Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you.
        </p>
        <a
          href="/support"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-[var(--foreground)] fontheading rounded-xl hover:from-teal-500 hover:to-emerald-500 transition-all"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}
