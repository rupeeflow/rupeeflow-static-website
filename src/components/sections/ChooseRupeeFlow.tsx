'use client'

import { motion, Variants } from 'framer-motion'
import { ShieldCheck, Clock, Mic, ReceiptIndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseSection() {
  const features = [
    {
      icon: <ReceiptIndianRupee className="w-20 h-20 text-neutral-300" />,
      title: 'All your bills, paid in seconds.',
      desc: 'Effortlessly manage all your utility bills—electricity, water, mobile, and more—from a single, intuitive platform. Say goodbye to late fees and scattered due dates with automated reminders and smart scheduling.',
    },
    {
      icon: <ShieldCheck className="w-20 h-20 text-neutral-300" />,
      title: 'Payments you can trust.',
      desc: 'Bank-grade security with 256-bit encryption, PCI DSS Level 1 compliance, and multi-factor authentication. Every transaction is protected by advanced fraud detection systems and real-time monitoring.',
    },
    {
      icon: <Clock className="w-20 h-20 text-neutral-300" />,
      title: 'Always on, whenever you need us.',
      desc: '24/7/365 availability with dedicated support teams, instant transaction processing, and real-time notifications. RupeeFlow ensures your business never stops with 99.9% uptime guarantee.',
    },
    {
      icon: <Mic className="w-20 h-20 text-neutral-300" />,
      title: 'Just say it, and it\'s done.',
      desc: 'Revolutionary voice-powered payments supporting 12+ Indian languages. Simply speak your payment instructions and watch as AI processes transactions with 99.5% accuracy.',
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
    <section className="relative w-full bg-black-emerald text-white py-42 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-4 leading-snug">
            Why {' '}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              <br></br>
              RupeeFlow
            </span>
          </h2>
          <p className="text-gray-300 mb-10 text-sm md:text-base max-w-md">
            Stay ahead of the money management and transactions
          </p>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ReceiptIndianRupee className="w-5 h-5 relative z-10" />
            <span className="relative z-10">SEE ALL FEATURES</span>
            <div className="absolute -right-2 -top-2 w-4 h-4 bg-white/30 rounded-full animate-ping" />
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
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
