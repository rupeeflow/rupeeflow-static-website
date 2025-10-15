'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Zap,
  Clock,
  ShieldCheck,
  BarChart,
  Code2,
  Banknote,
} from 'lucide-react'

export default function IMPSInfoSection() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Transfers',
      desc: 'Enable real-time interbank payments with RupeeFlow’s IMPS-powered network.',
    },
    {
      icon: Clock,
      title: '24×7 Availability',
      desc: 'Never miss a transaction window — IMPS APIs run continuously with instant settlements.',
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security',
      desc: 'Encrypted IMPS channels ensure every transfer meets RBI and NPCI compliance standards.',
    },
    {
      icon: BarChart,
      title: 'Smart Analytics',
      desc: 'Gain insights into transfer success rates and transaction trends with RupeeFlow’s dashboard.',
    },
    {
      icon: Code2,
      title: 'Developer Friendly',
      desc: 'Easily integrate with RESTful APIs, sandbox testing, and webhooks for status tracking.',
    },
    {
      icon: Banknote,
      title: 'Automated Payouts',
      desc: 'Simplify vendor and salary disbursements with automated IMPS payouts in bulk.',
    },
  ]

  return (
    <section className="relative w-full bg-black text-white pb-24 px-6 overflow-hidden">
      {/* Background gradient & glass glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.25),transparent_70%)] blur-3xl" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="absolute bottom-[0%] right-[25%] blur-3xl w-96 h-96 bg-radial-teal-soft"
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-[5vw] fontheading2 font-normal text-gradient-teal-emerald text-transparent mb-8"
        >
          IMPS — Instant Money Transfer API
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 fontbody2 max-w-3xl mx-auto mb-16 text-lg"
        >
          Power your business with lightning-fast IMPS transfers using
          RupeeFlow’s secure, RBI-compliant API. Automate payouts, offer
          real-time settlements, and manage instant interbank payments with
          ease.
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
              className="backdrop-blur-md bg-neutral-600/20 border border-white/60 rounded-2xl p-8 flex flex-col items-center text-center"
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
            href="/imps"
            className="px-8 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Explore IMPS Integration →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
