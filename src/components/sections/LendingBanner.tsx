'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'
import CheckMarkIcon from '../../../public/icons/payment-button/CheckMarkIcon'

const eligibilityItems = ['Credit Score: 780+', 'Income Verified', 'KYC Complete']

export default function LendingBanner() {
  return (
    <>
      {/* ════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
      ════════════════════════════════════════ */}
      <section className="lg:hidden relative bg-gradient-to-br from-[#051a10] via-[#082a18] to-[#020506] overflow-hidden">

        {/* Subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* ── Text content ── */}
        <div className="relative z-10 px-5 pt-14 pb-6">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1 text-[11px] text-emerald-400 font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Smart Lending
          </span>

          <h2 className="text-white text-2xl font-semibold leading-snug mb-3">
            Get upto <span className="text-emerald-400">₹50L credit</span> instantly with our smart lending plans
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Whether you are a NRI, SMB or a vendor — apply in minutes.
          </p>

          <button className="relative overflow-hidden px-8 py-3 rounded-full font-semibold text-black group">
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] group-hover:opacity-0 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-white rounded-full" />
              Apply Now
            </span>
          </button>
        </div>

        {/* ── Mini loan cards (horizontal scroll) ── */}
        <div className="relative z-10 px-5 pb-6 flex gap-3 overflow-x-auto scrollbar-hide">
          {/* Loan Calculator card */}
          <div className="bg-white rounded-2xl shadow-lg p-4 min-w-[200px] border border-gray-100 shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Calculator size={12} className="text-emerald-600" />
              </div>
              <span className="text-xs font-bold text-gray-800">Loan Calculator</span>
            </div>
            <p className="text-[9px] font-semibold tracking-widest text-gray-400 mb-1">LOAN AMOUNT</p>
            <p className="text-lg font-bold text-gray-900">₹25,00,000</p>
            <div className="w-full bg-gray-100 rounded-full h-1 mt-2 mb-2 relative">
              <div className="absolute left-0 top-0 h-1 w-[65%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
              <div className="absolute left-[63%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white shadow" />
            </div>
            <div className="flex justify-between text-[9px] text-gray-400 mb-2">
              <span>₹1L</span><span>₹75L</span>
            </div>
            <div className="flex justify-between border-t border-gray-100 pt-2">
              <div>
                <p className="text-[9px] text-gray-400">EMI</p>
                <p className="text-xs font-bold text-gray-800">₹25,910/mo</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400">RATE</p>
                <p className="text-xs font-bold text-emerald-600">4.5%</p>
              </div>
            </div>
          </div>

          {/* Check Eligibility card */}
          <div className="bg-white rounded-2xl shadow-lg p-4 min-w-[180px] border border-gray-100 shrink-0">
            <p className="text-xs font-bold text-gray-800 mb-2">Check Eligibility</p>
            <div className="space-y-2">
              {eligibilityItems.map(item => (
                <div key={item} className="flex items-center gap-1.5 text-[11px] text-gray-600">
                  <CheckMarkIcon className="flex-shrink-0" width={14} height={14} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-3 w-full text-[11px] bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full py-1.5 font-semibold">
              Check Now →
            </button>
          </div>

          {/* Loan Approved card */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-4 min-w-[160px] text-white shrink-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <CheckMarkIcon width={10} height={10} style={{ filter: 'brightness(0) invert(1)' }} />
              </span>
              <span className="text-xs font-bold">Approved!</span>
            </div>
            <p className="text-xl font-bold mt-1">₹10,00,000</p>
            <p className="text-[11px] opacity-80 mt-1">In 2 hours</p>
            <div className="mt-2 pt-2 border-t border-white/20 text-[11px] opacity-90 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              EMI starts 30 days later
            </div>
          </div>
        </div>

        {/* ── Person image at bottom ── */}
        <div className="relative h-[260px] overflow-hidden">
          <Image
            src="/home/landing-bannerr.png"
            alt="Smart lending"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Gradient from top (dark → transparent) to blend into section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#051a10] via-transparent to-transparent" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg)
      ════════════════════════════════════════ */}
      <section className="hidden lg:block relative w-full bg-black overflow-hidden min-h-[790px]">

        {/* Background Image */}
        <Image
          src="/home/landing-bannerr.png"
          alt="Smart lending"
          fill
          className="object-cover"
          priority
        />

        {/* Content grid — left: glass box, right: loan cards */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-10 py-28 flex flex-row items-center gap-10">

          {/* LEFT: Glass box */}
          <div className="bg-black/60 backdrop-blur-xl rounded-[32px] p-6 max-w-[480px] mt-96 shrink-0">
            <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
              Get upto 50L credit instantly
              with our{' '}
              <span className="text-emerald-400">smart lending</span> plans
            </h2>
            <p className="mt-6 text-gray-300 text-lg">
              Whether you are a NRI, SMB or a vendor
            </p>
            <button className="mt-10 relative overflow-hidden px-10 py-4 rounded-full font-semibold text-black group">
              <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] group-hover:opacity-0 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-2">
                <span className="w-3 h-3 bg-white rounded-full" />
                Apply Now
              </span>
            </button>
          </div>

          {/* RIGHT: Floating loan cards */}
          <div className="relative flex-1 flex flex-col items-center gap-5 pb-10">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="stat-card"
              style={{ transform: 'rotate(-3deg)' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 w-[240px] border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Calculator size={14} className="text-emerald-600" />
                  </div>
                  <span className="text-sm font-bold text-gray-800">Loan Calculator</span>
                </div>
                <p className="text-[10px] font-semibold tracking-widest text-gray-400 mb-1">SELECT LOAN AMOUNT</p>
                <p className="text-2xl font-bold text-gray-900">₹25,00,000</p>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2 mb-3 relative">
                  <div className="absolute left-0 top-0 h-1.5 w-[65%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
                  <div className="absolute left-[63%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                  <span>₹1,00,000</span>
                  <span>₹75,00,000</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-2">
                  <div>
                    <p className="text-[10px] text-gray-400">EST. MONTHLY</p>
                    <p className="text-sm font-bold text-gray-800">₹25,910</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400">INTEREST RATE</p>
                    <p className="text-sm font-bold text-emerald-600">From 4.5%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              style={{ transform: 'rotate(2deg)' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 w-[230px] border border-gray-100">
                <p className="text-sm font-bold text-gray-800 mb-3">Check Eligibility</p>
                <div className="space-y-2.5">
                  {eligibilityItems.map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckMarkIcon className="flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full text-xs bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full py-2 font-semibold hover:opacity-90 transition-opacity">
                  Check Now →
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              style={{ transform: 'rotate(-2deg)' }}
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-2xl p-4 w-[230px] text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckMarkIcon width={12} height={12} style={{ filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <span className="text-sm font-bold">Loan Approved!</span>
                </div>
                <p className="text-2xl font-bold mt-1">₹10,00,000</p>
                <p className="text-xs opacity-80 mt-1">Disbursed in 2 hours</p>
                <div className="mt-3 pt-2 border-t border-white/20 text-xs opacity-90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                  EMI starts 30 days later
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
