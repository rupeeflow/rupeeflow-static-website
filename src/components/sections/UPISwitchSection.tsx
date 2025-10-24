'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, ShieldCheck, TrendingUp, Cpu } from 'lucide-react'

export default function UPISwitchSection() {
  // 🔹 Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.15 },
    },
  }

  const content: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const imageReveal: Variants = {
    hidden: {
      clipPath: 'circle(0% at 100% 50%)',
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      clipPath: 'circle(150% at 100% 50%)',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  }

  const benefits = [
    {
      icon: Zap,
      title: 'Smarter Routing',
      desc: 'Optimize every transaction path for maximum speed and success rates with AI-assisted routing.',
    },
    {
      icon: TrendingUp,
      title: 'Peak-Time Reliability',
      desc: 'Handle high transaction volumes seamlessly during load surges and festive spikes.',
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security',
      desc: 'All transfers are secured with advanced encryption and RupeeFlow’s fraud-resilient infrastructure.',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Optimization',
      desc: 'Real-time monitoring and predictive rerouting ensure performance and uptime at scale.',
    },
  ]

  return (
    <section className="relative w-full bg-black text-white pt-20 pb-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.15),transparent_70%)] blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16"
      >
        {/* Left Content */}
        <motion.div
          variants={content}
          className="flex-1 text-center md:text-left lg:pl-12 space-y-5"
        >
          <h2 className="fontheading2 text-4xl md:text-6xl leading-tight">
            Powering the Future of{' '}
            <span className="text-gradient-teal-emerald">
              UPI Infrastructure
            </span>
          </h2>

          <p className="fontbody2 text-gray-300 text-lg max-w-lg mx-auto md:mx-0 ">
            RupeeFlow’s UPI Switch is designed to handle high-volume
            transactions with intelligent routing, real-time monitoring, and
            AI-powered optimization, ensuring every payment succeeds, instantly.
          </p>

          <Link
            href="/solutions/upi-switch"
            className="inline-flex items-center justify-center px-8 py-3 mt-4 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-semibold rounded-full hover:scale-[1.02] transition"
          >
            Explore UPI Switch
          </Link>
        </motion.div>

        {/* Right Image Animation */}
        <motion.div
          variants={imageReveal}
          className="flex-1 relative w-full max-w-lg rounded-3xl overflow-hidden  border border-white"
        >
          <Image
            src="/images/upi-switch.png"
            alt="UPI Switch Visualization"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-full h-auto"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-6xl mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            variants={content}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition text-left"
          >
            <b.icon
              className="w-10 h-10 text-emerald-400 mb-4"
              strokeWidth={1.5}
            />
            <h3 className="fontheading2 text-xl mb-2">{b.title}</h3>
            <p className="fontbody2 text-gray-400 text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
