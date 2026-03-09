'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import WebIcon from '../../../../public/icons/vendor-payments/WebIcon'
import CheckMarkIcon from '../../../../public/icons/payment-button/CheckMarkIcon'
import SettingsIcon from '../../../../public/icons/payment-link/SettingsIcon'
import CardsIcon from '../../../../public/icons/vendor-payments/CardsIcon'
import LightingIcon from '../../../../public/icons/payment-button/LightingIcon'
import SecurityFirstIcon from '../../../../public/icons/payment-gateway/SecurityFirstIcon'
import SmartDashboardIcon from '../../../../public/icons/payment-gateway/SmartDashboardIcon'
import ProfileIcon from '../../../../public/icons/upi-collections/ProfileIcon'

const solutions = [
  {
    title: 'Cross-Border Remittance',
    description: 'Send money to India instantly with competitive exchange rates and low fees.',
    features: [
      'Instant transfers to any Indian bank',
      'Competitive forex rates',
      'Support for 50+ currencies',
      'Track transfers in real-time',
      'Secure and RBI compliant',
    ],
    Icon: WebIcon,
    link: '/cross-border-payments',
  },
  {
    title: 'NRI Emergency Loans',
    description: 'Quick access to funds for family emergencies in India without lengthy paperwork.',
    features: [
      'Loans up to ₹30 lakhs',
      'Approval within 24 hours',
      'Minimal documentation',
      'Flexible repayment options',
      'Competitive interest rates',
    ],
    Icon: CheckMarkIcon,
    link: '/nri-emergency-loans',
  },
  {
    title: 'Direct Bill Payments to India',
    description: 'Pay utility bills, insurance premiums, and other bills in India from anywhere.',
    features: [
      'Pay electricity, water, gas bills',
      'Insurance and loan EMI payments',
      'Property tax and maintenance',
      'School fees and donations',
      'Instant payment confirmation',
    ],
    Icon: SettingsIcon,
    link: '/bill-payments',
  },
  {
    title: 'Multi-Currency Support',
    description: 'Hold and transact in multiple currencies with a single account.',
    features: [
      'Support for USD, EUR, GBP, AED, SGD',
      'Real-time currency conversion',
      'Lock exchange rates in advance',
      'Virtual cards in multiple currencies',
      'Transparent fee structure',
    ],
    Icon: CardsIcon,
    link: '/cross-border-payments',
  },
]

const benefits = [
  {
    title: 'Fast Transfers',
    description: 'Money reaches India in minutes, not days. Perfect for urgent needs.',
    Icon: LightingIcon,
  },
  {
    title: 'Best Rates',
    description: 'Competitive exchange rates with transparent fees and no hidden charges.',
    Icon: CheckMarkIcon,
  },
  {
    title: 'Secure & Compliant',
    description: 'RBI approved and fully compliant with international regulations.',
    Icon: SecurityFirstIcon,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support in multiple languages.',
    Icon: ProfileIcon,
  },
]

export default function NRISolutionsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <main className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#020506] text-white py-20 md:py-32 overflow-hidden">
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
                <span className="text-emerald-400 text-sm font-semibold">NRI Solutions</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Stay Connected to India, Financially
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Send money, pay bills, and manage finances in India seamlessly from anywhere in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/nri/nri.png"
                  alt="NRI Solutions"
                  fill
                  className="object-cover object-top"
                />
              </div>
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
              Solutions for NRIs & Overseas Indians
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial services to manage your India connections effortlessly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500"
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why NRIs Trust RupeeFlow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of Indians living abroad
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your India Transactions?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Join thousands of NRIs managing their India finances with RupeeFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Get Started Now
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
