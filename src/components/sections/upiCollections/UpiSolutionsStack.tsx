'use client'

import Link from 'next/link'

const solutions = [
  {
    id: 1,
    label: 'UPI Intent Flow',
    description:
      'Make UPI payments faster for your customers by automatically opening their preferred UPI app. Rupeeflow supports intent, collect, and in-app flows for a seamless checkout experience.',
  },
  {
    id: 2,
    label: 'Dynamic QR Code',
    description:
      'Create and show dynamic QR codes on your website or softPOS app with our APIs, enabling quick and easy payments for your customers.',
  },
  {
    id: 3,
    label: 'Static QR Code',
    description:
      'Simplify offline UPI payment collections by generating QR codes directly from your desktop or softPOS app.',
  },
  {
    id: 4,
    label: 'Virtual UPI ID',
    description:
      'Generate unique UPI IDs for each payer, automatically reconcile payments from various customers, and allow users to pay without manually entering the amount.',
  },
  {
    id: 5,
    label: 'UPI AutoPay',
    description:
      'Automate recurring payments up to \u20B915,000 with a one-time UPI mandate and streamline your subscription collections.',
  },
]

export default function UpiSolutionsStack() {
  return (
    <section className="relative py-24 bg-[#f0f0f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
            Powerful <span className="text-emerald-500">UPI Payment</span> Solutions
          </h2>
        </div>

        {/* Stacking cards container */}
        <div className="relative">
          {solutions.map((item, index) => (
            <div
              key={item.id}
              className="sticky mb-6"
              style={{ top: `${100 + index * 30}px` }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10">
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                  {/* Left: Icon + Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Settings gear icon */}
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="fontheading text-xl md:text-2xl text-gray-900">{item.label}</h3>
                    </div>

                    <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                      {item.description}
                    </p>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                    >
                      Get Started
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Right: Image placeholder */}
                  <div className="lg:w-[40%] flex justify-center">
                    <div className="w-full max-w-[340px] h-[240px] bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center">
                      <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
