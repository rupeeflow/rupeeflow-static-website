'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Fingerprint,
  CreditCard,
  Wallet,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'

export default function AEPSInfoSection() {
  const features = [
    {
      icon: Fingerprint,
      title: 'Biometric Transactions',
      desc: 'Seamless Aadhaar-based authentication for withdrawals and balance checks.',
    },
    {
      icon: CreditCard,
      title: 'Micro ATM Integration',
      desc: 'Accept cash deposits, withdrawals, and mini statements with ease.',
    },
    {
      icon: Wallet,
      title: 'Instant Settlement',
      desc: 'Faster payouts and transparent reconciliation powered by RupeeFlow AI.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure by Design',
      desc: 'End-to-end encryption and fraud detection using blockchain verification.',
    },
    {
      icon: Smartphone,
      title: 'One App, All Access',
      desc: 'Enable AEPS services directly from your RupeeFlow dashboard or API.',
    },
  ]

  return (
    <section className="relative w-full bg-black text-white pb-24 px-6 overflow-hidden">
      {/* Background gradient & glass layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.25),transparent_70%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="absolute intes-0 blur-3xl bottom-[0%] right-[25%] w-100 h-100 bg-radial-teal-soft "
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-[5vw] fontheading2 font-normal text-gradient-teal-emerald text-transparent mb-8"
        >
          AEPS — Aadhaar Enabled Payment System
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 fontbody2 max-w-3xl mx-auto mb-16 text-lg"
        >
          Empower your business with seamless Aadhaar-enabled transactions, cash
          withdrawals, and micro-ATM access — built with RupeeFlow’s secure
          fintech infrastructure.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-neutral-600/20 border border-white/50 rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <f.icon
                className="w-12 h-12 text-emerald-400 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-normal text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Link
            href="/aeps"
            className="px-8 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Explore AEPS Integration →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
