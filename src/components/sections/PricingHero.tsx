'use client'

import { motion, useAnimation, Variants } from 'framer-motion'
import { Check, ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      desc: 'Perfect for individuals who want effortless UPI payments.',
      features: [
        'Unlimited UPI payments',
        'Automated bill reminders & insights',
        'Voice UPI (payments in multiple languages)',
        'RBI & NPCI-compliant security features',
        'Basic financial insights dashboard',
      ],
      buttonText: 'Download The App',
      buttonHref: '#',
      highlight: false,
    },
    {
      name: 'Plus',
      price: '₹199',
      period: '/month',
      desc: 'Great for advanced users and NRIs managing family payments.',
      features: [
        'All Free Plan features',
        'Cross-border utility payments for NRIs',
        'Real-time forex conversions (0.5–1% fee)',
        'Family accounts & delegated payments',
        'Premium AI bill insights & personalized rewards',
        'Priority customer support',
      ],
      buttonText: 'Get Plus',
      buttonHref: '#',
      highlight: true,
    },
    {
      name: 'Business',
      price: '₹499',
      period: '/month',
      desc: 'Designed for small businesses and MSMEs that need advanced tools.',
      features: [
        'All Plus Plan features',
        'Bulk payments & payroll in one tap',
        'Instant invoice UPI with low fees',
        'Vendor verification insights',
        'Data-driven analytics for cash management',
        'Dedicated account manager + priority onboarding',
      ],
      buttonText: 'Get Business',
      buttonHref: '#',
      highlight: false,
    },
  ]

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

  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative w-full bg-black text-white py-36 px-6 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <motion.h2
          variants={content}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Simple, Transparent{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Pricing
          </span>{' '}
          for Everyone
        </motion.h2>
        <motion.p
          variants={content}
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
        >
          Enjoy unlimited UPI payments, voice support, and bill reminders — all
          at no cost.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-30 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {plans.map(plan => (
          <motion.div
            key={plan.name}
            variants={card}
            whileHover={{ scale: 1.04 }}
            className={`relative backdrop-blur-lg  border ${
              plan.highlight
                ? 'bg-neutral-600/30 backdrop-blur-lg shadow-[0_0_25px_rgba(34,197,94,0.3)]'
                : 'border-white/10 '
            } rounded-2xl p-8 flex flex-col justify-between transition-all duration-300`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>

              <div className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-base text-gray-400">{plan.period}</span>
              </div>

              <ul className="text-sm space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href={plan.buttonHref}
              className={`mt-30 inline-flex items-center justify-center gap-2 font-semibold rounded-md px-6 py-3 transition ${
                plan.highlight
                  ? 'bg-teal-emerald hover:bg-emerald-600 text-black'
                  : 'border border-teal-500 hover:bg-teal-emerald hover:text-white text-teal-400'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              {plan.buttonText}
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute opacity-70 top-[5%] left-[15%] w-100 h-100 bg-radial-teal-soft "></div>
      <div className="absolute opacity-70 bottom-[-10%] right-[10%] w-150 h-150 bg-radial-emerald-soft "></div>
    </section>
  )
}
