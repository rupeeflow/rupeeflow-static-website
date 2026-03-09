'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RentalMarquee from '@/components/sections/rentalPayments/RentalMarquee'
import RentalFaq from '@/components/sections/rentalPayments/RentalFaq'

/* ── Mockup 1: Eliminate Late Payment Penalties ── */
function AutoReminderMockup() {
  const reminders = [
    { label: 'Rent Due — 1st Nov', status: 'Paid', days: '2 days early' },
    { label: 'Rent Due — 1st Dec', status: 'Paid', days: 'On time' },
    { label: 'Rent Due — 1st Jan', status: 'Scheduled', days: 'Auto-pay on' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <div className="flex items-center justify-between mb-5">
        <p className="fontheading text-gray-900 text-base">Auto-Payment Schedule</p>
        <span className="text-[10px] bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">Active</span>
      </div>
      <div className="space-y-3 mb-5">
        {reminders.map((r, i) => (
          <motion.div
            key={r.label}
            className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
          >
            <div>
              <p className="text-xs font-semibold text-gray-800">{r.label}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{r.days}</p>
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${r.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700 animate-pulse'}`}>
              {r.status}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-emerald-50 rounded-xl px-4 py-2.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <p className="text-xs text-emerald-700 font-semibold">Zero late fees · 100% on-time record</p>
      </div>
    </div>
  )
}

/* ── Mockup 2: Multiple Payment Modes ── */
function PaymentModesMockup() {
  const modes = [
    { label: 'UPI', sub: 'Instant · Free', active: true, color: 'bg-purple-50 border-purple-200' },
    { label: 'NEFT', sub: 'T+1 · Bank', active: false, color: 'bg-gray-50 border-gray-200' },
    { label: 'Credit Card', sub: 'Rewards', active: false, color: 'bg-gray-50 border-gray-200' },
    { label: 'Wallet', sub: 'Instant', active: false, color: 'bg-gray-50 border-gray-200' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <p className="fontheading text-gray-900 text-base mb-1">Pay Rent Via</p>
      <p className="text-xs text-gray-400 mb-5">Choose your preferred payment mode</p>
      <div className="grid grid-cols-2 gap-3 mb-5">
        {modes.map((m, i) => (
          <motion.div
            key={m.label}
            className={`rounded-xl border-2 px-4 py-3 cursor-pointer ${m.active ? 'border-emerald-500 bg-emerald-50' : m.color}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08 + i * 0.1, duration: 0.35 }}
          >
            <p className={`text-sm font-bold ${m.active ? 'text-emerald-600' : 'text-gray-700'}`}>{m.label}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">{m.sub}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center">
        <div>
          <p className="text-[10px] text-gray-400">Rent Amount</p>
          <p className="text-lg font-bold text-gray-900">₹25,000</p>
        </div>
        <motion.div
          className="bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-full"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Pay Now →
        </motion.div>
      </div>
    </div>
  )
}

/* ── Mockup 3: Streamlined Payment Tracking ── */
function TrackingMockup() {
  const txns = [
    { prop: 'Prestige Towers, B-204', date: '01 Nov', amount: '₹25,000', status: 'Settled' },
    { prop: 'Green Acres, 12A', date: '01 Nov', amount: '₹18,500', status: 'Settled' },
    { prop: 'City Mall Unit 3', date: '03 Nov', amount: '₹42,000', status: 'Settled' },
    { prop: 'Skyline Office 7B', date: '05 Nov', amount: '₹31,000', status: 'Pending' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[380px]">
      <div className="flex items-center justify-between mb-4">
        <p className="fontheading text-gray-900 text-base">Rent Tracker</p>
        <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full">Nov 2024</span>
      </div>
      <div className="space-y-2.5 mb-4">
        {txns.map((t, i) => (
          <motion.div
            key={t.prop}
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800 max-w-[140px] truncate">{t.prop}</p>
                <p className="text-[10px] text-gray-400">{t.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-gray-900">{t.amount}</p>
              <span className={`text-[10px] font-semibold ${t.status === 'Settled' ? 'text-emerald-600' : 'text-amber-500'}`}>{t.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-gray-100 pt-3 flex justify-between text-xs">
        <span className="text-gray-400">Total This Month</span>
        <span className="font-bold text-gray-900">₹1,16,500</span>
      </div>
    </div>
  )
}

/* ── Mockup 4: Instant Reconciliation ── */
function ReconciliationMockup() {
  const rows = [
    { inv: 'INV-NOV-01', tenant: 'Rohan Mehta', amount: '₹25,000', match: 'Matched' },
    { inv: 'INV-NOV-02', tenant: 'Priya Shah', amount: '₹18,500', match: 'Matched' },
    { inv: 'INV-NOV-03', tenant: 'Amit Corp.', amount: '₹42,000', match: 'Matched' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[380px]">
      <div className="flex items-center justify-between mb-4">
        <p className="fontheading text-gray-900 text-base">Auto-Reconciliation</p>
        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">3/3 Matched</span>
      </div>
      <div className="space-y-2.5 mb-4">
        {rows.map((r, i) => (
          <motion.div
            key={r.inv}
            className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
          >
            <div>
              <p className="text-xs font-semibold text-gray-800">{r.inv}</p>
              <p className="text-[10px] text-gray-400">{r.tenant}</p>
            </div>
            <span className="text-xs font-bold text-gray-900">{r.amount}</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold">{r.match}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-gray-100 pt-3 flex justify-between text-xs">
        <span className="text-gray-400">0 Unmatched · 0 Errors</span>
        <span className="text-emerald-600 font-semibold">Books Balanced ✓</span>
      </div>
    </div>
  )
}

/* ── Mockup 5: Secure Transactions ── */
function SecurityMockup() {
  const checks = [
    '256-bit AES Encryption',
    'ISO 27001 Compliant',
    'Bank-grade 2FA',
    'Real-time Fraud Detection',
    'End-to-End Data Protection',
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <p className="fontheading text-gray-900 text-base">Security Shield</p>
          <p className="text-[10px] text-emerald-600 font-semibold">Bank-grade protection active</p>
        </div>
      </div>
      <div className="space-y-3 mb-5">
        {checks.map((c, i) => (
          <motion.div
            key={c}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 font-medium">{c}</span>
          </motion.div>
        ))}
      </div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-center">
        <p className="text-xs font-semibold text-emerald-700">Your rent payments are 100% secure</p>
      </div>
    </div>
  )
}

const features = [
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Eliminate Late Payment Penalties',
    desc: "Avoid the stress and cost of missing due dates. Rupeeflow's automated reminders and recurring payment options ensure your rent is paid on time, every time. Say goodbye to late fees and improve your cash flow with a solution designed to keep you punctual without constant follow-ups.",
    mockup: <AutoReminderMockup />,
    reverse: false,
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    title: 'Multiple Payment Modes',
    desc: 'Pay your rent your way. Choose from UPI, NEFT, RTGS, credit cards, or digital wallets to make your rental payments. Whether you want instant processing or flexibility in managing funds, Rupeeflow has a payment mode that works for you — and your landlord will thank you for it!',
    mockup: <PaymentModesMockup />,
    reverse: true,
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    title: 'Streamlined Payment Tracking',
    desc: "Say goodbye to messy spreadsheets and fragmented payment records. Rupeeflow's centralized dashboard gives you a real-time view of all your rent transactions. Know what's paid, what's pending, and what's overdue — all in one intuitive platform.",
    mockup: <TrackingMockup />,
    reverse: false,
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    title: 'Instant Reconciliation',
    desc: "Save hours of effort with automatic reconciliation. Rupeeflow links your payments to corresponding invoices seamlessly, so you can track rent settlements without lifting a finger. No more manual matching, no more errors — just accurate records and peace of mind.",
    mockup: <ReconciliationMockup />,
    reverse: true,
  },
  {
    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: 'Secure Transactions',
    desc: 'Your security is our priority. Rupeeflow uses multi-layered encryption, fraud detection, and bank-grade protocols to safeguard every transaction. Whether you pay rent via credit card, UPI, or any other method, you can trust that your data and funds are protected.',
    mockup: <SecurityMockup />,
    reverse: false,
  },
]

export default function RentalPaymentsPage() {
  return (
    <div className="w-full relative">

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 md:py-32 bg-[#f4f8fb] overflow-hidden">
        {/* Subtle bg blobs */}
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-emerald-500/6 blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: Text */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.span
                className="inline-flex items-center gap-2 text-emerald-600 text-xs font-semibold tracking-widest uppercase bg-emerald-100 rounded-full px-4 py-1.5 mb-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Rent Payments
              </motion.span>

              <h1 className="fontheading text-2xl sm:text-3xl md:text-[2.4rem] lg:text-[2.8rem] leading-tight text-gray-900 mb-6">
                Hassle-Free Rent Payments
                <br />
                with <span className="text-emerald-500">Rupeeflow</span>
              </h1>

              <p className="text-gray-500 text-base md:text-lg fontbody2 leading-relaxed max-w-lg mb-8">
                Say goodbye to delays and manual effort. Rupeeflow accelerates rent
                payments, ensuring they are fast, secure, and convenient.
              </p>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-8 mb-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[
                  { value: '₹100Cr+', label: 'Rent Processed' },
                  { value: '50K+', label: 'Happy Tenants' },
                  { value: '0%', label: 'Late Fees' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="fontheading text-2xl text-emerald-600">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                  Get Started Free
                </Link> */}
              </motion.div>
            </motion.div>

            {/* Right: Hero image + floating cards */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full max-w-[480px]">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/images/rent-payment/hf_20260223_075140_aa57e6c4-b4d0-47fa-bd6f-fda7a0cdc337.png"
                    alt="Hassle-Free Rent Payments"
                    width={480}
                    height={460}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </motion.div>

                {/* Floating: Rent Payment badge */}
                <motion.div
                  className="absolute top-[35%] left-[-16px] bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">Status</p>
                    <p className="text-xs fontheading text-gray-900">Rent Paid ✓</p>
                  </div>
                </motion.div>

                {/* Floating: Amount Disbursed */}
                <motion.div
                  className="absolute bottom-12 right-[-16px] bg-white rounded-xl shadow-lg px-5 py-3.5 flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <span className="text-sm fontheading text-emerald-600">₹</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 fontbody2">Amount Disbursed</p>
                    <p className="text-sm fontheading text-gray-900">₹12,03,300</p>
                    <div className="w-full h-1 bg-emerald-400 rounded-full mt-1.5" />
                  </div>
                </motion.div>

                {/* Floating: Auto-Pay pill */}
                <motion.div
                  className="absolute top-6 right-[-12px] bg-emerald-500 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                  <span className="text-xs text-white fontheading">Auto-Pay Active</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── HOW TO SETUP RENT PAYMENTS AUTOMATION ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              How To Setup <span className="text-emerald-500">Rent Payments</span> Automation
            </h2>
            <p className="mt-3 text-gray-500 text-sm md:text-base fontbody2 max-w-lg mx-auto">
              Get your rent payments on autopilot in just 3 simple steps
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: Steps */}
            <motion.div
              className="flex-1 space-y-5 w-full max-w-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  num: '01',
                  title: 'Sign Up',
                  desc: 'Create your Rupeeflow account in just a few clicks.',
                  active: false,
                },
                {
                  num: '02',
                  title: 'Add Payment Details',
                  desc: 'Link your rental agreements and landlord bank information securely.',
                  active: true,
                },
                {
                  num: '03',
                  title: 'Automate and Pay',
                  desc: 'Schedule recurring payments or pay on the go with automated reminders.',
                  active: false,
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  className={`flex items-start gap-5 rounded-2xl p-6 transition-shadow ${step.active ? 'bg-emerald-50 border border-emerald-200 shadow-md' : 'bg-gray-50 border border-transparent'}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${step.active ? 'bg-emerald-500 text-white' : 'bg-white border-2 border-emerald-300 text-emerald-600'}`}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">{step.desc}</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-2">
                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
            </motion.div>

            {/* Right: solutions.jpeg — full width of its flex column */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative w-full h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/images/rent-payment/solutions.jpeg"
                    alt="Rent Payment Solutions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PUT AN END TO RENTAL PAYMENT WOES ── */}
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
              Put an End to Rental Payment Woes with{' '}
              <span className="text-emerald-500">Rupeeflow</span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm md:text-base fontbody2 max-w-xl mx-auto">
              From automated scheduling to instant reconciliation — we handle the complexity so you don&apos;t have to.
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className={`flex flex-col ${f.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/25">
                      {f.icon}
                    </div>
                    <h3 className="fontheading text-xl md:text-2xl text-gray-900">{f.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                    {f.desc}
                  </p>
                  {/* <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link> */}
                </div>
                <div className="lg:w-[45%] flex justify-center">
                  {f.mockup}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <RentalMarquee />

      {/* ── FAQ ── */}
      <RentalFaq />
    </div>
  )
}
