'use client'

import { motion, Variants } from 'framer-motion'

import { ArrowRight, IndianRupee, ShieldCheck, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function DMTSection() {
  const dmt = [
    {
      icon: IndianRupee,
      title: 'Real-Time Transfers',
      desc: ' Enable IMPS & NEFT transfers with lightning-fast settlements and 24/7 availability.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Compliant',
      desc: 'Robust KYC & fraud protection built-in with RBI and NPCI standards compliance.',
    },
    {
      icon: Zap,
      title: 'Instant Activation',
      desc: ' Simple integration with our RESTful API — start serving customers in hours, not days',
    },
  ]
  // Base animation structure
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

  const flareGlow: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.8,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-24 px-6">
      {/* Background Glows */}
      <motion.div
        variants={flareGlow}
        initial="hidden"
        animate="visible"
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-radial-teal-soft blur-3xl opacity-60"
      ></motion.div>
      <motion.div
        variants={flareGlow}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-radial-emerald-soft blur-3xl opacity-60"
      ></motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-10"
      >
        {/* Heading */}
        <motion.h2
          variants={content}
          className="fontheading2 text-4xl md:text-6xl text-gradient-teal-emerald"
        >
          Domestic Money Transfer (DMT)
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={content}
          className="fontbody2 text-gray-300 max-w-2xl mx-auto"
        >
          Power your fintech or platform with instant domestic transfers across
          400+ banks — secure, fast, and fully compliant.
        </motion.p>

        {/* Glass Cards */}
        <motion.div
          variants={content}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {dmt.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-neutral-600/20 border border-white/50 rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <f.icon
                className="w-12 h-12 text-emerald-400 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-normal text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Highlight */}
        <motion.div
          variants={content}
          className="mt-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 max-w-5xl text-center"
        >
          <h3 className="text-2xl fontheading2 mb-3 text-gradient-teal-emerald">
            Expand your reach with instant DMT services
          </h3>
          <p className="max-w-2xl text-gray-300 mb-12">
            Offer customers secure money transfers anytime, anywhere — with
            RupeeFlow’s DMT API integration designed for speed and scalability.
          </p>

          <Link
            href="/solutions/dmt"
            className="inline-flex items-center gap-2 bg-teal-emerald-dark text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Learn More About DMT <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
