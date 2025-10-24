'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Fingerprint, IdCard, ShieldCheck } from 'lucide-react'

export default function VerificationSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const content: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const cards = [
    {
      icon: Fingerprint,
      title: 'Aadhaar Verification',
      desc: 'Verify users instantly with Aadhaar-based authentication — ensuring secure and compliant onboarding with verified identity data.',
    },
    {
      icon: IdCard,
      title: 'PAN Verification',
      desc: 'Enable instant PAN verification to validate tax information and eliminate fraudulent account creation using RupeeFlow’s API.',
    },
    {
      icon: ShieldCheck,
      title: 'Voter ID Verification',
      desc: 'Authenticate voter identities in real-time to meet KYC and compliance requirements with accurate government-backed data.',
    },
  ]

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.2),transparent_70%)] blur-3xl" />

      {/* Container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={content}
          className="fontheading2 text-5xl md:text-6xl text-gradient-teal-emerald mb-8"
        >
          Verification APIs — Simple, Fast & Reliable
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={content}
          className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg mb-16"
        >
          Verify user identities in seconds using RupeeFlow’s intelligent
          verification APIs. Reduce fraud, speed up onboarding, and ensure full
          compliance with secure government data sources.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={content}
              className="p-8 rounded-2xl bg-white/5 border border-white/80 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] transition flex flex-col items-center text-center"
            >
              <card.icon
                className="w-12 h-12 text-emerald-400 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="fontheading2 text-xl mb-3">{card.title}</h3>
              <p className="fontbody2 text-gray-400 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          variants={content}
          className="mt-16 flex justify-center items-center"
        >
          <Link
            href="/verification"
            className="px-8 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Explore Verification APIs →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
