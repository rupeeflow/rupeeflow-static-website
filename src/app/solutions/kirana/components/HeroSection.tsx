'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center relative z-10 gap-6 py-28 px-6 max-w-6xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fontheadingthin text-5xl md:text-7xl text-gradient-teal-emerald mb-6"
      >
        RupeeFlow Kirana — Offline UPI POS Lite
      </motion.h1>

      <p className="fontbody2 text-gray-300 text-lg md:text-lg max-w-4xl mx-auto mb-6">
        India’s first offline-first UPI POS Lite app for kirana stores, tea
        stalls, and small vendors.
        <br /> No dongle. No data. Just your phone.
      </p>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 w-full lg:w-1/2 relative"
      >
        <div className="rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
          <Image
            src="/images/kirana-promo.png"
            alt="Shopkeeper using RupeeFlow Kirana UPI POS"
            width={800}
            height={500}
            className="object-cover w-full h-full rounded-[2rem]"
            priority
          />
        </div>
      </motion.div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-8 py-3 bg-teal-emerald text-white rounded-full font-semibold hover:bg-emerald-700 transition">
          Join Free Beta (0% Fee for 3 Months)
        </button>
        <p className="text-sm text-gray-400 fontbody2">
          • NPCI-Compliant • 100% Secure
        </p>
      </div>
    </section>
  )
}
