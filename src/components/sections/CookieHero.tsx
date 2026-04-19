'use client'

import { motion, Variants } from 'framer-motion'
import { Cookie } from 'lucide-react'

export default function CookieHero() {
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
            <Cookie className="w-10 h-10 text-emerald-400" />
          </motion.div>

          <motion.h1
            variants={content}
            className="fontheading2 text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Cookie{' '}
            <span className="text-gradient-teal-emerald">Policy</span>
          </motion.h1>

          <motion.p variants={content} className="fontbody2 text-gray-300 mb-2">
            Rupeeflow Finance Private Limited
          </motion.p>

          <motion.p variants={content} className="fontbody2 text-gray-400 mb-2">
            CIN: U64990KA2025PTC209485
          </motion.p>

          <motion.p variants={content} className="fontbody2 text-gray-400 mb-8">
            Effective Date: January 1, 2025 | Last Updated: January 1, 2025
          </motion.p>

          <motion.p
            variants={content}
            className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg"
          >
            This Cookies Policy explains how we deploy cookies and similar tracking technologies on our Platform in accordance with the Digital Personal Data Protection Act, 2023 and RBI guidelines.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
