'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Send Money Across Borders in a <br className="hidden md:block" />
          Tap with{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            UPI
          </span>
          .
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm md:text-base max-w-2xl mb-10"
        >
          Move money across borders in seconds — no queues, no paperwork, no
          hidden charges. <br className="hidden md:block" /> Just the power of
          UPI, now without boundaries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Explore Solutions <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 border border-emerald-700 px-4 py-2 rounded-full hover:bg-green-600/20 transition"
          >
            <Image
              src="/icons/google-play.png"
              alt="Google Play"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold text-white">
              DOWNLOAD THE APP
            </span>
          </Link>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full max-w-5xl"
        >
          <Image
            src="/images/dashboard.png" // replace with your image path
            alt="RupeeFlow Dashboard"
            width={1200}
            height={700}
            className="rounded-xl object-cover w-full h-auto"
            priority
          />
        </motion.div>

        {/* Subheading below image */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-lg md:text-xl text-gray-200 font-medium"
        >
          Manage All Your Finances in one Dashboard
        </motion.h3>
      </div>
    </section>
  )
}
