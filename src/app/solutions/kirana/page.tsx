'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import QrSmallIcon from '../../../../public/icons/qr-collections/QrSmallIcon'
import CheckMarkIcon from '../../../../public/icons/payment-button/CheckMarkIcon'
import SettingsIcon from '../../../../public/icons/payment-link/SettingsIcon'
import ProfileIcon from '../../../../public/icons/upi-collections/ProfileIcon'
import SmartDashboardIcon from '../../../../public/icons/payment-gateway/SmartDashboardIcon'
import LightingIcon from '../../../../public/icons/payment-button/LightingIcon'
import SecurityFirstIcon from '../../../../public/icons/payment-gateway/SecurityFirstIcon'

const solutions = [
  {
    title: 'Smart POS + Free QR Code',
    description: 'Accept card, UPI, and contactless payments at your store with T+1 settlement and daily WhatsApp reports.',
    features: [
      'Accept UPI, Visa, Mastercard, RuPay, Amex',
      'T+1 Daily Settlement by 9 AM',
      'Zero MDR on UPI transactions',
      'Daily WhatsApp reports at 7 PM',
      'Build credit score with every transaction',
    ],
    Icon: QrSmallIcon,
    link: '/smart-pos',
  },
  {
    title: 'Merchant Cash Advance',
    description: 'Get instant business loans based on your daily sales without collateral.',
    features: [
      '₹10,000 to ₹5,00,000 funding',
      'Approval in 3 minutes',
      'Flexible daily repayment',
      'No collateral required',
      'Based on UPI transaction history',
    ],
    Icon: CheckMarkIcon,
    link: '/merchant-cash-advance',
  },
  {
    title: 'Bill Payments',
    description: 'Offer bill payment services to customers and earn commission on every transaction.',
    features: [
      'Electricity, water, gas bills',
      'Mobile and DTH recharge',
      'Insurance premium payments',
      'Earn commission on each bill',
      'Instant payment confirmation',
    ],
    Icon: SettingsIcon,
    link: '/bill-payments',
  },
  {
    title: 'Voice Payments in 12 Languages',
    description: 'Accept payments through voice commands in local languages for easier transactions.',
    features: [
      'Support for 12+ Indian languages',
      'Voice-activated UPI payments',
      'No typing required',
      'Perfect for elderly customers',
      'Hands-free operation',
    ],
    Icon: ProfileIcon,
    link: '/voice-payments',
  },
]

const benefits = [
  {
    title: 'Easy to Use',
    description: 'Simple interface designed for shopkeepers with minimal training required.',
    Icon: CheckMarkIcon,
  },
  {
    title: 'Low Cost',
    description: 'Affordable pricing with no setup fees or monthly charges.',
    Icon: SmartDashboardIcon,
  },
  {
    title: 'Local Language',
    description: 'Available in Hindi, Tamil, Telugu, and other regional languages.',
    Icon: ProfileIcon,
  },
  {
    title: 'Instant Settlement',
    description: 'Get your money in your account within minutes of transaction.',
    Icon: LightingIcon,
  },
]

export default function KiranaSolutionsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <main className="relative min-h-screen bg-[var(--card)]">
      {/* Hero Section */}
      <section className="relative bg-[var(--background)] text-[var(--foreground)] py-20 md:py-32 overflow-hidden">
        {/* Animated blob 1 — top-left */}
        <motion.div
          className="absolute -left-[100px] top-[10%] w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.6, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated blob 2 — mid-left */}
        <motion.div
          className="absolute left-[5%] top-[40%] w-[480px] h-[480px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.22, 0.38, 0.22] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* Animated blob 3 — right glow accent */}
        <motion.div
          className="absolute right-[8%] top-[20%] w-[320px] h-[320px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #30F3BC 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                <span className="text-emerald-400 text-sm font-semibold">Kirana Store Solutions</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Digital Solutions for Your Neighborhood Store
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Accept payments, manage inventory, offer bill payments, and grow your kirana business with modern technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-[var(--foreground)] font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-[var(--foreground)] font-semibold hover:bg-[var(--card)] transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/business/kirana.svg"
                alt="Kirana Store Solutions"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" ref={ref} className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Kirana Stores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a modern retail store and serve your customers better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--card)] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500"
              >
                <solution.Icon className="w-20 h-20 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.link}
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Kirana Stores Love RupeeFlow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed specifically for small retail businesses in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.Icon className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
            Ready to Digitize Your Kirana Store?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Join thousands of kirana stores across India using RupeeFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--card)] text-emerald-600 font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-[var(--foreground)] font-semibold hover:bg-[var(--card)] transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
