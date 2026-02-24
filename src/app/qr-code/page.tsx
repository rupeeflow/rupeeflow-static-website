'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import QrSmallIcon from '../../../public/icons/qr-collections/QrSmallIcon'
import UPIStripIcon from '../../../public/icons/upi-collections/UpiStripIcon'
import Image from "next/image"

// Animated QR Code Generator Component
function AnimatedQRGenerator() {
  return (
    <motion.div 
      className="w-full h-full bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl p-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* QR Code Image */}
      <motion.div
        className="w-32 h-32 bg-white rounded-lg shadow-lg mb-4 flex items-center justify-center border-2 border-gray-200"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img src="/home/qr-code.png" alt="QR Code" className="w-full h-full object-contain rounded-lg" />
      </motion.div>
      
      {/* Generate Button Animation */}
      <motion.button
        className="px-6 py-2 bg-emerald-500 text-white rounded-full text-sm font-semibold"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Generate QR
      </motion.button>
      
      {/* Success Message */}
      <motion.div
        className="mt-3 text-xs text-green-600 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✓ QR Code Generated Successfully!
      </motion.div>
    </motion.div>
  )
}

// Animated Brand Showcase Component
function AnimatedBrandShowcase() {
  return (
    <motion.div 
      className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Rupeeflow Logo Animation */}
      <motion.div
        className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-white font-bold text-xl">RF</span>
      </motion.div>
      
      {/* QR Code Image with Brand */}
      <motion.div
        className="w-32 h-32 bg-white rounded-lg shadow-md mb-4 flex items-center justify-center border-2 border-gray-200"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img src="/home/qr-code.png" alt="Branded QR Code" className="w-full h-full object-contain rounded-lg" />
      </motion.div>
      
      <motion.div
        className="mt-3 text-xs text-gray-600 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Rupeeflow + QR Code
      </motion.div>
    </motion.div>
  )
}

// Animated Amount Types Component
function AnimatedAmountTypes() {
  const [showFixed, setShowFixed] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFixed(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <motion.div 
      className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Amount Display */}
      <motion.div
        className="w-32 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-4"
        key={showFixed ? 'fixed' : 'dynamic'}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-2xl font-bold text-gray-800">
          {showFixed ? '₹499' : '₹____'}
        </span>
      </motion.div>
      
      {/* QR Code Placeholder */}
      <motion.div
        className="w-32 h-32 bg-white rounded-lg shadow-md mb-4 flex items-center justify-center border-2 border-dashed border-gray-400"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <span className="text-2xl text-gray-400">QR</span>
          </div>
          <p className="text-xs text-gray-500 font-medium">Amount QR Code</p>
          <p className="text-xs text-gray-400">(Add your amount QR image)</p>
        </div>
      </motion.div>
      
      {/* Type Indicator */}
      <motion.div
        className="text-xs text-gray-600 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {showFixed ? 'Fixed Amount' : 'Dynamic Amount'}
      </motion.div>
    </motion.div>
  )
}

// Animated Dashboard Component
function AnimatedDashboard() {
  return (
    <motion.div 
      className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="mb-3">
        <div className="h-2 bg-gray-300 rounded w-20 mb-2" />
        <div className="h-1 bg-gray-200 rounded w-16" />
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <motion.div
          className="bg-white p-2 rounded-lg shadow-sm"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        >
          <div className="text-xs text-green-600 font-bold">₹12,450</div>
          <div className="text-xs text-gray-500">Today</div>
        </motion.div>
        <motion.div
          className="bg-white p-2 rounded-lg shadow-sm"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <div className="text-xs text-blue-600 font-bold">45</div>
          <div className="text-xs text-gray-500">Transactions</div>
        </motion.div>
      </div>
      
      {/* Chart Animation */}
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <div className="flex items-end justify-between h-12">
          {[40, 60, 30, 80, 50, 70, 45].map((height, i) => (
            <motion.div
              key={i}
              className="w-2 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
      
      {/* Live Indicator */}
      <motion.div
        className="mt-2 flex items-center gap-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        <span className="text-xs text-gray-600">Rupeeflow Live Tracking</span>
      </motion.div>
    </motion.div>
  )
}

// Animated Security Shield Component
function AnimatedSecurityShield() {
  return (
    <motion.div 
      className="w-full h-full bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Shield Animation */}
      <motion.div
        className="w-20 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-t-full relative mb-4 shadow-lg"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Lock Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-6 bg-white rounded-t-lg relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-white rounded-full" />
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
        
        {/* Rupeeflow Logo */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-red-500 font-bold text-xs">RF</span>
          </div>
        </div>
      </motion.div>
      
      {/* Encryption Lines */}
      <div className="flex gap-1 mb-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-4 bg-gradient-to-t from-red-500 to-orange-500 rounded"
            animate={{ height: [16, 20, 16] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
      
      {/* Security Badge */}
      <motion.div
        className="px-3 py-1 bg-white rounded-full shadow-sm"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-red-600">Rupeeflow 256-bit SSL</span>
      </motion.div>
    </motion.div>
  )
}
export default function QrCodePage() {
  return (
    <div className="w-full relative">
      <section className="relative min-h-screen bg-[#020506] overflow-hidden">
        <div
          className="absolute -left-[100px] top-[10%] w-[400px] h-[400px] rounded-full opacity-50 blur-[120px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-[5%] top-[30%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, transparent 70%)',
          }}
        />

        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[5]">
          <UPIStripIcon className="w-full h-auto opacity-60" />
        </div>

        {/* Left QR icons — large + small, positioned at section level */}
        {/* <div className="absolute left-[3%] md:left-[5%] top-[28%] z-20 pointer-events-none">
          <QrSmallIcon className="w-[120px] md:w-[160px] h-auto opacity-90" />
        </div> */}
        {/* <div className="absolute left-[8%] md:left-[12%] top-[48%] z-20 pointer-events-none">
          <QrSmallIcon className="w-[70px] md:w-[100px] h-auto opacity-70" />
        </div> */}

        {/* Right QR icons — large + small, positioned at section level */}
        {/* <div className="absolute right-[3%] md:right-[5%] top-[28%] z-20 pointer-events-none">
          <QrSmallIcon className="w-[120px] md:w-[160px] h-auto opacity-90" />
        </div>
        <div className="absolute right-[8%] md:right-[12%] top-[48%] z-20 pointer-events-none">
          <QrSmallIcon className="w-[70px] md:w-[100px] h-auto opacity-70" />
        </div> */}

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-48 px-6">
          <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[4rem] leading-tight text-white">
            Seamless Payments with
            <br />
            <span className="text-emerald-400">UPI QR Code</span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-base md:text-lg fontbody2 leading-relaxed">
            Generate unique QR codes to collect payments via any UPI app while
            tracking each transaction for your business.
          </p>

          <div className="relative mt-12 pb-8">
            {/* CTA Button */}
            <div className="flex justify-center mb-12 relative z-30">
              <Link
                href="#"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                Start Accepting Payments
              </Link>
            </div>

            {/* Browser + Phone mockups */}
            <div className="relative max-w-5xl mr-auto ml-[-10%] md:ml-[9%]">

              {/* Browser window — Payment Details (using actual image), shifted left */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl w-[85%] md:w-[75%]">

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/qr-collections/QrCheckout.png"
                  alt="Payment Details with QR Code"
                  className="w-full h-auto"
                />
              </div>

              {/* Phone mockup — Chat with QR, overlapping right side of browser */}
              <div className="absolute right-[0%] md:right-[5%] top-[10%] w-[200px] md:w-[260px] z-20">
                <div className="bg-[#2a2a2a] rounded-[1.5rem] shadow-2xl overflow-hidden border-2 border-emerald-400">
                  {/* Chat header area */}
                  <div className="px-4 pt-5 pb-3">
                    {/* Chat bubbles */}
                    <div className="space-y-3">
                      {/* Customer message */}
                      <div className="flex justify-start">
                        <div className="flex items-start gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-gray-500 shrink-0 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
                          </div>
                          <div className="bg-white rounded-lg px-3 py-1.5 max-w-[140px]">
                            <p className="text-[8px] md:text-[9px] text-gray-700">
                              Thank you for your service greatly satisfied!
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Customer message 2 */}
                      <div className="flex justify-start">
                        <div className="ml-6">
                          <div className="bg-white rounded-lg px-3 py-1.5">
                            <p className="text-[8px] md:text-[9px] text-gray-700">
                              How can I pay?
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Business reply */}
                      <div className="flex justify-end">
                        <div className="flex items-start gap-1.5">
                          <div className="bg-white rounded-lg px-3 py-1.5 max-w-[140px]">
                            <p className="text-[8px] md:text-[9px] text-gray-700">
                              Glad you liked our work.
                            </p>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-gray-500 shrink-0 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* QR code shared in chat */}
                      <div className="flex justify-center py-2">
                        <div className="bg-gray-200 rounded-lg p-3 w-[100px] md:w-[120px]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/images/upi-collections/qr.png"
                            alt="QR Code in chat"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>

                      {/* Business reply with QR */}
                      <div className="flex justify-end pb-2">
                        <div className="flex items-start gap-1.5">
                          <div className="bg-white rounded-lg px-3 py-1.5">
                            <p className="text-[8px] md:text-[9px] text-gray-700">
                              Here&apos;s my QR
                            </p>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-gray-500 shrink-0 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCEPTING PAYMENTS VIA QR CODES ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Accepting Payments via{' '}
              <span className="text-emerald-500">QR Codes</span> was Never This
              Easy
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: 4 Steps */}
            <div className="flex-1 space-y-8 w-full max-w-lg">
              {/* Generate QR Code */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-500"
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
                <div>
                  <h3 className="fontheading text-lg text-gray-900">
                    Generate QR Code
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Use Rupeeflow dashboard or API to create a QR code for your
                    business.
                  </p>
                </div>
              </div>

              {/* Display and Share */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">
                    Display and Share
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Print it for your storefront, share it digitally, or include
                    it on invoices.
                  </p>
                </div>
              </div>

              {/* Accept Payments */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">
                    Accept Payments
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Customers scan the code using their preferred UPI app or
                    wallet.
                  </p>
                </div>
              </div>

              {/* Track and Reconcile */}
              <div className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 -ml-6">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">
                    Track and Reconcile
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Automatically match payments with orders and generate
                    detailed reports.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get started
                </Link>
              </div>
            </div>

            {/* Right: Image placeholder */}
            <div className="flex-1 flex justify-center">
  <div className="relative w-full max-w-[520px] h-[550px]  border border-gray-200 overflow-hidden bg-gray-100">
    <Image
      src="/home/Accept-payment-qr.png"
      alt="placeholder"
      fill
      className="fit-contain "
      sizes="(max-width: 768px) 90vw, 460px"
    />
  </div>
</div>
          </div>
        </div>
      </section>

      {/* ── WHY RUPEEFLOW FOR QR CODE PAYMENTS ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Why Rupeeflow for Collecting{' '}
              <span className="text-emerald-500">QR Code Payments?</span>
            </h2>
          </div>

          <div className="space-y-24">
            {/* 1. Generate QR Codes — icon+text left, placeholder right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                    Generate QR Codes for your Business in Seconds
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  With Rupeeflow QR codes, getting started is quick and easy.
                  Generate your unique QR codes instantly through our
                  user-friendly platform. No complicated processes or long wait
                  times—just a few clicks, and you&apos;re ready to accept
                  payments, boosting efficiency for your business operations.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px]">
                  <AnimatedQRGenerator />
                </div>
              </div>
            </div>

            {/* 2. Showcase your Brand — placeholder left, icon+text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
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
                    Showcase your Brand on Every QR Code
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Stand out by adding your business logo to every QR code. With
                  custom branding, you promote trust and professionalism and
                  reinforce your brand identity at every payment interaction.
                  It&apos;s a simple yet powerful way to make your business
                  memorable.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px]">
                  <AnimatedBrandShowcase />
                </div>
              </div>
            </div>

            {/* 3. Generate QR Codes for Fixed or Dynamic Amounts — icon+text left, placeholder right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    Generate QR Codes for Fixed or Dynamic Amounts
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Whether you need a QR code for a fixed price or a flexible
                  amount that customers can fill in, Rupeeflow has you covered.
                  Easily create static or dynamic QR codes tailored to your
                  business needs, giving your customers a seamless payment
                  experience.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px]">
                  <AnimatedAmountTypes />
                </div>
              </div>
            </div>

            {/* 4. Real-time Reconciliation — placeholder left, icon+text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    Real-time Reconciliation and Tracking of Financial
                    Transactions
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Stay on top of your business finances with Rupeeflow&apos;s
                  real-time transaction tracking. Our powerful dashboard
                  provides instant updates on payments, detailed reports, and
                  reconciliation tools, ensuring you always have clear insights
                  into your revenue streams for efficient financial management.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px]">
                  <AnimatedDashboard />
                </div>
              </div>
            </div>

            {/* 5. Industry Leading Encryption — icon+text left, placeholder right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">
                    Industry Leading Encryption and Compliance Standards
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Protect your business and customer data with Rupeeflow&apos;s
                  secure payment platform. Our QR codes are backed by advanced
                  encryption and compliance with global security standards,
                  giving you peace of mind and ensuring every transaction is
                  safe, reliable, and trustworthy.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px]">
                  <AnimatedSecurityShield />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RUPEEFLOW QR CODE FEATURES ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Rupeeflow{' '}
              <span className="text-emerald-500">QR Code Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bulk QR Code Generation */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg
                className="w-10 h-10 text-emerald-500 mb-5"
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
              <h3 className="fontheading text-lg text-gray-900 mb-3">
                Bulk QR Code Generation
              </h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Upload payment details in bulk using our dashboard to generate
                multiple QR codes instantly.
              </p>
            </div>

            {/* Custom Split Settlements */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg
                className="w-10 h-10 text-emerald-500 mb-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"
                />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">
                Custom Split Settlements
              </h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Define and automate revenue sharing across branches, franchises,
                or departments.
              </p>
            </div>

            {/* Real-Time Notifications */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg
                className="w-10 h-10 text-emerald-500 mb-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">
                Real-Time Notifications
              </h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Get instant updates on successful payments via email, SMS, or
                webhook notifications.
              </p>
            </div>

            {/* Advanced Analytics */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg
                className="w-10 h-10 text-emerald-500 mb-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">
                Advanced Analytics
              </h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Monitor performance metrics like daily transactions, total
                revenue, and settlement reports from a centralized dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}