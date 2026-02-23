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
    <section className="relative py-24 bg-[#f0f0f0]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
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
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <div className="flex flex-col lg:flex-row items-stretch">

                  {/* Left: Text */}
                  <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
                    {/* Number badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-8 h-8 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="fontheading text-xl md:text-2xl text-gray-900">{item.label}</h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-8 max-w-lg">
                      {item.description}
                    </p>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors self-start"
                    >
                      Get Started
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Right: Real image */}
                  <div className="lg:w-[45%] relative h-[260px] lg:h-[320px] shrink-0 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 10 + index, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                    </motion.div>

                    {/* Subtle label badge */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold text-gray-800">{item.label}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
