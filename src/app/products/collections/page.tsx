'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FaqSection from '@/components/sections/collections/FaqSection'
import { CrossCheckSVG } from '@/components/ui/icon/CrossCheckSVG'
import PhonePayIcon from '../../../../public/icons/upi-collections/PhonePayIcon'
import GpayIcon from '../../../../public/icons/upi-collections/GpayIcon'
import PaytmIcon from '../../../../public/icons/upi-collections/PaytmIcon'
import BhimUPIIcon from '../../../../public/icons/upi-collections/Bhimupi'
import MailSVG from '../../../../public/icons/global/MailIcon'
import SMSSvg from '../../../../public/icons/global/SmsIcon'

/* ─── Bar chart data (fixed — no Math.random) ─── */
const barData = [
  { hold: 55, recv: 42 },
  { hold: 48, recv: 62 },
  { hold: 52, recv: 68 },
  { hold: 38, recv: 58 },
  { hold: 72, recv: 88 },
  { hold: 44, recv: 54 },
  { hold: 34, recv: 48 },
  { hold: 30, recv: 44 },
]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']

/* ─── QR dot pattern (deterministic) ─── */
const qrDots = [
  1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1,
  0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0,
]

export default function CollectPayments() {
  return (
    <div className="w-full relative">
      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Spotlights */}
        <div
          className="absolute -left-[100px] top-[10%] w-[400px] h-[400px] rounded-full opacity-50 blur-[120px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-[-50px] top-[20%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-40 px-6">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              Collections
            </span>
          </motion.div>

          <motion.h1
            className="fontheading text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[4rem] leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Accept Payments the Smarter Way with{' '}
            <span className="text-emerald-400">Rupeeflow</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg fontbody2 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No more chasing, no more delays — Payment Collection Solutions for
            Merchants Who Want to Make Money
          </motion.p>

          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              Talk to Us
            </Link>
          </motion.div>
        </div>

        {/* ── Dashboard Visual ── */}
        <motion.div
          className="relative mt-12 max-w-4xl mx-auto h-[580px] px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Woman image */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Image
              src="/images/qr-collections/women.jpeg"
              alt="Business professional"
              fill
              className="object-cover object-top"
              sizes="896px"
              priority
            />
            {/* only fade bottom and sides — keep face visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020506] via-[#020506]/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020506]/50 via-transparent to-[#020506]/50" />
          </div>

          {/* ── Card 1: Total Amount Due — top-left ── */}
          <motion.div
            className="absolute top-8 left-4 md:left-8 z-20 bg-[#0d1a12] border border-white/10 rounded-2xl p-4 w-[160px] shadow-2xl shadow-black/50"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </div>
              <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full font-bold">
                -1.29%
              </span>
            </div>
            <p className="text-[10px] text-gray-500 mb-0.5">Total Amount Due</p>
            <p className="fontheading text-white text-[15px] tracking-tight">
              ₹60,032.00
            </p>
          </motion.div>

          {/* ── Card 2: Total Received — top-right ── */}
          <motion.div
            className="absolute top-8 right-4 md:right-8 z-20 bg-[#0d1a12] border border-white/10 rounded-2xl p-4 w-[160px] shadow-2xl shadow-black/50"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">
                +7.44%
              </span>
            </div>
            <p className="text-[10px] text-gray-500 mb-0.5">Total Received</p>
            <p className="fontheading text-white text-[15px] tracking-tight">
              ₹63,002.00
            </p>
          </motion.div>

          {/* ── Card 3: Collection Analytics — bottom-left ── */}
          <motion.div
            className="absolute bottom-8 left-4 md:left-8 z-20 bg-[#0d1a12] border border-white/10 rounded-2xl p-4 w-[220px] shadow-2xl shadow-black/50"
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-white">
                Collection Analytics
              </p>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[9px] text-gray-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                  Hold
                </span>
                <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Received
                </span>
              </div>
            </div>
            <div className="flex items-end gap-1 h-[48px]">
              {barData.map((bar, i) => (
                <div
                  key={i}
                  className="flex-1 flex items-end gap-[1px] h-full relative"
                >
                  {i === 4 && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[7px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap z-10">
                      May · ₹56k
                    </div>
                  )}
                  <div
                    className="flex-1 rounded-t-[2px] bg-gray-600/60"
                    style={{ height: `${bar.hold}%` }}
                  />
                  <div
                    className={`flex-1 rounded-t-[2px] ${i === 4 ? 'bg-emerald-400' : 'bg-emerald-600/80'}`}
                    style={{ height: `${bar.recv}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex mt-1.5">
              {months.map(m => (
                <span
                  key={m}
                  className="flex-1 text-center text-[8px] text-gray-600"
                >
                  {m}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Card 4: Payment Methods — right-center ── */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-20 bg-[#0d1a12] border border-white/10 rounded-2xl p-4 w-[148px] shadow-2xl shadow-black/50"
            animate={{ y: ['-50%', 'calc(-50% - 8px)', '-50%'] }}
            transition={{
              duration: 4.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
          >
            <p className="text-[10px] text-gray-400 font-semibold mb-3">
              Select Method
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'UPI', icon: '⚡', active: true },
                { label: 'IMPS', icon: '🔄', active: false },
                { label: 'NEFT', icon: '🏦', active: false },
                { label: 'Cards', icon: '💳', active: false },
              ].map(({ label, icon, active }) => (
                <div
                  key={label}
                  className={`rounded-xl p-2 flex flex-col items-center gap-1 border ${active ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-white/5 bg-white/5'}`}
                >
                  <span className="text-base leading-none">{icon}</span>
                  <span
                    className={`text-[9px] font-semibold ${active ? 'text-emerald-400' : 'text-gray-400'}`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 5: Payment Volume + Refunds — bottom-right ── */}
          <motion.div
            className="absolute bottom-8 right-4 md:right-8 z-20 bg-[#0d1a12] border border-white/10 rounded-2xl p-4 w-[160px] shadow-2xl shadow-black/50"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <div className="mb-3 pb-3 border-b border-white/5">
              <p className="text-[10px] text-gray-500 mb-0.5">Payment Volume</p>
              <p className="fontheading text-white text-2xl leading-none">
                150L
              </p>
              <p className="text-[10px] text-emerald-400 mt-0.5 font-medium">
                Till Last Month
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <p className="text-[10px] text-gray-500">Refunds</p>
                <p className="fontheading text-gray-300 text-base leading-none">
                  20k
                </p>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1.5">
                <div className="h-full w-[40%] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
              </div>
              <p className="text-[9px] text-gray-600 mt-1">
                4% of total volume
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#2a3444] to-[#1a2540]">
          <div className="absolute inset-0 bg-[#1a2540]/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            className="fontheading text-2xl md:text-4xl text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Payments Rolling In Automatically, Every Time.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '100%', label: 'Transaction Success Rate' },
              { value: '99.9%', label: 'Uptime' },
              { value: '100+', label: 'Payment Options' },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="bg-white rounded-2xl px-8 py-10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="fontheading text-4xl md:text-5xl text-gray-900">
                  {value}
                </h3>
                <p className="text-gray-500 fontbody2 mt-2">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FASTER, SMOOTHER, SMARTER
      ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              <span className="text-emerald-500">
                Faster, Smoother, Smarter
              </span>{' '}
              Payments Collection
            </h2>
          </motion.div>

          <div className="space-y-24">
            {/* 1. Payment Gateway */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    Payment Gateway
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  A high-performance gateway that enables merchants to accept
                  payments through multiple methods such as credit cards, debit
                  cards, UPI, net banking, and digital wallets, ensuring
                  seamless transactions with exceptional success rates and
                  security.
                </p>
                {/* <Link href="/payment-gateway" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              {/* Payment Gateway Card */}
              <div className="lg:w-[45%] flex justify-center">
                <div className="w-full max-w-[360px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4">
                    Select Payment Method
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: 'Credit Card', icon: '💳' },
                      { label: 'Debit Card', icon: '🏦' },
                      { label: 'UPI', icon: '⚡', active: true },
                      { label: 'Net Banking', icon: '🏛️' },
                      { label: 'Wallets', icon: '👛' },
                      { label: 'EMI', icon: '📅' },
                    ].map(({ label, icon, active }) => (
                      <div
                        key={label}
                        className={`border-2 rounded-xl p-3 flex flex-col items-center gap-1.5 ${active ? 'border-emerald-500 bg-emerald-50' : 'border-gray-100 bg-gray-50'}`}
                      >
                        <span className="text-lg leading-none">{icon}</span>
                        <span
                          className={`text-[10px] font-semibold ${active ? 'text-emerald-600' : 'text-gray-500'}`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <motion.div
                    className="w-full py-3 rounded-xl bg-emerald-500 text-white text-sm font-bold text-center"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    Pay ₹1,100.00
                  </motion.div>
                  <div className="flex items-center justify-center gap-1.5 mt-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-gray-400">
                      Secured by Rupeeflow · 256-bit SSL
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Payment Links */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    Payment Links
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Generate and share secure payment links instantly via SMS,
                  email, WhatsApp, or social media, allowing merchants to
                  collect payments from customers without requiring a website,
                  ensuring quick and hassle-free transactions.
                </p>
                {/* <Link href="/payment-links" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              {/* Payment Links Card */}
              <div className="lg:w-[45%] flex justify-center">
                <div className="w-full max-w-[360px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CrossCheckSVG width={20} height={20} />
                      <p className="text-xs font-semibold text-emerald-700">
                        Payment Link Created
                      </p>
                    </div>
                    <p className="text-[11px] text-emerald-600 font-mono truncate">
                      pay.rupeeflow.co/acme/5000
                    </p>
                  </div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-3">
                    Share via
                  </p>
                  <div className="flex items-center gap-3 mb-5">
                    {/* WhatsApp */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.526 5.858L0 24l6.335-1.652A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.2-1.375l-.372-.222-3.763.981.999-3.658-.243-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                      </div>
                      <span className="text-[9px] text-gray-500">WhatsApp</span>
                    </div>
                    {/* SMS */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                        <SMSSvg
                          className="w-7 h-7"
                          style={{ width: 28, height: 28 }}
                        />
                      </div>
                      <span className="text-[9px] text-gray-500">SMS</span>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                        <MailSVG
                          className="w-7 h-7"
                          style={{ width: 28, height: 28 }}
                        />
                      </div>
                      <span className="text-[9px] text-gray-500">Email</span>
                    </div>
                    {/* Copy Link */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-[9px] text-gray-500">Copy</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-[11px] text-gray-500">
                        Link Sent
                      </span>
                      <span className="text-[11px] font-semibold text-gray-700">
                        10:02 AM
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-emerald-50 rounded-lg px-3 py-2">
                      <span className="text-[11px] text-emerald-600 font-semibold">
                        Payment Received ✓
                      </span>
                      <span className="text-[11px] font-bold text-gray-900">
                        ₹5,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Payment Button */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    Payment Button
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Easily integrate a payment button on your website, app, or
                  digital platform, providing customers with a seamless checkout
                  experience that enhances conversions while simplifying payment
                  collection for merchants of all sizes.
                </p>
                {/* <Link href="/payment-button" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              {/* Payment Button Card */}
              <div className="lg:w-[45%] flex justify-center">
                <div className="w-full max-w-[360px] bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                  {/* Browser bar */}
                  <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-[10px] text-gray-400 truncate">
                      acme.store/checkout
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                        <span className="text-emerald-600 text-sm font-bold">
                          A
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          Acme Store
                        </p>
                        <p className="text-[10px] text-gray-400">
                          Premium Widget Pro
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Order Total</span>
                        <span className="font-bold text-gray-900">₹2,499</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Including GST</span>
                        <span className="text-gray-600">₹449</span>
                      </div>
                    </div>
                    <motion.div
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-bold flex items-center justify-center gap-2"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-white/80" />
                      Pay Now
                    </motion.div>
                    <p className="text-center text-[9px] text-gray-400 mt-2.5">
                      🔒 Powered by Rupeeflow
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4. Payment Page */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    Payment Page
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Create a professional, branded payment page in just minutes,
                  enabling merchants without a website to collect online
                  payments efficiently while providing customers with a secure
                  and user-friendly payment experience.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              {/* Payment Page Card */}
              <div className="lg:w-[45%] flex justify-center">
                <div className="w-full max-w-[360px] bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">RF</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">
                        Rupeeflow Store
                      </p>
                      <p className="text-white/70 text-[10px]">
                        Secure Payment Page
                      </p>
                    </div>
                    <div className="ml-auto">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-center mb-4">
                      <p className="text-xs text-gray-400 mb-0.5">
                        Amount to Pay
                      </p>
                      <p className="fontheading text-2xl text-gray-900">
                        ₹10,000
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {['UPI', 'Cards', 'Net Banking'].map((m, i) => (
                        <div
                          key={m}
                          className={`border rounded-lg p-2 text-center text-[10px] font-semibold ${i === 0 ? 'border-emerald-500 bg-emerald-50 text-emerald-600' : 'border-gray-200 text-gray-500'}`}
                        >
                          {m}
                        </div>
                      ))}
                    </div>
                    <div className="border border-gray-200 rounded-xl px-3 py-2.5 mb-3 flex items-center gap-2">
                      <span className="text-[11px] text-gray-400 flex-1">
                        Enter UPI ID
                      </span>
                      <span className="text-[10px] text-emerald-500 font-semibold">
                        Verify
                      </span>
                    </div>
                    <div className="w-full py-3 rounded-xl bg-emerald-500 text-white text-xs font-bold text-center">
                      Pay Securely →
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. UPI Payments */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    UPI Payments
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Enable customers to make instant payments using UPI, ensuring
                  a fast, secure, and seamless checkout process that reduces
                  transaction friction and improves the overall user experience
                  for both merchants and consumers alike.
                </p>

                {/* <Link href="/upi-collections" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              {/* UPI Card */}
              <div className="lg:w-[45%] flex justify-center">
                <div className="w-full max-w-[360px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                      <span className="text-purple-600 text-xs font-bold">
                        UPI
                      </span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">
                      UPI Payment
                    </p>
                    <span className="ml-auto text-[10px] bg-emerald-100 text-emerald-600 font-semibold px-2 py-0.5 rounded-full">
                      Instant
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-3">
                    Choose UPI App
                  </p>
                  <div className="grid grid-cols-4 gap-2 mb-5">
                    <div className="flex flex-col items-center gap-1.5">
                      <PhonePayIcon className="w-10 h-10" />
                      <span className="text-[9px] text-gray-500">PhonePe</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <GpayIcon className="w-10 h-10" />
                      <span className="text-[9px] text-gray-500">GPay</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <PaytmIcon className="w-10 h-10" />
                      <span className="text-[9px] text-gray-500">Paytm</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <BhimUPIIcon className="w-10 h-10" />
                      <span className="text-[9px] text-gray-500">BHIM</span>
                    </div>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between mb-3">
                    <span className="text-xs text-emerald-600 font-medium">
                      Amount
                    </span>
                    <span className="fontheading text-emerald-700">₹2,500</span>
                  </div>
                  <motion.div
                    className="w-full py-2.5 rounded-xl bg-purple-600 text-white text-xs font-bold text-center"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    Open UPI App →
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* 6. QR Code Payments */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    QR Code Payments
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Generate unique static or dynamic QR codes for merchants to
                  accept payments instantly in retail stores, restaurants, and
                  events, allowing customers to make secure and contactless
                  payments with ease.
                </p>

                {/* <Link href="/qr-code" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              {/* QR Card */}
              <div className="lg:w-[45%] flex justify-center">
                <div className="w-full max-w-[360px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  <div className="text-center mb-4">
                    <p className="text-sm font-bold text-gray-900 mb-0.5">
                      Scan &amp; Pay
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Use any UPI app to scan
                    </p>
                  </div>
                  {/* QR visual */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-[140px] h-[140px] border-2 border-gray-900 rounded-xl p-2">
                      {/* Corner finders */}
                      <div className="absolute top-3 left-3 w-7 h-7 border-4 border-gray-900 rounded-sm" />
                      <div className="absolute top-3 right-3 w-7 h-7 border-4 border-gray-900 rounded-sm" />
                      <div className="absolute bottom-3 left-3 w-7 h-7 border-4 border-gray-900 rounded-sm" />
                      {/* Dot grid */}
                      <div className="absolute top-14 left-3 right-3 grid grid-cols-8 gap-[2px]">
                        {qrDots.map((on, i) => (
                          <div
                            key={i}
                            className={`w-[10px] h-[10px] rounded-[1px] ${on ? 'bg-white' : 'bg-transparent'}`}
                          />
                        ))}
                      </div>
                      {/* Center logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                          <span className="text-[8px] font-bold text-emerald-600">
                            RF
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <p className="fontheading text-2xl text-gray-900">₹1,000</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      acme.store@rupeeflow
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-gray-500">
                      Waiting for payment…
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INSTANT SETTLEMENT
      ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900 mb-6">
                Why Wait? Unlock{' '}
                <span className="text-emerald-500">
                  Your Funds in Real-time
                </span>
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                  Instant Settlement
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                Get immediate access to your funds after each transaction,
                minimizing cash flow delays, improving business liquidity, and
                ensuring better financial planning while enabling seamless
                operations with real-time settlement capabilities.
              </p>

              {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link> */}
            </motion.div>

            {/* Instant Settlement Card */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-full max-w-[420px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="fontheading text-base text-gray-900">
                    Settlement Summary
                  </p>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full">
                    Real-time
                  </span>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5">
                  <p className="text-[10px] text-emerald-600 font-medium mb-1">
                    Available Balance
                  </p>
                  <p className="fontheading text-3xl text-emerald-700">
                    ₹2,45,000
                  </p>
                  <p className="text-[10px] text-emerald-500 mt-1 font-medium">
                    +₹25,000 settled · just now
                  </p>
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { step: 'Transaction Received', time: '10:01:22' },
                    { step: 'Verification Complete', time: '10:01:23' },
                    { step: 'Funds Settled', time: '10:01:24' },
                    { step: 'Account Updated', time: '10:01:24' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.step}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <CrossCheckSVG
                        width={20}
                        height={20}
                        className="shrink-0"
                      />
                      <div className="flex-1 flex justify-between">
                        <span className="text-xs text-gray-700 font-medium">
                          {s.step}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {s.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-emerald-500 text-white text-xs font-bold rounded-xl px-4 py-3 text-center">
                  ✓ Settlement Complete · 1.2 seconds
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AFFORDABILITY SUITE
      ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                  Affordability Suite
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                Empower customers with flexible payment options such as EMI and
                pay-later solutions, making high-value transactions more
                accessible while improving purchasing power and boosting sales
                for businesses.
              </p>

              {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link> */}
            </motion.div>

            {/* Affordability Suite Card */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-full max-w-[420px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                <div className="flex items-center justify-between mb-1">
                  <p className="fontheading text-base text-gray-900">
                    EMI Options
                  </p>
                  <span className="text-[10px] bg-blue-100 text-blue-600 font-bold px-3 py-1 rounded-full">
                    No Cost EMI
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-5">
                  Order Value: ₹24,000
                </p>
                <div className="space-y-3 mb-5">
                  {[
                    {
                      months: 3,
                      emi: '₹8,000',
                      total: '₹24,000',
                      interest: '0% interest',
                      popular: false,
                    },
                    {
                      months: 6,
                      emi: '₹4,200',
                      total: '₹25,200',
                      interest: '5% interest',
                      popular: true,
                    },
                    {
                      months: 12,
                      emi: '₹2,100',
                      total: '₹25,200',
                      interest: '5% interest',
                      popular: false,
                    },
                  ].map(({ months, emi, total, interest, popular }) => (
                    <div
                      key={months}
                      className={`relative border-2 rounded-xl p-4 flex items-center justify-between ${popular ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'}`}
                    >
                      {popular && (
                        <span className="absolute -top-2.5 right-4 text-[9px] bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-bold">
                          Popular
                        </span>
                      )}
                      <div>
                        <p
                          className={`text-sm font-bold ${popular ? 'text-emerald-700' : 'text-gray-900'}`}
                        >
                          {months} months
                        </p>
                        <p className="text-[10px] text-gray-400">
                          Total: {total}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`fontheading text-base ${popular ? 'text-emerald-600' : 'text-gray-700'}`}
                        >
                          {emi}/mo
                        </p>
                        <p
                          className={`text-[10px] ${interest.startsWith('0') ? 'text-emerald-500' : 'text-gray-400'}`}
                        >
                          {interest}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border border-dashed border-gray-300 rounded-xl p-3 flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      Pay Later
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Pay within 30 days
                    </p>
                  </div>
                  <span className="text-[10px] text-blue-500 font-semibold">
                    Instant Approval →
                  </span>
                </div>
                <motion.div
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-bold text-center"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  Choose EMI Plan
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />
    </div>
  )
}
