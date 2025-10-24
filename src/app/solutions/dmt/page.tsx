'use client'

import FaqSection from '@/components/sections/FAQ'
import { motion, Variants } from 'framer-motion'
import {
  Banknote,
  ShieldCheck,
  Clock,
  Code2,
  FileJson,
  Zap,
  Server,
  ArrowRightCircle,
} from 'lucide-react'
import Link from 'next/link'

export default function DMTPage() {
  // 🔹 Base Animation Variants
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
      icon: Banknote,
      title: 'Instant Domestic Transfers',
      desc: 'Enable instant IMPS and NEFT transfers with lightning-fast settlements and round-the-clock availability.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Compliant',
      desc: 'Built with multi-layer KYC, encryption, and fraud detection for safe money movement.',
    },
    {
      icon: Clock,
      title: 'Quick Settlements',
      desc: 'Ensure near-instant settlements with auto-reconciliation and real-time transaction visibility.',
    },
    {
      icon: Zap,
      title: 'Low Latency APIs',
      desc: 'Experience ultra-fast DMT processing with RupeeFlow’s optimized API gateway.',
    },
  ]

  const steps = [
    {
      icon: FileJson,
      title: '1. Obtain API Credentials',
      desc: 'Register on RupeeFlow and receive your DMT sandbox and live API credentials.',
    },
    {
      icon: Server,
      title: '2. Connect to API Endpoints',
      desc: 'Use RESTful endpoints to authenticate users, initiate transfers, and check transaction status.',
    },
    {
      icon: Code2,
      title: '3. Implement KYC & Validation',
      desc: 'Integrate user onboarding with RupeeFlow’s KYC verification layer to ensure compliance.',
    },
    {
      icon: ShieldCheck,
      title: '4. Go Live with Monitoring',
      desc: 'Once verified, start real transfers and monitor live DMT analytics in your RupeeFlow dashboard.',
    },
  ]

  return (
    <main className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(16,185,129,0.2),transparent_70%)] blur-3xl" />

      {/* Hero Section */}
      <section className="relative z-10 text-center py-28 px-6 max-w-6xl mx-auto">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.h1
            variants={content}
            className="fontheading2 text-5xl md:text-6xl text-gradient-teal-emerald mb-6"
          >
            DMT — Domestic Money Transfer API
          </motion.h1>

          <motion.p
            variants={content}
            className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg"
          >
            Build instant money transfer solutions for your users with
            RupeeFlow’s DMT API. Fast, secure, and compliant — enabling IMPS and
            NEFT transfers across India anytime, anywhere.
          </motion.p>
        </motion.div>
      </section>

      {/* DMT Features */}
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
            Simplify Payments with DMT Integration
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
            className="fontheadingthin text-6xl text-white mb-16"
          >
            How DMT Integration Works
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={content} className="fontheading2 text-4xl mb-6">
            Ready to Integrate DMT With RupeeFlow?
          </motion.h2>

          <motion.p
            variants={content}
            className="fontbody2 text-lg text-gray-900 mb-10"
          >
            Get access to DMT APIs, SDKs, and sandbox environments to build
            secure, scalable, and lightning-fast domestic money transfer
            solutions.
          </motion.p>

          <motion.div variants={content}>
            <Link
              href="/signup?product=dmt"
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-neutral-900 transition"
            >
              Get DMT Access <ArrowRightCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <FaqSection />
    </main>
  )
}
