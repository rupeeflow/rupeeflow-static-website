'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative z-10 py-28 px-6 max-w-6xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fontheadingthin text-5xl md:text-7xl text-gradient-teal-emerald mb-6"
      >
        RupeeFlow Kirana — Offline UPI POS Lite
      </motion.h1>

      <p className="fontbody2 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-6">
        India’s first offline-first UPI POS Lite app for kirana stores, tea
        stalls, and small vendors.
        <br /> No dongle. No data. Just your phone.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-8 py-3 bg-teal-emerald text-white rounded-full font-semibold hover:bg-emerald-700 transition">
          Join Free Beta (0% Fee for 3 Months)
        </button>
        <p className="text-sm text-gray-400 fontbody2">
          Powered by Razorpay • NPCI-Compliant • 100% Secure
        </p>
      </div>
    </section>
  )
}
