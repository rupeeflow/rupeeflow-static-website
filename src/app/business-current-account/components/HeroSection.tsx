'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Subtle ambient background */}
      <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(3,151,137,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(48,243,188,0.04),transparent_60%)] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30"
            >
              <span className="text-emerald-400 text-sm font-semibold">
                Open in 10 Minutes • Zero Balance
              </span>
            </motion.div>

            <h1 className="fontheading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Business Current Account{' '}
              <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                Built for Growth
              </span>
            </h1>

            <p className="fontbody2 text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Open your account in 10 minutes with zero balance requirement. Get
              free NEFT/RTGS, virtual accounts, and seamless API integration.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-base hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white/90 animate-pulse" />
                Open Account Now
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-emerald-500/50 text-white font-semibold text-base hover:bg-emerald-500/10 transition-all duration-300"
              >
                How It Works
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>RBI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Instant Activation</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] max-w-[600px] mx-auto">
              <Image
                src="/home/businessmen.png"
                alt="Business professional managing current account"
                fill
                className="object-contain"
                priority
              />

              {/* Floating Stats Card - positioned to not overlap face */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="hidden md:block absolute top-[8%] left-[-5%] z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 w-[200px]">
                    <div className="text-xs text-gray-600 mb-1">
                      Account Balance
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ₹12,45,890
                    </div>
                    <div className="text-xs text-emerald-600 mt-1">
                      +18.5% this month
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Transaction Badge - positioned on right side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="hidden md:block absolute top-[35%] right-[-8%] z-20"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <div className="bg-emerald-500/95 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
                    <span className="text-sm font-semibold text-white">
                      Free NEFT/RTGS
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
