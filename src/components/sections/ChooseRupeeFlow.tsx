'use client'

import { motion, Variants } from 'framer-motion'
import { ShieldCheck, Clock, Mic, ReceiptIndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseSection() {
  const features = [
    {
      icon: <ReceiptIndianRupee className="w-10 h-10 text-neutral-300" />,
      title: 'All your bills, paid in seconds.',
      desc: 'Electricity, water, mobile, and more — manage every bill in one place, without the hassle.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-neutral-300" />,
      title: 'Payments you can trust.',
      desc: 'End-to-end encryption and UPI compliance keep your money safe, no matter where you are.',
    },
    {
      icon: <Clock className="w-10 h-10 text-neutral-300" />,
      title: 'Always on, whenever you need us.',
      desc: 'RupeeFlow never sleeps. Pay, transfer, or get help anytime with round-the-clock support.',
    },
    {
      icon: <Mic className="w-10 h-10 text-neutral-300" />,
      title: 'Just say it, and it’s done.',
      desc: 'Make payments in your own language with simple voice commands — no typing, no stress.',
    },
  ]

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section className="relative w-full bg-black-emerald text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
            Why People Choose{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              RupeeFlow
            </span>
          </h2>
          <p className="text-gray-300 mb-10 text-sm md:text-base max-w-md">
            Stay ahead of the money management and transactions
          </p>

          <Link
            href="/product"
            className="inline-flex items-center gap-2 bg-teal-emerald hover:bg-hover text-black font-semibold px-6 py-3 rounded-md transition-colors duration-300 ease-in-out shadow-lg "
          >
            <ReceiptIndianRupee className="w-5 h-5" />
            SEE ALL FEATURES
          </Link>
        </motion.div>

        {/* Right Side - Feature Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col space-y-3 text-left"
            >
              <div>{feature.icon}</div>
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
