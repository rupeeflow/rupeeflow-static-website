'use client'

import { motion } from 'framer-motion'
import { Download, Smartphone, Wallet } from 'lucide-react'

const steps = [
  {
    icon: Download,
    title: 'Install Free App',
    desc: 'Download RupeeFlow Kirana from Play Store. Takes just 2 minutes.',
  },
  {
    icon: Smartphone,
    title: 'Customer Pays You',
    desc: 'Even without internet — scan QR, tap NFC, or send SMS. Money queues safely.',
  },
  {
    icon: Wallet,
    title: 'Get Paid Instantly',
    desc: 'Auto-sync when online. Daily settlement to your bank with complete tracking.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative z-10 py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="fontheadingthin text-5xl md:text-6xl text-white mb-16">
          How It Works (3 Simple Steps)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-gray-700/20 border border-white/70 backdrop-blur-md hover:bg-white/15"
            >
              <s.icon className="w-12 h-12 text-emerald-400 mb-4 mx-auto" />
              <h3 className="fontheadingthin text-2xl mb-2">{s.title}</h3>
              <p className="fontbody2 text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}