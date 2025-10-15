'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import {
  Banknote,
  Zap,
  ShieldCheck,
  FileText,
  BarChart,
  Code2,
  Server,
  FileJson,
  CheckCircle2,
} from 'lucide-react'

export default function NEFTIntegrationPage() {
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
      icon: Banknote,
      title: '24×7 NEFT Transfers',
      desc: 'Transfer funds anytime, across any bank — no downtime or manual delays.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Settlements',
      desc: 'Optimized routing ensures quick transaction completion and instant status updates.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & RBI-Compliant',
      desc: 'Every transaction is encrypted and monitored under RupeeFlow’s compliance and audit framework.',
    },
    {
      icon: FileText,
      title: 'Automated Reconciliation',
      desc: 'Track, verify, and reconcile settlements effortlessly through our dashboard and APIs.',
    },
    {
      icon: BarChart,
      title: 'Smart Payment Insights',
      desc: 'Get live reports on performance, transaction speed, and analytics through RupeeFlow’s AI engine.',
    },
    {
      icon: Code2,
      title: 'Seamless Integration',
      desc: 'Integrate NEFT payments easily with developer-friendly APIs, SDKs, and sandbox tools.',
    },
  ]

  const steps = [
    {
      icon: FileJson,
      title: '1. Get API Credentials',
      desc: 'Sign up on RupeeFlow and request NEFT API credentials to access sandbox and live environments.',
    },
    {
      icon: Server,
      title: '2. Configure Endpoints',
      desc: 'Integrate NEFT APIs into your backend to initiate, verify, and track transfers securely.',
    },
    {
      icon: Code2,
      title: '3. Implement Webhooks',
      desc: 'Enable real-time updates for transaction status, settlement confirmations, and failure alerts.',
    },
    {
      icon: CheckCircle2,
      title: '4. Go Live & Monitor',
      desc: 'Once verified, move to production and monitor NEFT performance with our analytics dashboard.',
    },
  ]

  return (
    <main className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(16,185,129,0.25),transparent_70%)] blur-3xl" />
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
          NEFT Payment API — Automate Reliable Bank Transfers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg"
        >
          Power your business with RupeeFlow’s NEFT API to handle fast,
          compliant, and secure inter-bank transfers. Scale operations with 24×7
          availability, intelligent routing, and real-time reconciliation.
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
            Key Highlights of NEFT API
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
            NEFT API Integration Steps
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                variants={content}
                className="p-8 rounded-2xl border border-white/80 backdrop-blur-md bg-gray-500/10 hover:bg-white/10 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition"
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
            Start Integrating NEFT API with RupeeFlow
          </motion.h2>
          <motion.p
            variants={content}
            className="fontbody2 text-lg text-gray-900 mb-10"
          >
            Automate your banking workflows with NEFT API — fast, secure, and
            built for scalability. Get sandbox access, documentation, and
            developer tools instantly.
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
    </main>
  )
}
