'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { FAQItem } from '@/data/faqs'

interface FAQAccordionProps {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
}

export default function FAQAccordion({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
}: FAQAccordionProps) {
  const [active, setActive] = useState<number | null>(null)

  // Split title into regular + highlighted last word
  const words = title.split(' ')
  const highlight = words.pop()
  const rest = words.join(' ')

  return (
    <section className="py-24 bg-[var(--card)]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="rf-h2 text-gray-900">
            {rest}{' '}
            <span className="text-emerald-500">{highlight}</span>
          </h2>
          {subtitle && (
            <p className="rf-lead text-gray-500 mt-4 max-w-xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                active === i
                  ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.12)]'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className={`rf-body font-semibold ${active === i ? 'text-emerald-600' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 ml-4 text-emerald-500 transition-transform duration-300 ${
                    active === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="rf-body text-gray-500 px-6 pb-5 leading-relaxed">
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
