'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import {
  Zap,
  ShieldCheck,
  FileText,
  BarChart,
  Code2,
  Server,
  FileJson,
  CheckCircle2,
  Clock,
  Banknote,
} from 'lucide-react'
import FaqSection from '@/components/sections/FAQ'

export default function IMPSIntegrationPage() {
  // 🔹 Animation Variants
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
      icon: Zap,
      title: 'Instant Fund Transfers',
      desc: 'Enable instant interbank transactions anytime with RupeeFlow’s IMPS API — available 24×7.',
    },
    {
      icon: Clock,
      title: 'Real-Time Settlements',
      desc: 'Process payments and confirm transfers instantly with our high-availability IMPS network.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & RBI-Compliant',
      desc: 'Built on encrypted protocols, ensuring every transaction meets RBI and NPCI security standards.',
    },
    {
      icon: Banknote,
      title: 'Seamless Payout Automation',
      desc: 'Automate bulk and recurring payments with a single secure API call from your system.',
    },
    {
      icon: BarChart,
      title: 'Advanced Monitoring',
      desc: 'Get smart transaction analytics, performance trends, and reconciliation reports in real-time.',
    },
    {
      icon: Code2,
      title: 'Developer Friendly',
      desc: 'Simple REST APIs, clean documentation, and sandbox testing for faster integration.',
    },
  ]

  const steps = [
    {
      icon: FileJson,
      title: '1. Register & Get Credentials',
      desc: 'Sign up on RupeeFlow and obtain IMPS sandbox and production credentials to begin integration.',
    },
    {
      icon: Server,
      title: '2. Configure Endpoints',
      desc: 'Connect your backend to RupeeFlow’s IMPS API endpoints using secure HTTPS protocols.',
    },
    {
      icon: Code2,
      title: '3. Implement Payout Logic',
      desc: 'Trigger instant IMPS payments through API calls, supporting both single and bulk transactions.',
    },
    {
      icon: CheckCircle2,
      title: '4. Go Live & Track Transfers',
      desc: 'Move to production, monitor IMPS transactions in real-time, and access instant settlement logs.',
    },
  ]

  return (
    <main className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(16,185,129,0.25),transparent_70%)] blur-3xl" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-radial-emerald-soft rounded-full blur-3xl"
      ></motion.div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-28 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fontheading2 text-5xl md:text-6xl text-gradient-teal-emerald mb-6"
        >
          IMPS Payment API — Instant Real-Time Transfers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg"
        >
          Enable lightning-fast IMPS transfers with RupeeFlow’s API. Automate
          payouts, ensure instant settlements, and deliver seamless interbank
          transfers — available 24×7, with complete transparency and security.
        </motion.p>
      </section>

      {/* Features Section */}
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
            Key Highlights of IMPS API
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={content}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.25)] transition text-center"
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

      {/* Integration Steps Section */}
      <section className="relative z-10 py-24 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={content}
            className="fontheadingthin text-5xl md:text-6xl text-white mb-16"
          >
            IMPS API Integration Steps
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
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={content} className="fontheading2 text-4xl mb-6">
            Start Integrating IMPS API with RupeeFlow
          </motion.h2>
          <motion.p
            variants={content}
            className="fontbody2 text-lg text-gray-900 mb-10"
          >
            Enable instant, secure, and automated IMPS transfers with
            RupeeFlow’s modern payment APIs. Get credentials, access
            documentation, and test in sandbox mode today.
          </motion.p>

          <motion.div variants={content}>
            <Link
              href="/signup"
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-neutral-900 transition"
            >
              Get Started →
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <FaqSection />
    </main>
  )
}
