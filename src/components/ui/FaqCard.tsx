'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FaqCardProps {
  question: string
  answer: string
}

export default function FaqCard({ question, answer }: FaqCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
        open ? 'bg-emerald-50' : 'bg-white'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-gray-900 hover:text-emerald-600"
      >
        <div className="flex items-center gap-3">
          <span className="text-emerald-600 text-lg font-bold">Q</span>
          {question}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </motion.div>
  )
}
