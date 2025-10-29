'use client'

import FaqSection from '@/components/sections/FAQ'
import { motion, Variants } from 'framer-motion'
import {
  ShieldCheck,
  Cpu,
  Network,
  LineChart,
  FileJson,
  Server,
  Code2,
} from 'lucide-react'
import Link from 'next/link'

export default function UPISwitchPage() {
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

  // 🔹 Key Highlights
  const features = [
    {
      icon: Network,
      title: 'Smart Transaction Routing',
      desc: 'RupeeFlow’s UPI engine intelligently identifies the fastest and most reliable transaction routes across the UPI network — ensuring instant, secure payments every time.',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Decision Layer',
      desc: 'Powered by advanced AI models, RupeeFlow continuously learns from live network performance to reroute payments dynamically for maximum efficiency.',
    },
    {
      icon: ShieldCheck,
      title: 'Built-In Fraud Resilience',
      desc: 'Every UPI transfer is analyzed through RupeeFlow’s fraud detection framework that flags anomalies and prevents unsafe routing in real time.',
    },
    {
      icon: LineChart,
      title: 'Optimized for Scale',
      desc: 'Whether it’s one payment or one million — RupeeFlow’s adaptive switch architecture maintains peak uptime and throughput, even under heavy load.',
    },
  ]

  // 🔹 How It Works (Conceptual Overview)
  const steps = [
    {
      icon: FileJson,
      title: '1. Payment Initiation',
      desc: 'When a user starts a UPI payment, RupeeFlow’s intelligent layer instantly analyzes bank and network routes available for that transaction.',
    },
    {
      icon: Server,
      title: '2. Route Optimization',
      desc: 'Using AI and performance metrics, the system selects the optimal path — the fastest, safest, and most stable — to complete the transaction.',
    },
    {
      icon: Code2,
      title: '3. Transaction Verification',
      desc: 'RupeeFlow verifies the transaction against its fraud and reliability protocols before passing it through the UPI network for execution.',
    },
    {
      icon: ShieldCheck,
      title: '4. Instant Confirmation',
      desc: 'Users receive near-instant confirmations while RupeeFlow ensures reconciliation, analytics, and network insights on the backend.',
    },
  ]

  return (
    <main className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.2),transparent_70%)] blur-3xl" />

      {/* Hero Section */}
      <section className="relative z-10 text-center py-28 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fontheading2 text-5xl md:text-6xl text-gradient-teal-emerald mb-6"
        >
          Advanced UPI Switch — The Core of RupeeFlow’s Speed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg"
        >
          RupeeFlow doesn’t just process UPI transactions — it powers them with
          intelligence. Our advanced UPI Switch dynamically finds the fastest
          and safest route for every transfer, ensuring reliability and
          near-instant settlements for users worldwide.
        </motion.p>
      </section>

      {/* UPI Switch Features */}
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
            How RupeeFlow Excels with Advanced UPI Switching
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

      {/* How It Works */}
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
            How the UPI Routing Engine Works
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
            Experience the Power of RupeeFlow’s Advanced UPI Engine
          </motion.h2>
          <motion.p
            variants={content}
            className="fontbody2 text-lg text-gray-900 mb-10"
          >
            Enjoy faster, smarter, and more reliable UPI transactions powered by
            our adaptive switch and AI-driven optimization.
          </motion.p>

          <motion.div variants={content}>
            <Link
              href="https://rupeeflow.org/"
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
