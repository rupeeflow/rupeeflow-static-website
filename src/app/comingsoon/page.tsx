'use client'

import { motion, Variants } from 'framer-motion'
import { Clock, Rocket, Wrench, Sparkles, BellRing } from 'lucide-react'
import Link from 'next/link'

export default function ComingSoonPage() {
  // Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const icons = [
    { icon: Rocket, label: 'Launching new features soon' },
    { icon: Wrench, label: 'We’re polishing every detail' },
    { icon: Sparkles, label: 'Made with love and innovation' },
    { icon: BellRing, label: 'Stay tuned for updates!' },
  ]

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center py-15 lg:py-30">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(16,185,129,0.25),transparent_70%)] blur-3xl" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(52,211,153,0.2),transparent_70%)] rounded-full blur-3xl"
      ></motion.div>

      {/* Content Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl px-6"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="fontheadingthin py-2 text-6xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-400 drop-shadow-lg mb-8"
        >
          Coming Soon
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="fontbody2 text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-16"
        >
          We’re building something exciting.
          <br className="hidden sm:block" />
          Stay tuned for the next big innovation in fintech.
        </motion.p>

        {/* Icon Feature Row */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {icons.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all hover:shadow-[0_0_15px_rgba(34,197,94,0.25)]"
            >
              <Icon
                className="w-12 h-12 text-emerald-400 mb-4"
                strokeWidth={1.5}
              />
              <p className="fontbody2 text-gray-300 text-sm text-center">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Countdown / CTA */}
        <motion.div variants={fadeUp} className="flex flex-col items-center">
          <Clock
            className="w-10 h-10 text-emerald-400 mb-3 animate-pulse"
            strokeWidth={1.5}
          />
          <p className="fontbody2 text-gray-400 mb-8">
            Our team is working hard to launch soon
          </p>

          <Link
            href="/"
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
