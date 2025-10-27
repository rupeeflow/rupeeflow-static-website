'use client'

import { motion, Variants } from 'framer-motion'
import { HelpCircle, Search } from 'lucide-react'
import { useState } from 'react'

interface FAQHeroProps {
  onSearch: (query: string) => void
}

export default function FAQHero({ onSearch }: FAQHeroProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const content: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query.toLowerCase())
  }

  return (
    <section className="py-32 px-6 bg-black-emerald text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-teal-soft opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={content}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <HelpCircle className="w-10 h-10 text-emerald-400" />
          </motion.div>

          <motion.h1
            variants={content}
            className="fontheading2 text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Frequently Asked{' '}
            <span className="text-gradient-teal-emerald">Questions</span>
          </motion.h1>

          <motion.p variants={content} className="fontbody2 text-gray-300 mb-2">
            RupeeFlow Finance Private Limited
          </motion.p>

          <motion.p variants={content} className="fontbody2 text-gray-400 mb-12">
            Last Updated: October 27, 2025
          </motion.p>

          <motion.div
            variants={content}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for answers... (e.g., 'refund', 'KYC', 'fees')"
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent fontbody2"
              />
            </div>
            <p className="fontbody2 text-gray-400 text-sm mt-4">
              Can&apos;t find what you&apos;re looking for? Contact our 24/7 support team
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
