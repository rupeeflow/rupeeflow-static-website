'use client'

import FaqSection from '@/components/sections/FAQ'
import { motion, Variants } from 'framer-motion'
import {
  Fingerprint,
  ShieldCheck,
  CreditCard,
  Server,
  Code2,
  Zap,
  FileJson,
} from 'lucide-react'
import Link from 'next/link'

export default function AEPSPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const content: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }
  const features = [
    {
      icon: Fingerprint,
      title: 'Biometric Authentication',
      desc: 'Enable secure cash withdrawals and balance inquiries through Aadhaar-based biometric verification.',
    },
    {
      icon: CreditCard,
      title: 'Micro ATM Support',
      desc: 'Integrate AEPS with micro ATMs for real-time deposits, transfers, and mini statements.',
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security',
      desc: 'Backed by encrypted channels and RupeeFlow’s fraud-resilient transaction layer.',
    },
    {
      icon: Zap,
      title: 'Instant Settlement',
      desc: 'Experience near-instant fund transfers with transparent reconciliation and analytics.',
    },
  ]

  const steps = [
    {
      icon: FileJson,
      title: '1. Get API Credentials',
      desc: 'Register your business on RupeeFlow and obtain your AEPS sandbox and live credentials.',
    },
    {
      icon: Server,
      title: '2. Integrate API Endpoints',
      desc: 'Use our AEPS REST APIs to connect your app or service with RupeeFlow’s AEPS gateway.',
    },
    {
      icon: Code2,
      title: '3. Enable Biometric Devices',
      desc: 'Connect certified RD (Registered Device) scanners for Aadhaar fingerprint verification.',
    },
    {
      icon: ShieldCheck,
      title: '4. Go Live & Monitor',
      desc: 'Once verified, start transactions and monitor AEPS performance from your RupeeFlow dashboard.',
    },
  ]

  return (
    <main className="relative w-full bg-black text-white overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.2),transparent_70%)] blur-3xl" />

      {/* Hero Section */}
      <section className="relative z-10 text-center py-28 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fontheading2 text-5xl md:text-6xl text-gradient-teal-emerald mb-6"
        >
          AEPS — Aadhaar Enabled Payment System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg"
        >
          Empower your platform with Aadhaar-based banking. RupeeFlow AEPS
          allows users to withdraw, deposit, and check balances seamlessly —
          with instant settlements and industry-leading security.
        </motion.p>
      </section>

      {/* AEPS Features */}
      <section className="relative z-10 pb-24 px-6 bg-black-emerald/40 backdrop-blur-md">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={content}
            className="fontheadingthin text-5xl text-white mb-16"
          >
            Simplify Banking with AEPS Integration
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={content}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition text-left"
              >
                <f.icon
                  className="w-12 h-12 text-emerald-400 mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="fontheading2 text-xl mb-2">{f.title}</h3>
                <p className="fontbody2 text-gray-400 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Integration Steps */}
      <section className="relative z-10 py-24 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={content}
            className="fontheadingthin text-6xl  text-white mb-16"
          >
            How AEPS Integration Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                variants={content}
                className="p-8 rounded-2xl border border-white/70 backdrop-blur-md bg-gray-500/10 hover:bg-white/10 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition"
              >
                <s.icon
                  className="w-10 h-10 text-emerald-400 mb-3"
                  strokeWidth={1.5}
                />
                <h3 className="fontheading2 text-2xl mb-2">{s.title}</h3>
                <p className="fontbody2 text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-neutral-200 text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="fontheading2 text-4xl mb-6">
            Ready to Integrate AEPS With RupeeFlow?
          </h2>
          <p className="fontbody2 text-lg text-gray-900 mb-10">
            Access AEPS APIs, SDKs, and sandbox environments to build fast,
            secure, and reliable Aadhaar-based payment solutions.
          </p>
          <Link
            href="/signup?product=aeps"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-neutral-900 transition"
          >
            Get AEPS Access →
          </Link>
        </div>
      </section>
      <FaqSection />
    </main>
  )
}
