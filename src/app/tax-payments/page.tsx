'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TaxPaymentsFaq from '@/components/sections/taxPayments/TaxPaymentsFaq'

export default function TaxPaymentsPage() {
  return (
    <div className="w-full relative">

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 md:py-32 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: Text */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="text-emerald-500 text-sm fontheading tracking-wide">
                GST Challan Payment
              </span>
              <h1 className="fontheading text-2xl sm:text-3xl md:text-[2.3rem] lg:text-[2.8rem] leading-tight text-gray-900 mt-4">
                Pay Your GST On Time
                <br />
                with Confidence
              </h1>
              <p className="mt-6 text-gray-500 text-base md:text-lg fontbody2 leading-relaxed max-w-lg">
                Make sure every online GST payment is completed on time through
                a secure and streamlined process that offers full control and clear
                visibility at every step.
              </p>

              {/* Stats strip */}
              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  { value: '100%', label: 'Govt. Authorised' },
                  { value: 'Instant', label: 'CIN Generation' },
                  { value: '₹0', label: 'Setup Fee' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="fontheading text-xl text-emerald-600">{s.value}</p>
                    <p className="text-xs text-gray-500 fontbody2">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                  Get Started
                </Link> */}
              </div>
            </motion.div>

            {/* Right: Hero image with floating cards */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="relative w-full max-w-[480px]">

                {/* Main hero image */}
                <div className="relative w-full h-[460px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/gst-challan/heroboy.png"
                    alt="GST Challan Payment"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                  {/* Subtle overlay to blend bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f4f8fb]/60 to-transparent" />
                </div>

                {/* Floating card: Processing Amount */}
                <motion.div
                  className="absolute top-4 right-[-10px] bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 fontbody2">Processing Amount</p>
                    <p className="text-sm fontheading text-gray-900">₹12,000</p>
                  </div>
                </motion.div>

                {/* Floating card: GST Challan */}
                <motion.div
                  className="absolute top-20 right-[-20px] bg-white rounded-xl shadow-lg px-4 py-3 w-[200px]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs fontheading text-gray-900">GST Challan</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-2 bg-emerald-200 rounded-full" />
                    <div className="flex-1 h-2 bg-emerald-400 rounded-full" />
                    <div className="flex-1 h-2 bg-emerald-300 rounded-full" />
                  </div>
                </motion.div>

                {/* Floating card: Payment Options */}
                <motion.div
                  className="absolute bottom-12 left-[-20px] bg-white rounded-xl shadow-lg px-5 py-4 w-[240px]"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs fontheading text-gray-900">Payment Options</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-[8px] fontheading text-emerald-600">₹</span>
                      </div>
                      <div>
                        <p className="text-[9px] text-gray-500 fontbody2">Total Amount</p>
                        <p className="text-xs fontheading text-gray-900">₹12,000</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['VISA', 'Airtel', 'HDFC', 'MC', 'RuPay', 'UPI', 'Simpl'].map((m) => (
                      <div key={m} className="w-8 h-5 bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-[6px] text-gray-500 fontbody2">{m}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW GST PAYMENT WORKS ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              How <span className="text-emerald-500">GST Payment</span> Works with Rupeeflow
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Steps */}
            <div className="flex-1 space-y-8 w-full max-w-lg">
              {[
                { n: '1', title: 'Generate GST Challan', desc: 'Create your GST challan directly from the Rupeeflow dashboard with pre-filled GSTIN details.' },
                { n: '2', title: 'Choose Payment Method', desc: 'Pay via net banking, debit card, credit card, UPI, or NEFT/RTGS — whichever suits you best.' },
                { n: '3', title: 'Confirm & Pay', desc: 'Review the challan details, verify the amount, and complete the payment securely.' },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                    <span className="fontheading text-emerald-500 text-sm">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">{step.desc}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 -ml-6">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <span className="fontheading text-emerald-500 text-sm">4</span>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Get Instant Confirmation</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Receive an instant payment receipt with CIN number for your records and GST portal update.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get started
                </Link> */}
              </div>
            </div>

            {/* Right: GST Challan Receipt Card */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="w-full max-w-[420px] bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">

                {/* Challan header */}
                <div className="bg-emerald-600 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-200 text-[10px] fontbody2 uppercase tracking-wider">GST Payment Receipt</p>
                      <p className="text-white fontheading text-base mt-0.5">Challan #GST-2026-0142</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Challan body */}
                <div className="px-6 py-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 fontbody2">GSTIN</span>
                    <span className="text-xs font-semibold text-gray-800 fontheading">29AABCT1332L1ZD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 fontbody2">Tax Period</span>
                    <span className="text-xs font-semibold text-gray-800 fontheading">January 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 fontbody2">Filing Type</span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">GSTR-3B</span>
                  </div>

                  <div className="h-px bg-gray-100" />

                  {/* Tax breakdown */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'CGST', amount: '₹12,250' },
                      { label: 'SGST', amount: '₹12,250' },
                      { label: 'IGST', amount: '₹8,000' },
                    ].map((tax) => (
                      <div key={tax.label} className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-[10px] text-gray-500 fontbody2">{tax.label}</p>
                        <p className="text-sm font-bold text-gray-900 mt-0.5 fontheading">{tax.amount}</p>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-gray-100" />

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 fontbody2">Total Amount</span>
                    <span className="text-lg font-bold text-emerald-600 fontheading">₹32,500</span>
                  </div>

                  {/* CIN confirmation */}
                  <div className="bg-emerald-50 rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 fontbody2">CIN Number</p>
                      <p className="text-xs font-bold text-gray-800 fontheading tracking-wide">SBIN026070100012345</p>
                    </div>
                    <button className="ml-auto text-[10px] text-emerald-600 font-semibold border border-emerald-300 rounded-full px-2.5 py-0.5">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY RUPEEFLOW FOR GST PAYMENTS ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Why Rupeeflow for <span className="text-emerald-500">GST Payments?</span>
            </h2>
          </div>

          <div className="space-y-24">

            {/* 1. Never Miss a GST Deadline */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Never Miss a GST Deadline</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Set up automated reminders and scheduled payments to ensure your GST challans are
                  always paid on time. Avoid late fees, penalties, and interest charges with Rupeeflow&apos;s
                  smart scheduling and notification system.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* Calendar reminder card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  {/* Calendar header */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm fontheading text-gray-800">February 2026</h4>
                    <span className="text-[11px] bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full font-semibold">Due: Feb 20</span>
                  </div>
                  {/* Day labels */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                      <span key={i} className="text-[10px] text-gray-400 font-medium py-1">{d}</span>
                    ))}
                  </div>
                  {/* Date cells - partial month starting Thu */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-4">
                    {[null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map((d, i) => (
                      <div
                        key={i}
                        className={`h-7 flex items-center justify-center rounded-full text-[11px] font-medium
                          ${d === 20 ? 'bg-red-500 text-white font-bold' : ''}
                          ${d === 26 ? 'bg-emerald-500 text-white font-bold' : ''}
                          ${d && d !== 20 && d !== 26 ? 'text-gray-600 hover:bg-gray-100' : ''}
                          ${!d ? '' : ''}
                        `}
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                  {/* Reminder items */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 bg-red-50 rounded-xl px-3 py-2.5">
                      <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                      <div className="flex-1">
                        <p className="text-[11px] font-semibold text-gray-800 fontheading">GST Filing Due</p>
                        <p className="text-[10px] text-gray-500 fontbody2">Feb 20 • GSTR-3B</p>
                      </div>
                      <span className="text-[10px] text-red-600 font-semibold">2 days</span>
                    </div>
                    <div className="flex items-center gap-3 bg-emerald-50 rounded-xl px-3 py-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <div className="flex-1">
                        <p className="text-[11px] font-semibold text-gray-800 fontheading">Auto-Payment Scheduled</p>
                        <p className="text-[10px] text-gray-500 fontbody2">Feb 26 • ₹32,500</p>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-semibold">Set ✓</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 2. Multiple Payment Options */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Multiple Payment Options</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Pay your GST using credit cards, debit cards, net banking, UPI, or NEFT/RTGS. Rupeeflow
                  supports all major payment methods so you can choose the most convenient option for
                  your business without any restrictions.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* Payment methods card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  <p className="text-xs text-gray-500 fontbody2 mb-4">Choose Payment Method</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: 'UPI', sub: 'GPay · PhonePe · BHIM', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'bg-purple-50 border-purple-100 text-purple-700' },
                      { label: 'Net Banking', sub: 'SBI · HDFC · ICICI', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'bg-blue-50 border-blue-100 text-blue-700' },
                      { label: 'Credit / Debit', sub: 'Visa · MC · RuPay', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', color: 'bg-orange-50 border-orange-100 text-orange-700' },
                      { label: 'NEFT / RTGS', sub: 'Bank Transfer', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', color: 'bg-emerald-50 border-emerald-100 text-emerald-700' },
                    ].map((m) => (
                      <div key={m.label} className={`border rounded-xl p-3.5 flex flex-col gap-2 ${m.color}`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={m.icon} />
                        </svg>
                        <div>
                          <p className="text-xs font-bold fontheading">{m.label}</p>
                          <p className="text-[10px] opacity-70 fontbody2">{m.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500 fontbody2">Total GST Due</span>
                    <span className="text-base font-bold text-emerald-600 fontheading">₹48,500</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 3. Instant CIN Generation */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Instant CIN Generation</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Get your Challan Identification Number (CIN) instantly after successful payment.
                  Download digital receipts and maintain a complete audit trail for all your GST
                  transactions directly from the Rupeeflow dashboard.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* CIN receipt card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-emerald-500 px-5 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm fontheading">Payment Successful</p>
                      <p className="text-emerald-100 text-[10px] fontbody2">Feb 26, 2026 · 11:42 AM</p>
                    </div>
                  </div>
                  {/* CIN details */}
                  <div className="p-5 space-y-3">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                      <p className="text-[10px] text-gray-500 fontbody2 mb-1">Challan Identification Number (CIN)</p>
                      <p className="text-sm font-bold text-gray-900 fontheading tracking-widest">SBIN026070100012345</p>
                    </div>
                    {[
                      { label: 'Bank Reference', value: 'REF26078452190' },
                      { label: 'Payment Mode', value: 'Net Banking · SBI' },
                      { label: 'Amount Paid', value: '₹32,500' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                        <span className="text-xs text-gray-500 fontbody2">{row.label}</span>
                        <span className="text-xs font-semibold text-gray-800 fontheading">{row.value}</span>
                      </div>
                    ))}
                    <button className="w-full mt-2 flex items-center justify-center gap-2 bg-gray-900 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Receipt (PDF)
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 4. Secure & Compliant */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Secure & Compliant Platform</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Every GST payment through Rupeeflow is protected with bank-grade encryption and
                  processed through RBI-authorized payment channels. Your financial data stays secure
                  with ISO 27001 compliance and multi-factor authentication.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* Security compliance card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm fontheading text-gray-900">Enterprise Security</p>
                      <p className="text-[11px] text-gray-500 fontbody2">All compliance standards met</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { badge: 'ISO 27001', level: 'Certified', color: 'bg-blue-50 border-blue-200', badge_color: 'text-blue-700' },
                      { badge: 'RBI Authorized', level: 'Payment Gateway', color: 'bg-emerald-50 border-emerald-200', badge_color: 'text-emerald-700' },
                      { badge: '256-bit SSL', level: 'End-to-End Encrypted', color: 'bg-purple-50 border-purple-200', badge_color: 'text-purple-700' },
                      { badge: 'ISO 27001', level: 'Info Security Mgmt', color: 'bg-orange-50 border-orange-200', badge_color: 'text-orange-700' },
                    ].map((c) => (
                      <div key={c.badge} className={`border rounded-xl p-3 ${c.color}`}>
                        <p className={`text-xs font-bold fontheading ${c.badge_color}`}>{c.badge}</p>
                        <p className="text-[10px] text-gray-500 fontbody2 mt-0.5">{c.level}</p>
                      </div>
                    ))}
                  </div>

                  {/* MFA indicator */}
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <div
                          key={n}
                          className={`w-6 h-8 rounded flex items-center justify-center text-xs font-bold ${n <= 4 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-400'}`}
                        >
                          {n <= 4 ? '•' : '_'}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-800 fontheading">Multi-Factor Auth</p>
                      <p className="text-[10px] text-gray-500 fontbody2">OTP Verified</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GST PAYMENT FEATURES GRID ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Rupeeflow <span className="text-emerald-500">Tax Payment</span> Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Auto Challan Generation</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Generate GST challans with pre-filled GSTIN and tax details in seconds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Payment Scheduling</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Schedule recurring tax payments with automated reminders before due dates.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Tax Analytics Dashboard</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Track all tax payments, view history, and download reports from one dashboard.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Bank-Grade Security</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                256-bit encryption with ISO 27001 compliance for every tax transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <TaxPaymentsFaq />
    </div>
  )
}
