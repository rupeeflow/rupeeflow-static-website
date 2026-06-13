'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const solutions = [
  {
    id: 1,
    label: 'UPI Intent Flow',
    description:
      'Make UPI payments faster for your customers by automatically opening their preferred UPI app. Rupeeflow supports intent, collect, and in-app flows for a seamless checkout experience.',
    image: '/images/upi-collections/intentflow.png',
  },
  {
    id: 2,
    label: 'Dynamic QR Code',
    description:
      'Create and show dynamic QR codes on your website or softPOS app with our APIs, enabling quick and easy payments for your customers.',
    image: '/images/upi-collections/dynamicQr.jpeg',
  },
  {
    id: 3,
    label: 'Static QR Code',
    description:
      'Simplify offline UPI payment collections by generating QR codes directly from your desktop or softPOS app.',
    image: '/images/upi-collections/staticqr.png',
  },
  {
    id: 4,
    label: 'Virtual UPI ID',
    description:
      'Generate unique UPI IDs for each payer, automatically reconcile payments from various customers, and allow users to pay without manually entering the amount.',
    image: '/images/upi-collections/virtualId.jpeg',
  },
  {
    id: 5,
    label: 'UPI AutoPay',
    description:
      'Automate recurring payments up to ₹15,000 with a one-time UPI mandate and streamline your subscription collections.',
    image: '/images/upi-collections/secureT.png',
  },
]

export default function UpiSolutionsStack() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#f0f0f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
            Powerful <span className="text-emerald-500">UPI Payment</span> Solutions
          </h2>
        </motion.div>

        {/* Stacking cards */}
        <div className="relative">
          {solutions.map((item, index) => (
            <div
              key={item.id}
              className="sticky mb-6"
              style={{ top: `${96 + index * 28}px` }}
            >
              <motion.div
                className="bg-[var(--card)] rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <div className="flex flex-col lg:flex-row items-stretch">

                  {/* Left: Text */}
                  <div className="flex-1 flex flex-col justify-center p-5 sm:p-8 md:p-12">
                    {/* Number badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-8 h-8 rounded-full bg-emerald-500 text-[var(--foreground)] text-xs font-bold flex items-center justify-center shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="fontheading text-xl md:text-2xl text-gray-900">{item.label}</h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-5 sm:mb-8 max-w-lg">
                      {item.description}
                    </p>

                    {/* <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors self-start"
                    >
                      Get Started
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link> */}
                  </div>

                  {/* Right: image or JSX visual */}
                  {item.id === 4 ? (
                    /* ── Virtual UPI ID — animated card stack ── */
                    <div className="lg:w-[45%] relative h-[260px] lg:h-[320px] shrink-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-gray-100 overflow-hidden">
                      {/* Soft radial glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_70%)]" />

                      <div className="relative w-[290px] px-2">
                        {/* Third card — peek from bottom */}
                        <motion.div
                          className="absolute -bottom-2 left-6 right-0 h-[68px] bg-[var(--card)] rounded-2xl border border-gray-200 shadow-sm opacity-50"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                        />

                        {/* Second card */}
                        <motion.div
                          className="relative z-10 bg-[var(--card)] rounded-2xl border border-gray-100 shadow-md p-4 mb-3"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.333 0-10 1.667-10 5v1h20v-1c0-3.333-6.667-5-10-5z"/>
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Your Unique UPI ID</p>
                              <p className="text-sm font-bold text-gray-900 tracking-wider">********1302@ybl</p>
                              <p className="text-[10px] text-gray-400 mt-0.5">Displayed on home</p>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <span className="text-gray-400 text-xs font-bold tracking-widest">••</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* First card — primary, topmost */}
                        <motion.div
                          className="relative z-20 bg-[var(--card)] rounded-2xl border border-gray-100 shadow-xl p-4"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.333 0-10 1.667-10 5v1h20v-1c0-3.333-6.667-5-10-5z"/>
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Your Unique UPI ID</p>
                              <p className="text-sm font-bold text-gray-900 tracking-wider">********9241@ybl</p>
                              <p className="text-[10px] text-gray-400 mt-0.5">Displayed on home</p>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <span className="text-gray-400 text-xs font-bold tracking-widest">••</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <div className="lg:w-[45%] relative h-[220px] sm:h-[260px] lg:h-[320px] shrink-0 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 overflow-hidden"
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 10 + index, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                          />
                        </div>
                      </motion.div>

                      {/* Subtle label badge */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <div className="flex items-center gap-2 bg-[var(--card)] backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-xs font-semibold text-gray-800">{item.label}</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
