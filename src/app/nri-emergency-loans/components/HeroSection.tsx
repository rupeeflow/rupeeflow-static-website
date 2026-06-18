'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(3,151,137,0.25),transparent_60%)] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-[-100px] right-[5%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(48,243,188,0.2),transparent_60%)] pointer-events-none animate-glow-pulse-delayed" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
        {/* Icons removed */}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-emerald-400 text-sm font-semibold">
                🌍 Available in 12 Languages • 24hr Disbursal
              </span>
            </div>

            <h1 className="fontheading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Emergency Funds for Your{' '}
              <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                Family in India
              </span>
            </h1>

            <p className="fontbody2 text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              ₹50,000 to ₹10,00,000 for medical emergencies, education, or
              urgent needs. Apply from anywhere, funds reach India in 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-base hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white/90 animate-pulse" />
                Apply Now
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-400">
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
                <span>100% Online</span>
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
                <span>Secure Transfer</span>
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
                <span>Multi-Language</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/10 backdrop-blur-md">
              <Image
                src="/nri-emergency-loans/nri hero.png"
                alt="NRI Emergency Loans - Support your family in India"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Floating Stats Cards */}
              <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-emerald-500/30 shadow-lg">
                <div className="text-emerald-400 text-2xl font-bold">₹10L</div>
                <div className="text-gray-400 text-xs">Max Loan</div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-emerald-500/30 shadow-lg">
                <div className="text-emerald-400 text-2xl font-bold">
                  24 hrs
                </div>
                <div className="text-gray-400 text-xs">Disbursal Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
