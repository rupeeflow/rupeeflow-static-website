'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

// Count-up animation component
function CountUp({
  end,
  suffix = '',
  duration = 2,
}: {
  end: number
  suffix?: string
  duration?: number
}) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inViewRef = useRef(null)
  const isInView = useInView(inViewRef, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      )

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(easeOutQuart * end)

      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <span ref={inViewRef}>
      <span ref={nodeRef}>{displayValue}</span>
      {suffix}
    </span>
  )
}

// Floating animation wrapper component
function FloatingImage({
  children,
  delay = 0,
  duration = 3,
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function SmartPOSPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <main className="relative min-h-screen bg-[var(--card)] dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 overflow-hidden">
        {/* Animated blob 1 — top-left */}
        <motion.div
          className="absolute -left-[100px] top-[10%] w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0,135,90,0.12) 0%, rgba(0,107,79,0.06) 40%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.6, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated blob 2 — mid-left */}
        <motion.div
          className="absolute left-[5%] top-[40%] w-[480px] h-[480px] rounded-full blur-[110px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0,135,90,0.08) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.22, 0.38, 0.22] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />

        {/* Animated blob 3 — right glow accent */}
        <motion.div
          className="absolute right-[8%] top-[20%] w-[320px] h-[320px] rounded-full blur-[100px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(42,184,113,0.06) 0%, transparent 65%)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[var(--card)]/70 border border-[var(--border)]">
                  <span className="text-[var(--primary)] text-sm font-semibold">
                    Smart POS Solutions
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                  India's Smartest POS for Kirana & Retail Stores
                </h1>
                <p className="text-xl text-[var(--muted)] mb-8">
                  Accept every payment — UPI, card, contactless — with T+1
                  settlement, daily WhatsApp reports, and a built-in credit
                  score. No hidden charges.
                </p>

                {/* Statistics */}
                <motion.div
                  className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                      <CountUp end={100} suffix="K+" />
                    </div>
                    <div className="text-sm text-[var(--muted)] mt-1">
                      Active Merchants
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                      ₹<CountUp end={10} suffix=" Cr+" />
                    </div>
                    <div className="text-sm text-[var(--muted)] mt-1">
                      Daily Transactions
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400">
                      <CountUp end={20} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Cities Covered
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Get Your POS Machine
                  </Link>
                  <Link
                    href="/qr-code"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[var(--border)] text-[var(--foreground)] font-semibold hover:bg-[var(--card)]/60 hover:scale-105 transition-all duration-300"
                  >
                    Generate Free QR Code
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FloatingImage duration={3} delay={1}>
                <div className="relative w-full max-w-[500px]">
                  <Image
                    src="/Smart Pos/India's Smartest POS for Kirana & Retail Stores.png"
                    alt="India's Smartest POS for Kirana & Retail Stores"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </FloatingImage>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Product Cards Section */}
      <section
        ref={ref}
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12 md:mb-16">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
                Choose Your Perfect POS Solution
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                From smart terminals to simple QR codes — we have the right
                solution for every business
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <FloatingImage duration={3} delay={0.8}>
                <div className="relative w-full max-w-[400px]">
                  <Image
                    src="/Smart Pos/Choose Your Perfect POS Solution.png"
                    alt="Choose Your Perfect POS Solution"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </FloatingImage>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Smart POS Machine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative bg-[var(--card)] dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border-2 border-transparent hover:border-emerald-500 overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
              />

              {/* Icon with pulse animation */}
              <motion.div
                className="relative w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(16, 185, 129, 0.4)',
                      '0 0 0 10px rgba(16, 185, 129, 0)',
                      '0 0 0 0 rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl"
                />
                <svg
                  className="relative w-8 h-8 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </motion.div>

              <h3 className="relative text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Smart POS Machine
              </h3>
              <p className="relative text-gray-600 dark:text-gray-400 mb-4 text-sm">
                For mid-size retail, pharmacy & textile stores
              </p>

              {/* Animated feature list */}
              <ul className="relative space-y-3 mb-6">
                {[
                  'Android-based smart terminal',
                  'Accepts UPI, Visa, Mastercard, RuPay, Amex',
                  'EMI on cards for high-ticket purchases',
                  'GST receipt printing built-in',
                  'T+1 settlement to your bank account',
                  'Powered by Pine Labs infrastructure',
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="relative block w-full text-center px-6 py-3 rounded-full bg-emerald-600 text-[var(--foreground)] font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 overflow-hidden group/btn"
                >
                  <span className="relative z-10">Get Smart POS</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Card 2 — Mswipe Compact POS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="group relative bg-[var(--card)] dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border-2 border-emerald-500 overflow-hidden"
            >
              {/* Popular badge with pulse */}
              <motion.div
                className="absolute -top-3 right-6 bg-emerald-500 text-[var(--foreground)] text-xs font-bold px-3 py-1 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(16, 185, 129, 0.7)',
                    '0 0 0 6px rgba(16, 185, 129, 0)',
                    '0 0 0 0 rgba(16, 185, 129, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                POPULAR
              </motion.div>

              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Icon with pulse */}
              <motion.div
                className="relative w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(16, 185, 129, 0.6)',
                      '0 0 0 12px rgba(16, 185, 129, 0)',
                      '0 0 0 0 rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl"
                />
                <svg
                  className="relative w-8 h-8 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>

              <h3 className="relative text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Compact POS
              </h3>
              <p className="relative text-gray-600 dark:text-gray-400 mb-4 text-sm">
                For Kirana stores, dhabas & small merchants
              </p>

              {/* Animated feature list */}
              <ul className="relative space-y-3 mb-6">
                {[
                  'Lightweight SIM-based terminal',
                  'Works without WiFi — GSM connectivity',
                  'UPI + card + contactless NFC',
                  'Avg transaction under 10 seconds',
                  'T+1 settlement, zero downtime',
                  'Powered by Mswipe infrastructure',
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + 0.1 * idx }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="relative block w-full text-center px-6 py-3 rounded-full bg-emerald-600 text-[var(--foreground)] font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 overflow-hidden group/btn"
                >
                  <span className="relative z-10">Get Compact POS</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Card 3 — Smart QR Code */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="group relative bg-[var(--card)] dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 border-2 border-transparent hover:border-emerald-500 overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
              />

              {/* Icon with pulse animation */}
              <motion.div
                className="relative w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(16, 185, 129, 0.4)',
                      '0 0 0 10px rgba(16, 185, 129, 0)',
                      '0 0 0 0 rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl"
                />
                <svg
                  className="relative w-8 h-8 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
              </motion.div>

              <h3 className="relative text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Smart QR Code
              </h3>
              <p className="relative text-gray-600 dark:text-gray-400 mb-4 text-sm">
                For any merchant, zero hardware needed
              </p>

              {/* Animated feature list */}
              <ul className="relative space-y-3 mb-6">
                {[
                  'Permanent static QR — print & display',
                  'Dynamic QR for specific amounts',
                  'Instant UPI credit notification',
                  'Works with all UPI apps',
                  'Free to generate, zero device cost',
                  'Daily report on WhatsApp',
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + 0.1 * idx }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/qr-code"
                  className="relative block w-full text-center px-6 py-3 rounded-full bg-emerald-600 text-[var(--foreground)] font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 overflow-hidden group/btn"
                >
                  <span className="relative z-10">Generate QR Code</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why RupeeFlow POS — 4 Feature Blocks */}
      <section className="py-16 md:py-24 bg-[var(--card)] dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
              Why RupeeFlow POS
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              Built for Indian merchants, designed for growth
            </p>
          </div>

          {/* Block 1 - Next Day Settlement */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                <Image
                  src="/home/rupee.svg"
                  alt="Rupee"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Next Day Settlement. Every Day.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your money reaches your bank account by 9 AM the next morning —
                no delays, no holds, no weekend exceptions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -20,
                  rotate: 3,
                  rotateY: 8,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 15,
                }}
                style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
              >
                <FloatingImage duration={3} delay={1}>
                  <motion.div
                    className="relative w-full max-w-[450px]"
                    whileHover={{
                      boxShadow:
                        '0 30px 80px rgba(16, 185, 129, 0.4), 0 0 50px rgba(16, 185, 129, 0.2)',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="/Smart Pos/Next Day Settlement.png"
                      alt="Next Day Settlement"
                      width={450}
                      height={450}
                      className="w-full h-auto rounded-2xl"
                    />
                  </motion.div>
                </FloatingImage>
              </motion.div>
            </motion.div>
          </div>

          {/* Block 2 - Daily Report on WhatsApp */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-[var(--foreground)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Daily Report on WhatsApp
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every evening at 7 PM, get your day's collection summary
                directly on WhatsApp. Total received, pending, and top payment
                methods — in your language.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -20,
                  rotate: -3,
                  rotateY: -8,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 15,
                }}
                style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
              >
                <FloatingImage duration={3.2} delay={1.2}>
                  <motion.div
                    className="relative w-full max-w-[450px]"
                    whileHover={{
                      boxShadow:
                        '0 30px 80px rgba(16, 185, 129, 0.4), 0 0 50px rgba(16, 185, 129, 0.2)',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="/Smart Pos/Daily Report on WhatsApp.png"
                      alt="Daily Report on WhatsApp"
                      width={450}
                      height={450}
                      className="w-full h-auto rounded-2xl"
                    />
                  </motion.div>
                </FloatingImage>
              </motion.div>
            </motion.div>
          </div>

          {/* Block 3 - Zero MDR on UPI */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                <Image
                  src="/payments/upi-collections.svg"
                  alt="UPI"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Zero MDR on UPI
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Government mandate — 0% charge on all UPI transactions. Card
                transactions charged at 0.3%–0.9% based on card type. No hidden
                platform fees from RupeeFlow.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -20,
                  rotate: 3,
                  rotateY: 8,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 15,
                }}
                style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
              >
                <FloatingImage duration={2.8} delay={0.8}>
                  <motion.div
                    className="relative w-full max-w-[450px]"
                    whileHover={{
                      boxShadow:
                        '0 30px 80px rgba(16, 185, 129, 0.4), 0 0 50px rgba(16, 185, 129, 0.2)',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="/Smart Pos/Zero MDR on UPI.png"
                      alt="Zero MDR on UPI"
                      width={450}
                      height={450}
                      className="w-full h-auto rounded-2xl"
                    />
                  </motion.div>
                </FloatingImage>
              </motion.div>
            </motion.div>
          </div>

          {/* Block 4 - Swipe Today, Borrow Tomorrow */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                <Image
                  src="/credit/merchant-cash-advance.svg"
                  alt="Credit"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                Swipe Today, Borrow Tomorrow
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every transaction you process builds your RupeeFlow Business
                Score. After 90 days, unlock ₹25,000–₹5,00,000 in working
                capital credit — no branch visit, no guarantor, no paperwork.
                Just your transaction history.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -20,
                  rotate: -3,
                  rotateY: -8,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 15,
                }}
                style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
              >
                <FloatingImage duration={3.5} delay={1.5}>
                  <motion.div
                    className="relative w-full max-w-[450px]"
                    whileHover={{
                      boxShadow:
                        '0 30px 80px rgba(16, 185, 129, 0.4), 0 0 50px rgba(16, 185, 129, 0.2)',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="/Smart Pos/Swipe Today, Borrow Tomorrow.png"
                      alt="Swipe Today, Borrow Tomorrow"
                      width={450}
                      height={450}
                      className="w-full h-auto rounded-2xl"
                    />
                  </motion.div>
                </FloatingImage>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is it for — 6 Segment Cards */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Perfect For Every Business Type
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of merchants across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: '/Smart Pos/Kirana & General Stores.png',
                title: 'Kirana & General Stores',
                description:
                  'Accept UPI + card. Daily settlement. Build credit score from day one.',
              },
              {
                image: '/Smart Pos/Medical Shops & Pharmacies.png',
                title: 'Medical Shops & Pharmacies',
                description:
                  'Card EMI for customers. GST receipts. Working capital credit based on sales.',
              },
              {
                image: '/Smart Pos/Textile & Clothing Stores.png',
                title: 'Textile & Clothing Stores',
                description:
                  'High-ticket card transactions. Festival season pre-approved credit.',
              },
              {
                image: '/Smart Pos/Restaurants & Dhabas.png',
                title: 'Restaurants & Dhabas',
                description:
                  'High-volume UPI. Daily cash flow credit line. Zero MDR on UPI.',
              },
              {
                image: '/Smart Pos/Coaching & Education.png',
                title: 'Coaching & Education',
                description:
                  'NACH AutoPay for fee collection. Recurring mandates. GST invoicing.',
              },
              {
                image: '/Smart Pos/Clinics & Diagnostic Centres.png',
                title: 'Clinics & Diagnostic Centres',
                description:
                  'Card + UPI. Insurance payment support. Proper receipt generation.',
              },
            ].map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-[var(--card)] dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-500"
              >
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{
                    scale: 1.15,
                    y: -10,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                  }}
                >
                  <div className="relative w-48 h-48">
                    <Image
                      src={segment.image}
                      alt={segment.title}
                      width={192}
                      height={192}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 text-center">
                  {segment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {segment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — 4 Steps with Animations */}
      <section className="py-16 md:py-24 bg-[var(--card)] dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get started in 4 simple steps
            </p>
          </motion.div>

          {/* Image at the top - larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-16 md:mb-24"
          >
            <FloatingImage duration={4} delay={0.5}>
              <div className="relative w-full max-w-[1100px]">
                <Image
                  src="/Smart Pos/How It Works.png"
                  alt="How It Works"
                  width={1100}
                  height={350}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </FloatingImage>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Apply Online',
                description:
                  'Fill a simple form. Submit your Aadhaar + PAN + bank details. KYC verified in under 10 minutes.',
                icon: '/features/bill.svg',
                gradient: 'from-emerald-400 to-teal-500',
              },
              {
                title: 'Get Your Device',
                description:
                  'POS machine delivered to your store within 3–5 working days. QR code generated instantly online.',
                icon: '/payouts/bulk-payouts.svg',
                gradient: 'from-teal-400 to-cyan-500',
              },
              {
                title: 'Start Accepting Payments',
                description:
                  'Accept UPI, card, and contactless from day one. No training needed. Machine is plug and play.',
                icon: '/payments/payment-gateway.svg',
                gradient: 'from-cyan-400 to-blue-500',
              },
              {
                title: 'Money in Your Account',
                description:
                  'T+1 settlement every morning by 9 AM. Download reports anytime from your RupeeFlow dashboard or WhatsApp.',
                icon: '/home/wallet.svg',
                gradient: 'from-blue-400 to-emerald-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Connecting line - only show between cards on large screens */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/30 to-transparent z-0" />
                )}

                <div className="relative bg-[var(--card)] dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-emerald-500">
                  {/* Icon with gradient background */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 filter brightness-0 invert"
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about RupeeFlow Smart POS
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Is there any cost to get the POS machine?',
                answer:
                  'The machine is provided at zero upfront cost for eligible merchants. A refundable security deposit may apply for the hardware device.',
              },
              {
                question: 'What payments can I accept?',
                answer:
                  'UPI (all apps — GPay, PhonePe, Paytm, BHIM), Visa, Mastercard, RuPay, Amex, contactless NFC, and QR code payments.',
              },
              {
                question: 'When will I receive my settlement?',
                answer:
                  'Next business day by 9 AM directly to your registered bank account.',
              },
              {
                question: 'What is MDR? Will I be charged?',
                answer:
                  'UPI payments — 0% MDR (government mandate). Debit cards — 0.4%. Credit cards — 0.9%. No additional charges from RupeeFlow.',
              },
              {
                question: 'What if the machine stops working?',
                answer:
                  'Call RupeeFlow support or WhatsApp us. Replacement within 24–48 hours for verified merchants.',
              },
              {
                question: 'How does the credit score work?',
                answer:
                  'Every transaction processed through your RupeeFlow POS builds your Business Score. After 90 days, you become eligible for instant working capital loans up to ₹5,00,000 — no collateral required.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[var(--card)] dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Your POS Machine is 3 Steps Away
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Join 1,000+ merchants accepting smarter payments with RupeeFlow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--card)] text-emerald-600 font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Apply for POS Now
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-[var(--foreground)] font-semibold hover:bg-[var(--card)] hover:scale-105 transition-all duration-300"
              >
                Talk to Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
