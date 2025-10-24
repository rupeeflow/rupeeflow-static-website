'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Banknote,
  ShieldCheck,
  Zap,
  FileText,
  BarChart,
  Code2,
} from 'lucide-react'

export default function NEFTInfoSection() {
  const features = [
    {
      icon: Banknote,
      title: '24×7 NEFT Transfers',
      desc: 'Send and receive payments anytime — no banking hours, no cut-offs.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Settlements',
      desc: 'RupeeFlow ensures optimized NEFT processing with near-instant clearing times.',
    },
    {
      icon: Code2,
      title: 'Seamless Integration',
      desc: 'Easily connect RupeeFlow APIs with your platform using well-documented SDKs, sandbox environments, and developer-first support.',
    },

    {
      icon: ShieldCheck,
      title: 'Secure & Compliant',
      desc: 'Every transaction is encrypted, verified, and processed under RBI and NPCI norms.',
    },
    {
      icon: FileText,
      title: 'Automated Reconciliation',
      desc: 'Access downloadable transaction logs, receipts, and full settlement reports.',
    },
    {
      icon: BarChart,
      title: 'Smart Payment Insights',
      desc: 'AI-driven analytics to monitor success rates, performance, and trends in real time.',
    },
  ]

  return (
    <section className="relative w-full bg-black text-white pb-24 px-6 overflow-hidden">
      {/* Background gradient & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.25),transparent_70%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-[10%] right-[20%] w-80 h-80 bg-radial-emerald-soft rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-[5vw] fontheading2 font-normal text-gradient-teal-emerald mb-8"
        >
          NEFT Payment API — Reliable Bank Transfers, Simplified
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 fontbody2 max-w-3xl mx-auto mb-16 text-lg"
        >
          Empower your platform with seamless NEFT capabilities — manage
          high-volume transfers with RupeeFlow’s intelligent payment routing,
          analytics, and compliance-first API infrastructure.
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
              className="backdrop-blur-md bg-white/5 border border-white/60 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition"
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Link
            href="/solutions/neft"
            className="px-8 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Learn More About NEFT →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
