'use client'

import { motion, Variants } from 'framer-motion'
import { ShieldCheck, Clock, Mic, ReceiptIndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseSection() {
  const features = [
    {
      icon: <ReceiptIndianRupee className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-500" />,
      title: 'All your bills, paid in seconds.',
      desc: 'Effortlessly manage all your utility bills—electricity, water, mobile, and more—from a single, intuitive platform. Say goodbye to late fees and scattered due dates with automated reminders and smart scheduling.',
    },
    {
      title: 'Payments you can trust.',
      desc: 'Bank-grade security with 256-bit encryption, ISO 27001 compliance, and multi-factor authentication. Every transaction is protected by advanced fraud detection systems and real-time monitoring.',
      icon: <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-500" />,
    },
    {
      title: 'Always on, whenever you need us.',
      desc: '24/7/365 availability with dedicated support teams, instant transaction processing, and real-time notifications. RupeeFlow ensures your business never stops with 99.9% uptime guarantee.',
      icon: <Clock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-500" />,
    },
    {
      title: 'Just say it, and it\'s done.',
      desc: 'Revolutionary voice-powered payments supporting 12+ Indian languages. Simply speak your payment instructions and watch as AI processes transactions with 99.5% accuracy.',
      icon: <Mic className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-500" />,
    },
  ]

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section className="relative w-full bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-36 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="rf-h2 mb-4 text-gray-900">
            Why {' '}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              RupeeFlow
            </span>
          </h2>
          <p className="rf-lead text-gray-600 mb-10 max-w-md">
            Stay ahead of the money management and transactions
          </p>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: '0 18px 48px rgba(16,185,129,0.16)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 360, damping: 18 }}
            className="relative inline-flex items-center gap-3 bg-white text-black font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-sm overflow-hidden group border border-gray-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ReceiptIndianRupee className="w-5 h-5 relative z-10 text-black group-hover:text-white transition-colors duration-300" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">SEE ALL FEATURES</span>
            <svg className="w-3 h-3 relative z-10 transition-transform duration-200 group-hover:translate-x-1 text-black group-hover:text-white transition-colors duration-300" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M4 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute -right-2 -top-2 w-4 h-4 bg-[var(--card)] rounded-full animate-ping" />
          </motion.button>
        </motion.div>

        {/* Right Side - Feature Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col space-y-3 text-left"
            >
              <div>{feature.icon}</div>
              <h4 className="rf-h4 font-semibold text-gray-900">{feature.title}</h4>
              <p className="rf-body text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
