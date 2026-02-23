'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string[]
}

interface FAQProps {
  faqs: FAQItem[]
}

function FAQItemComponent({
  faq,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}: {
  faq: FAQItem
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}) {
  return (
    <div
      className="border-b border-gray-700/30"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      {/* QUESTION */}
      <button
        onClick={onToggle}   // mobile support
        className="w-full py-5 px-6 flex justify-between items-start text-left hover:bg-white/5 transition-colors group"
      >
        <h3 className="text-base md:text-lg text-white pr-4 group-hover:text-emerald-400 transition-colors">
          {faq.question}
        </h3>

        <ChevronDown
          className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* ANSWER */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          {faq.answer.map((line, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function FAQSection({ faqs }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-[#0a1413] to-black">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4">
            Find answers about RupeeFlow services.
          </p>
        </div>

        {/* FAQ BOX */}
        <div className="bg-white backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
          {faqs.map((faq) => (
            <FAQItemComponent
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onOpen={() => setOpenId(faq.id)}   // hover open
              onClose={() => setOpenId(null)}    // hover leave close
              onToggle={() =>
                setOpenId(openId === faq.id ? null : faq.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}