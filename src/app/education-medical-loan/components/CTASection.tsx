'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function CTASection() {
  return (
    <section id="apply" className="relative bg-gradient-to-br from-emerald-600 to-teal-600 py-20 md:py-28 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--card)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--background)]/10 rounded-full blur-3xl pointer-events-none" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-[var(--card)] backdrop-blur-sm border border-white/30"
          >
            <span className="text-[var(--foreground)] text-sm font-semibold">
              ⚡ Approved in 48 Hours
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="fontheading text-3xl md:text-5xl lg:text-6xl text-[var(--foreground)] mb-6 leading-tight"
          >
            Invest in Your Future Today
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="fontbody2 text-[var(--foreground)] text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Whether it&apos;s education or medical needs, we&apos;re here to support you. 
            Apply now and get instant approval with competitive rates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-[var(--card)] text-emerald-600 font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105"
            >
              <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
              Apply for Loan
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-white text-[var(--foreground)] font-bold text-lg hover:bg-[var(--card)] transition-all duration-300"
            >
              Calculate EMI
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--foreground)]"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Zero Prepayment Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Tax Benefits Available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>RBI Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
