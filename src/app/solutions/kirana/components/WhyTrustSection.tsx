'use client'

import { motion } from 'framer-motion'
import { Wifi, Languages, ShieldCheck, Percent } from 'lucide-react'

const features = [
  {
    icon: Wifi,
    title: 'Works Without Internet',
    desc: 'Accept payments via SMS, NFC, or Bluetooth in low-network areas. Transactions sync when you’re back online.',
  },
  {
    icon: Percent,
    title: '0% Fee for First 3 Months',
    desc: 'Keep 100% of your earnings. After beta: just ₹99/month or 1% per transaction.',
  },
  {
    icon: Languages,
    title: 'Speak in Hindi, Get Paid',
    desc: 'Say “₹50 bhejo” — app understands 12+ Indian languages. Perfect for non-tech-savvy users.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    desc: 'UPI Lite (₹500 limit), encrypted offline queue, auto-fraud alerts. Trusted by RBI & NPCI standards.',
  },
]

export default function WhyTrustSection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-black border-t border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="absolute top-[0%] leftt-[25%] blur-3xl w-96 h-96 bg-radial-emerald-soft"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="absolute bottom-[0%] right-[25%] blur-3xl w-96 h-96 bg-radial-teal-soft"
      ></motion.div>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="fontheadingthin text-5xl md:text-6xl text-white mb-16">
          Why 10,000+ Shops Trust RupeeFlow
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="p-8 bg-gray-700/30 rounded-2xl border border-white/70 backdrop-blur-md text-left hover:bg-white/15 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              <f.icon
                className="w-10 h-10 text-emerald-400 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="fontheadingthin text-xl mb-2">{f.title}</h3>
              <p className="fontbody2 text-gray-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}