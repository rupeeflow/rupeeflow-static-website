'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import faqs from '@/data/faqs.json'

export default function FaqSupportSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 bg-neutral-100 text-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Frequently Asked <span className="text-emerald-600">Questions</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Everything you need to know about RupeeFlow — from cross-border UPI to
          developer tools.
        </p>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/faq-image.png"
            alt="FAQ illustration"
            width={320}
            height={320}
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* FAQ List - Using FAQAccordion styling */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-[var(--card)] ${
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

      {/* Ask a Question Form */}
      <div className="max-w-xl mx-auto mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ask a Question</h3>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-600"
          />
          <textarea
            placeholder="Enter your question here"
            className="w-full px-4 py-3 border border-gray-300 rounded-md h-24 focus:outline-none focus:border-emerald-600"
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-emerald hover:bg-emerald-700 text-[var(--foreground)] font-semibold rounded-full transition cursor-pointer"
          >
            SUBMIT →
          </button>
        </form>
      </div>
    </section>
  )
}
