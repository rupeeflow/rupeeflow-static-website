'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, MessageCircle } from 'lucide-react'
import Image from 'next/image'

/* ─── Animated Mockups ─────────────────────────────── */

function SendMoneyMockup() {
  const messages = [
    { from: 'user', text: 'Kiran ko 5000 bhejo', delay: 0.3 },
    { from: 'bot', text: 'Processing transfer...', delay: 0.8 },
    { from: 'bot', text: '✅ ₹5,000 sent to Kiran\nTransaction ID: TXN789456\nCompleted in 2 seconds', delay: 1.5 }
  ]

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#25D366]/20">
        {/* WhatsApp header */}
        <div className="bg-[#128C7E] p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1">
            <Image src="/rupeeflow.png" alt="RupeeFlow" width={32} height={32} className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-jakarta text-white font-semibold text-sm">RupeeFlow Banking</h4>
            <p className="font-inter text-white/70 text-xs">● Online</p>
          </div>
        </div>

        {/* Chat messages */}
        <div className="bg-[#ECE5DD] p-2 space-y-3 min-h-[380px]">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: message.from === 'user' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: message.delay }}
              className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`p-3 rounded-2xl max-w-[80%] ${
                message.from === 'user'
                  ? 'bg-[#DCF8C6] rounded-br-md'
                  : 'bg-white rounded-bl-md shadow-sm'
              }`}>
                <p className="font-inter text-sm text-gray-800 whitespace-pre-line">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckBalanceMockup() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-[#25D366]/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
            <Image src="/hero/check-balance.svg" alt="Check Balance" width={28} height={28} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-inter">Account Balance</p>
            <p className="text-2xl font-jakarta font-bold text-gray-900">₹45,230</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600 font-inter">Available Balance</span>
            <span className="text-sm font-semibold text-gray-900">₹45,230</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600 font-inter">Last Updated</span>
            <span className="text-sm font-semibold text-emerald-600">Just now</span>
          </div>
        </div>

        <motion.div
          className="mt-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs text-white/80 font-inter mb-1">Recent Transactions</p>
          <div className="space-y-2">
            {[
              { label: 'MSEDCL Bill', amount: '-₹1,240' },
              { label: 'to Kiran', amount: '-₹3,000' },
              { label: 'Salary Credit', amount: '+₹10,000' }
            ].map((txn, i) => (
              <motion.div
                key={i}
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <span className="text-xs text-white font-inter">{txn.label}</span>
                <span className="text-xs text-white font-semibold">{txn.amount}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function PayBillsMockup() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      {/* Bill card */}
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-[#25D366]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
              <Image src="/hero/pay-bills.svg" alt="Pay Bills" width={28} height={28} />
            </div>
            <div>
              <p className="text-sm font-jakarta font-semibold text-gray-900">MSEDCL</p>
              <p className="text-xs text-gray-500 font-inter">Electricity Bill</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full">Due</span>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 mb-4">
          <p className="text-xs text-gray-500 font-inter mb-1">Amount Due</p>
          <p className="text-3xl font-jakarta font-bold text-gray-900">₹1,240</p>
          <p className="text-xs text-gray-500 font-inter mt-1">Due Date: 15 Jan 2026</p>
        </div>

        <motion.button
          className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-jakarta font-semibold py-3 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Pay Now
        </motion.button>
      </motion.div>

      {/* Success indicator */}
      <motion.div
        className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-jakarta font-semibold text-emerald-900">Payment Successful</p>
          <p className="text-xs text-emerald-700 font-inter">Bill paid in 3 seconds</p>
        </div>
      </motion.div>
    </div>
  )
}

function GetCreditMockup() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl shadow-2xl p-6 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-2xl">🎉</span>
          </div>
          <div>
            <p className="text-sm font-inter opacity-90">Loan Approved!</p>
            <p className="text-3xl font-jakarta font-bold">₹2,00,000</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-5 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-inter opacity-90">Interest Rate</span>
            <span className="text-sm font-semibold">12% p.a.</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-inter opacity-90">Tenure</span>
            <span className="text-sm font-semibold">12 months</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-inter opacity-90">EMI</span>
            <span className="text-sm font-semibold">₹17,770/month</span>
          </div>
        </div>

        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <p className="text-sm font-inter">Amount will be credited in 24 hours</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

function VoicePaymentsMockup() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-6 border-2 border-[#25D366]/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center mb-6">
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-4xl">🎤</span>
          </motion.div>
        </div>

        <div className="text-center mb-6">
          <p className="text-lg font-jakarta font-semibold text-gray-900 mb-2">Voice Banking Active</p>
          <p className="text-sm text-gray-500 font-inter">Speak in your preferred language</p>
        </div>

        {/* Waveform animation */}
        <div className="flex items-center justify-center gap-1 mb-6 h-16">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-[#25D366] rounded-full"
              animate={{
                height: ['20%', '100%', '20%'],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Language selector */}
        <div className="grid grid-cols-3 gap-2">
          {['Hindi', 'English', 'Telugu', 'Tamil', 'Marathi', 'Kannada'].map((lang, i) => (
            <motion.div
              key={lang}
              className={`py-2 px-3 rounded-xl text-center text-xs font-inter font-semibold ${
                i === 0 ? 'bg-[#25D366] text-white' : 'bg-gray-100 text-gray-600'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.05 }}
            >
              {lang}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-6 text-center text-xs text-gray-500 font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Supports 12 Indian languages
        </motion.p>
      </motion.div>
    </div>
  )
}

/* ─── Feature config ─────────────────────────────── */
const features = [
  {
    id: 'send-money',
    label: 'Send Money',
    description:
      'Transfer money to anyone instantly via UPI, bank transfer, or WhatsApp Pay. Just type the recipient name and amount in your preferred language. Transactions complete in seconds.',
    Mockup: SendMoneyMockup,
  },
  {
    id: 'check-balance',
    label: 'Check Balance',
    description:
      'View your account balance, transaction history, and spending insights anytime with a simple message. Get real-time updates on your financial status without opening any app.',
    Mockup: CheckBalanceMockup,
  },
  {
    id: 'pay-bills',
    label: 'Pay Bills',
    description:
      'Pay electricity, water, mobile, DTH, and other bills directly through WhatsApp. Set reminders for due dates and never miss a payment. Get instant confirmation receipts.',
    Mockup: PayBillsMockup,
  },
  {
    id: 'get-credit',
    label: 'Get Credit',
    description:
      'Apply for instant business credit up to ₹50L with AI-powered approval in minutes. Flexible repayment options and competitive interest rates. No paperwork, no branch visits.',
    Mockup: GetCreditMockup,
  },
  {
    id: 'voice-payments',
    label: 'Voice Payments',
    description:
      'Bank using voice notes in Hindi, Telugu, Tamil, or any of 12 supported languages. Perfect for users who prefer speaking over typing. Natural language processing understands your intent.',
    Mockup: VoicePaymentsMockup,
  },
]

/* ─── Panel background per feature ─────────────── */
const panelBg: Record<string, string> = {
  'send-money': 'from-[#E8F5E9] to-[#C8E6C9]',
  'check-balance': 'from-[#E0F2F1] to-[#B2DFDB]',
  'pay-bills': 'from-[#FFF9C4] to-[#FFF59D]',
  'get-credit': 'from-[#E1F5FE] to-[#B3E5FC]',
  'voice-payments': 'from-[#F3E5F5] to-[#E1BEE7]',
}

/* ─── Main Section ──────────────────────────────── */
export default function WhatsAppBankingInteractive() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = features[activeIndex]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
        >
          <h2 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            Everything You Need.{' '}
            <span className="text-[#25D366]">Inside WhatsApp.</span>
          </h2>
          <p className="mt-4 text-gray-600 font-inter text-base md:text-lg max-w-2xl mx-auto">
            Complete banking experience without leaving your favorite messaging app. No downloads, no registrations.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Feature accordion ── */}
          <div className="lg:w-[44%] space-y-1">
            {features.map((feature, index) => {
              const isActive = activeIndex === index
              return (
                <div key={feature.id}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full flex items-center gap-4 py-4 text-left transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    {/* Circle indicator */}
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
                        isActive ? 'bg-[#25D366] shadow-[#25D366]/30' : 'bg-white border-2 border-gray-200'
                      }`}
                    >
                      <ChevronUp
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive ? 'text-white rotate-0' : 'text-[#25D366] rotate-180'
                        }`}
                      />
                    </span>

                    <span
                      className={`font-jakarta text-lg md:text-xl font-medium transition-colors duration-300 ${
                        isActive ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {feature.label}
                    </span>
                  </button>

                  {/* Expandable description */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-14 pb-4 pr-2">
                      {/* Animated underline */}
                      <motion.div
                        className="h-0.5 bg-[#25D366] rounded-full mb-3"
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '100%' : 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                      <p className="text-gray-600 font-inter text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < features.length - 1 && (
                    <div className="h-px bg-gray-200 ml-14" />
                  )}
                </div>
              )
            })}
          </div>

          {/* ── RIGHT: Animated panel ── */}
          <div className="w-[20%] lg:w-[32%] lg:sticky lg:top-24">
            <div className="relative w-full rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[410px] lg:min-h-[470px] border-2 border-gray-200 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className={`absolute inset-0 bg-gradient-to-br ${panelBg[active.id]} flex items-center justify-center`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <active.Mockup />
                </motion.div>
              </AnimatePresence>

              {/* Floating WhatsApp icon */}
              <motion.div
                className="absolute bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
