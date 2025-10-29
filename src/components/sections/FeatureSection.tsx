'use client'

import { motion } from 'framer-motion'
import { Globe, Wifi, Mic, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FeatureSection() {
  const features = [
    {
      title: 'Cross Border Payments',
      icon: <Globe className="w-12 h-12 text-emerald-400" />,
      heading: 'Easy Cross Border Payments with UPI',
      points: [
        'Send money to India from anywhere in the world.',
        'Instant and low-fee payments with UPI.',
      ],
    },
    {
      title: 'Pay Any Time, Anywhere',
      icon: <Wifi className="w-12 h-12 text-emerald-400" />,
      heading: 'Online + Offline payments in one app',
      points: [
        'Works in cities and villages, even without internet.',
        'Smart UPI Lite ensures your money moves when needed.',
      ],
    },
    {
      title: 'Speak Your Language',
      icon: <Mic className="w-12 h-12 text-emerald-400" />,
      heading: 'Voice payments in regional languages',
      points: [
        'Pay bills or send money with simple voice commands.',
        'Supports multiple Indian languages for inclusivity.',
      ],
    },
    {
      title: 'Built for Trust & Growth',
      icon: <ShieldCheck className="w-12 h-12 text-emerald-400" />,
      heading: 'Secure, transparent, and MSME-friendly',
      points: [
        'Bank-grade security with UPI compliance.',
        'Tailored for individuals and small businesses.',
      ],
    },
  ]

  return (
    <section className="relative bg-black text-center py-32 px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.15),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.15),transparent_70%)] blur-3xl" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl fontheadingthin text-white mb-3"
        >
          The Future of UPI, Built for You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl md:text-3xl text-gradient-teal-emerald font-semibold mb-4"
        >
          Connecting Voices
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto mb-14 fontbody2 text-lg"
        >
          Key features that make RupeeFlow the next-generation UPI platform —
          from smart offline payments to multilingual voice commands.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="group bg-gray-700/20 border border-white/70 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition"
            >
              {/* Icon */}
              <div className="mb-6">{f.icon}</div>

              {/* Title */}
              <h3 className="fontheading2 text-xl text-white mb-3">
                {f.title}
              </h3>

              {/* Description */}
              <p className="fontbody2 text-gray-400 text-sm mb-6">
                {f.heading}
              </p>

              {/* Points */}
              <ul className="flex flex-col gap-2 text-left items-start justify-center w-full text-gray-300 text-xs space-y-1 mb-6">
                {f.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href="/product"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition mt-auto"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
