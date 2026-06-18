'use client'

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  // Minimal parallax for notification only
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Gentle spring physics for smooth parallax
  const springConfig = { damping: 30, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Very subtle parallax movement (max 6px)
  const notificationX = useTransform(x, [-1, 1], [-6, 6])
  const notificationY = useTransform(y, [-1, 1], [-6, 6])

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPct = (clientX / innerWidth) * 2 - 1
      const yPct = (clientY / innerHeight) * 2 - 1

      mouseX.set(xPct)
      mouseY.set(yPct)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
    }
  }, [mouseX, mouseY])

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
                3-Minute Approval • No Collateral
              </span>
            </motion.div>

            <h1 className="fontheading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Get Instant Cash for Your{' '}
              <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>

            <p className="fontbody2 text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              ₹10,000 to ₹5,00,000 based on your daily UPI collections. Flexible
              repayment from your sales. Get approved in 3 minutes.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-base hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white/90 animate-pulse" />
                Apply Now
              </Link>
              {/* <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-emerald-500/50 text-white font-semibold text-base hover:bg-emerald-500/10 transition-all duration-300"
              >
                How It Works
              </Link> */}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                {/* <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg> */}
                {/* <span>RBI Compliant</span> */}
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
                <span>24hr Disbursal</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image with Realistic Notification */}
          <RealisticHeroImage
            notificationX={notificationX}
            notificationY={notificationY}
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  )
}

function RealisticHeroImage({
  notificationX,
  notificationY,
  isMobile,
}: {
  notificationX: MotionValue<number>
  notificationY: MotionValue<number>
  isMobile: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative order-1 lg:order-2"
    >
      <div className="relative w-full aspect-[4/5] max-w-[500px] mx-auto">
        {/* Hero Image - Main Focus */}
        <div className="absolute inset-0">
          <Image
            src="/merchant-cash-advance/personal loan.png"
            alt="Indian entrepreneur reviewing loan approval"
            fill
            className="object-cover rounded-2xl object-[5%_center]"
            priority
          />
        </div>
        <motion.div
          style={isMobile ? {} : { x: notificationX, y: notificationY }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden sm:block absolute top-[30%] left-1/2 -translate-x-1/2 md:left-[10%] md:-translate-x-1/2 z-30"
        >
          {/* Continuous subtle floating animation */}
          <motion.div
            animate={{ y: [0, -2.5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'loop',
            }}
          >
            {/* iOS Notification Card - Wider for better readability */}
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="relative bg-white/98 backdrop-blur-2xl rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] w-[280px] cursor-pointer group overflow-hidden"
            >
              {/* Enhanced shadow on hover */}
              <div className="absolute inset-0 rounded-[16px] shadow-[0_15px_50px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Content Container with iOS padding */}
              <div className="relative px-3.5 py-3">
                {/* Header Row: Icon + App Name + Time */}
                <div className="flex items-center gap-2.5 mb-2">
                  {/* App Icon - iOS rounded square */}
                  <div className="w-7 h-7 rounded-[8px] bg-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-white font-bold text-[10px]">RF</span>
                  </div>

                  {/* App Name */}
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-gray-700 text-xs">
                      RupeeFlow
                    </span>
                  </div>

                  {/* Timestamp */}
                  <span className="text-[10px] text-gray-500 flex-shrink-0">
                    Just now
                  </span>
                </div>

                {/* Notification Body */}
                <div className="space-y-1.5">
                  {/* Title */}
                  <div className="font-semibold text-gray-900 text-[13px] leading-tight">
                    Loan Approved
                  </div>

                  {/* Amount - Static display */}
                  <div className="text-[22px] font-bold text-emerald-600 leading-none tracking-tight">
                    ₹5,00,000
                  </div>

                  {/* Description */}
                  <div className="text-[11px] text-gray-600 leading-snug">
                    credited to your account
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Secondary Element: PhonePe-style Payment Success Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="hidden sm:block absolute top-[50%] left-[5%] md:left-[10%] z-20"
        >
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2.5,
            }}
          >
            <div className="relative bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 overflow-hidden w-[160px] h-[40px] mt-4">
              {/* Stage 1: Green Checkmark (shows first) */}
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  x: [0, 0, -100],
                }}
                transition={{
                  duration: 1.5,
                  delay: 2.0,
                  times: [0, 0.6, 1],
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 2.0,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Stage 2: Amount Details (slides in from right) */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: [0, 0, 1],
                  x: [100, 100, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: 3.2,
                  times: [0, 0.3, 1],
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center gap-2 px-3.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-900 whitespace-nowrap">
                  +₹18,450
                </span>
                <span className="text-[10px] text-gray-500 whitespace-nowrap">
                  Sent
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Secondary Element: Status Badge - Fades in from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 2.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden sm:block absolute bottom-[25%] right-[8%] md:right-[15%] z-20"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <div className="bg-emerald-500/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
              <span className="text-xs font-semibold text-white">
                Approved in 3 min
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Micro Icon 1: Credit Card - Pops in with rotation */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.3,
            type: 'spring',
            stiffness: 200,
            damping: 12,
          }}
          className="hidden sm:block absolute top-[40%] left-[15%] md:left-[20%] z-10"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          >
            <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center border border-gray-200/50">
              <svg
                className="w-5 h-5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
