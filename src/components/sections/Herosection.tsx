'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

export default function HeroSection() {
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

  return (
    <section className="relative w-full bg-black text-white py-30 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="absolute inset-0 blur-3xl top-[20%] left-[20%] w-100 h-100 bg-radial-teal-soft "
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute  blur-3xl top-[4%] right-[20%] w-100 h-100 bg-radial-emerald-soft "
      ></motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl z-10 mx-auto gap-10 flex flex-col items-center text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={content}
          className="text-3xl md:text-5xl lg:text-[5vw] fontheading2  leading-tight"
        >
          Send Money Across Borders in <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            One Tap with UPI
          </span>
          .
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={content}
          className="text-gray-300 fontbody2 text-sm md:text-base mb-4 "
        >
          Move money across borders in seconds — no queues, no paperwork, no
          hidden charges. <br className="hidden md:block" /> Just the power of
          UPI, now without boundaries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={content}
          className="flex flex-col sm:flex-row gap-4 mb-6 relative z-20"
        >
          <Link
            href="/product"
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
          variants={content}
          className="relative z-20 rounded-3xl w-full max-w-5xl shadow-[0_-10px_36px_rgba(81,255,189,0.36)]"
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
          className="mt-4 text-lg md:text-xl text-gray-200 font-medium"
        >
          Manage All Your Finances in one Dashboard
        </motion.h3>
      </motion.div>
    </section>
  )
}
