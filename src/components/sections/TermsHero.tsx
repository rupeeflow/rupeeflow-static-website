'use client'

import { motion, Variants } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function TermsHero() {
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
            <FileText className="w-10 h-10 text-emerald-400" />
          </motion.div>

          <motion.h1
            variants={content}
            className="fontheading2 text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Terms &{' '}
            <span className="text-gradient-teal-emerald">Conditions</span>
          </motion.h1>

          <motion.p variants={content} className="fontbody2 text-gray-300 mb-2">
            RupeeFlow Finance Private Limited
          </motion.p>

          <motion.p variants={content} className="fontbody2 text-gray-400 mb-8">
            Last Updated: October 27, 2025
          </motion.p>

          <motion.p
            variants={content}
            className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg"
          >
            Please read these Terms and Conditions carefully before using our
            payment services and products. By accessing or using RupeeFlow
            services, you agree to be bound by these terms.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
