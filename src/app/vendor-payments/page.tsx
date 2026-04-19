'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CardsIcon from '../../../public/icons/vendor-payments/CardsIcon'
import CheckIcon from '../../../public/icons/vendor-payments/CheckIcon'
import ColoredSettingIcon from '../../../public/icons/vendor-payments/ColoredSettingIcon'
import LightingFastIcon from '../../../public/icons/vendor-payments/LightingFastIcon'
import ReconcileIcon from '../../../public/icons/vendor-payments/ReconcileIcon'
import ReportsIcon from '../../../public/icons/vendor-payments/ReportsIcon'
import SafeGuardIcon from '../../../public/icons/vendor-payments/SafeGuardIcon'
import SecurityIcon from '../../../public/icons/vendor-payments/SecurityIcon'
import WebIcon from '../../../public/icons/vendor-payments/WebIcon'
import VendorPaymentsFaq from '@/components/sections/vendorPayments/VendorPaymentsFaq'

/* ─── Animated mockup: Pay Instantly via Multiple Channels ─── */
function PayChannelsMockup() {
  const methods = ['NEFT', 'RTGS', 'IMPS', 'UPI']
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 w-full max-w-[360px]">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Select Payment Channel</p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {methods.map((m, i) => (
          <motion.div
            key={m}
            className={`rounded-xl border-2 px-4 py-3 flex flex-col gap-1 cursor-pointer transition-colors ${i === 2 ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 bg-gray-50'}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
          >
            <span className={`text-sm font-bold ${i === 2 ? 'text-emerald-600' : 'text-gray-600'}`}>{m}</span>
            <span className="text-[10px] text-gray-400">
              {m === 'NEFT' ? 'Batch · T+1' : m === 'RTGS' ? '₹2L+ · Real time' : m === 'IMPS' ? 'Instant · 24/7' : 'Instant · UPI'}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-5 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Vendor</span>
          <span className="font-semibold text-gray-700">Sharma & Co.</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Amount</span>
          <span className="font-bold text-gray-900">₹1,25,000</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400">Mode</span>
          <span className="font-semibold text-emerald-600">IMPS</span>
        </div>
      </div>

      <motion.div
        className="w-full py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold text-center flex items-center justify-center gap-2"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        Send Payment
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.div>

      <div className="flex items-center gap-2 mt-4 justify-center">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] text-gray-400 font-medium">Processed in &lt; 2 seconds</span>
      </div>
    </div>
  )
}

/* ─── Animated mockup: Automated Invoicing & Approvals ─── */
function InvoiceApprovalMockup() {
  const steps = [
    { label: 'Invoice Submitted', done: true, time: '09:00 AM' },
    { label: 'Finance Review', done: true, time: '09:15 AM' },
    { label: 'Manager Approval', done: true, time: '09:32 AM' },
    { label: 'Payment Initiated', done: false, time: 'In progress…' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 w-full max-w-[360px]">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs text-gray-400 font-medium">Invoice</p>
          <p className="fontheading text-gray-900 text-base">#INV-2024-0891</p>
        </div>
        <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-3 py-1 rounded-full">Approval Flow</span>
      </div>

      <div className="space-y-4 mb-5">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.15, duration: 0.4 }}
          >
            <div className="flex flex-col items-center shrink-0">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step.done ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-400 animate-pulse'}`}>
                {step.done ? '✓' : '…'}
              </div>
              {i < steps.length - 1 && <div className="w-px h-6 bg-gray-200 mt-1" />}
            </div>
            <div className="pt-0.5">
              <p className={`text-sm font-semibold ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.label}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{step.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4 flex justify-between text-xs">
        <span className="text-gray-400">Vendor: TechVendors Ltd.</span>
        <span className="font-bold text-gray-900">₹3,40,000</span>
      </div>
    </div>
  )
}

/* ─── Animated mockup: Live Payment Tracking ─── */
function LiveTrackingMockup() {
  const statuses = [
    { label: 'Initiated', ts: '10:01:22 AM', done: true },
    { label: 'Bank Routing', ts: '10:01:23 AM', done: true },
    { label: 'Processing', ts: '10:01:24 AM', done: true },
    { label: 'Settled', ts: '10:01:24 AM', done: true },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 w-full max-w-[360px]">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
        <p className="text-sm font-semibold text-gray-700">Live Transaction Tracker</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-5">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">Amount</span>
          <span className="font-bold text-gray-900">₹2,50,000</span>
        </div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">To</span>
          <span className="font-semibold text-gray-700">ABC Vendors Pvt. Ltd.</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">Mode</span>
          <span className="text-emerald-600 font-semibold">IMPS · Real-time</span>
        </div>
      </div>

      <div className="space-y-3">
        {statuses.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.4 }}
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 flex justify-between">
              <span className="text-sm text-gray-700 font-medium">{s.label}</span>
              <span className="text-[10px] text-gray-400">{s.ts}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 bg-emerald-500 text-white text-xs font-semibold rounded-lg px-4 py-2.5 text-center">
        ✓ Settlement Complete · 1.2 seconds
      </div>
    </div>
  )
}

/* ─── Animated mockup: Instant Reconciliation ─── */
function ReconciliationMockup() {
  const rows = [
    { inv: 'INV-001', vendor: 'Sharma & Co.', amount: '₹25,000', status: 'Matched' },
    { inv: 'INV-002', vendor: 'TechVendors', amount: '₹18,500', status: 'Matched' },
    { inv: 'INV-003', vendor: 'FastSupply', amount: '₹42,000', status: 'Matched' },
    { inv: 'INV-004', vendor: 'QuickParts', amount: '₹9,800', status: 'Matched' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 w-full max-w-[380px]">
      <div className="flex items-center justify-between mb-4">
        <p className="fontheading text-gray-900 text-base">Auto-Reconciliation</p>
        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">4/4 Matched</span>
      </div>

      <div className="space-y-2.5 mb-4">
        {rows.map((row, i) => (
          <motion.div
            key={row.inv}
            className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
          >
            <div>
              <p className="text-xs font-semibold text-gray-800">{row.inv}</p>
              <p className="text-[10px] text-gray-400">{row.vendor}</p>
            </div>
            <span className="text-xs font-bold text-gray-900">{row.amount}</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold">{row.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-3 flex justify-between text-xs">
        <span className="text-gray-400">0 Unmatched · 0 Pending</span>
        <span className="text-emerald-600 font-semibold">Books Closed ✓</span>
      </div>
    </div>
  )
}

export default function VendorPaymentPage() {
  return (
    <div className="w-full relative">

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen bg-[#020506] overflow-hidden">
        {/* Spotlights */}
        <div
          className="absolute -left-[100px] top-[10%] w-[400px] h-[400px] rounded-full opacity-50 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)' }}
        />
        <div
          className="absolute right-[-50px] top-[25%] w-[400px] h-[400px] rounded-full opacity-25 blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, transparent 70%)' }}
        />


        {/* ── LEFT content | RIGHT hero image ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

          {/* LEFT */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Vendor Payments</span>
            </motion.div>

            <h1 className="fontheading text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight text-white mb-6">
              Efficient{' '}
              <span className="text-emerald-400">Vendor Payments</span>
              <br />
              with Rupeeflow
            </h1>

            <p className="text-gray-400 max-w-xl text-base md:text-lg fontbody2 leading-relaxed mb-10">
              Transform your vendor payments with a single click and get complete
              control with real-time updates. NEFT, RTGS, IMPS, UPI, all in one place.
            </p>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-8 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {[
                { value: '< 2s', label: 'Settlement' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="fontheading text-2xl text-emerald-400">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* <Link
                href="#"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                Start Paying Today
              </Link> */}
            </motion.div>
          </motion.div>

          {/* RIGHT: Hero image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="w-full max-w-[500px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/vendor-payments/vendorHeroo.jpeg"
                alt="Vendor Payments Dashboard"
                width={560}
                height={480}
                className="w-full h-auto"
                style={{ mixBlendMode: 'multiply' }}
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── WHY RUPEEFLOW FOR VENDOR PAYMENTS ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: Man holding laptop image */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full max-w-[420px]">
                <Image
                  src="/images/vendor-payments/menholdiglaptop.png"
                  alt="Vendor payments made easy"
                  width={420}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right: Text content */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900 mb-6">
                Why Rupeeflow for <span className="text-emerald-500">Vendor Payments?</span>
              </h2>
              <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-8 max-w-xl">
                Rupeeflow simplifies vendor payment management for businesses of all sizes.
                From automated bulk transfers to real-time tracking, our platform ensures
                every payment is accurate, on time, and fully reconciled.
              </p>

              <div className="space-y-5">
                {[
                  { Icon: CheckIcon, title: 'One-Click Bulk Payments', desc: 'Pay hundreds of vendors simultaneously with a single upload.' },
                  { Icon: LightingFastIcon, title: 'Lightning-Fast Transfers', desc: 'Process payments via IMPS, NEFT, RTGS, or UPI in seconds.' },
                  { Icon: SafeGuardIcon, title: 'Enterprise-Grade Security', desc: 'ISO 27001 compliant with multi-layer encryption and fraud protection.' },
                ].map(({ Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <Icon className="w-10 h-10 shrink-0" />
                    <div>
                      <h4 className="fontheading text-base text-gray-900">{title}</h4>
                      <p className="text-sm text-gray-500 fontbody2 mt-1">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── POWERFUL VENDOR PAYMENT FEATURES ── */}
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
              Powerful <span className="text-emerald-500">Vendor Payment</span> Features
            </h2>
          </motion.div>

          <div className="space-y-24">

            {/* 1. Pay Instantly — text left, mockup right */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <h3 className="fontheading text-xl md:text-2xl text-gray-900 mb-4">Pay Instantly via Multiple Channels</h3>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Disburse vendor payments through NEFT, RTGS, IMPS, or UPI with just a few clicks.
                  Rupeeflow ensures your payments reach vendors instantly, reducing delays and
                  strengthening business relationships.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              <div className="lg:w-[45%] flex justify-center">
                <PayChannelsMockup />
              </div>
            </motion.div>

            {/* 2. Automated Invoicing & Approvals — mockup left, text right */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <h3 className="fontheading text-xl md:text-2xl text-gray-900 mb-4">Automated Invoicing & Approvals</h3>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Streamline your accounts payable with automated invoice processing and configurable
                  maker-checker approval workflows. Reduce manual effort and ensure compliance
                  with every vendor payment.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              <div className="lg:w-[45%] flex justify-center">
                <InvoiceApprovalMockup />
              </div>
            </motion.div>

            {/* 3. Live Payment Tracking — text left, mockup right */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <h3 className="fontheading text-xl md:text-2xl text-gray-900 mb-4">Live Payment Tracking</h3>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Track every vendor payment in real time from initiation to settlement. Get instant
                  notifications on payment status, failed transactions, and successful settlements
                  to maintain complete visibility over your outflows.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              <div className="lg:w-[45%] flex justify-center">
                <LiveTrackingMockup />
              </div>
            </motion.div>

            {/* 4. Instant Reconciliation — mockup left, text right */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <h3 className="fontheading text-xl md:text-2xl text-gray-900 mb-4">Instant Reconciliation</h3>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Automatically match vendor payments with invoices and purchase orders in real time.
                  Eliminate manual reconciliation effort, reduce errors, and close your books faster
                  with Rupeeflow&apos;s smart reconciliation engine.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </div>
              <div className="lg:w-[45%] flex justify-center">
                <ReconciliationMockup />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── EVERYTHING YOU NEED — Feature Grid ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Everything You Need for <span className="text-emerald-500">Vendor Payments</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: CardsIcon, title: 'Card Payments', desc: 'Pay vendors via credit or debit cards with secure tokenized transactions.' },
              { Icon: LightingFastIcon, title: 'Lightning-Fast Payouts', desc: 'Process vendor payments in under 2 seconds via IMPS for instant settlements.' },
              { Icon: ReconcileIcon, title: 'Smart Reconciliation', desc: 'Auto-match payments with invoices and generate settlement reports instantly.' },
              { Icon: SecurityIcon, title: 'Advanced Security', desc: '256-bit encryption, ISO 27001 compliance, and multi-layer fraud protection.' },
              { Icon: ReportsIcon, title: 'Detailed Reports', desc: 'Generate comprehensive payout reports with transaction-level detail and analytics.' },
              { Icon: ColoredSettingIcon, title: 'Customizable Workflows', desc: 'Configure approval hierarchies, payment schedules, and notification rules.' },
              { Icon: WebIcon, title: 'Global Payouts', desc: 'Pay international vendors with multi-currency support and competitive FX rates.' },
              { Icon: SafeGuardIcon, title: 'Fraud Protection', desc: 'AI-powered fraud detection safeguards every transaction against unauthorized access.' },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Icon className="w-12 h-12 mb-5" />
                <h3 className="fontheading text-lg text-gray-900 mb-3">{title}</h3>
                <p className="text-sm text-gray-500 fontbody2 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <VendorPaymentsFaq />
    </div>
  )
}
