'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const features = [
  {
    icon: '/hero/send-money.svg',
    delay: 0,
    title: 'Send Money',
    desc: 'Transfer money to anyone instantly via UPI, bank transfer, or WhatsApp Pay. Just type the amount and recipient name.',
  },
  {
    icon: '/hero/check-balance.svg',
    delay: 0.1,
    title: 'Check Balance',
    desc: 'View your account balance, transaction history, and spending insights anytime with a simple message.',
  },
  {
    icon: '/hero/pay-bills.svg',
    delay: 0.2,
    title: 'Pay Bills',
    desc: 'Pay electricity, water, mobile, DTH, and other bills directly through WhatsApp. Set reminders for due dates.',
  },
  {
    icon: '🎯',
    delay: 0.3,
    title: 'Get Credit',
    desc: 'Apply for instant business credit up to ₹50L. AI-powered approval in minutes with flexible repayment options.',
  },
]

// Continuous looping conversations with more messages
const continuousConversations = [
  // Conversation 1: Fetch Bill & Pay
  [
    { from: 'user', text: 'Hi', delay: 0.5 },
    { from: 'bot', text: 'Hello! How may I help you today? 😊', delay: 1.2 },
    { from: 'user', text: 'Bijli ka bill dikhao', delay: 2.5 },
    { from: 'bot', text: 'Fetching your bill...', delay: 3.2 },
    { from: 'bot', text: '💡 MSEDCL Bill\nAmount: ₹1,240\nDue Date: 15 Jan 2026\nConsumer No: 123456789', delay: 4.2 },
    { from: 'user', text: 'Pay kar do', delay: 5.5 },
    { from: 'bot', text: 'Processing payment...', delay: 6.2 },
    { from: 'bot', text: '✅ Bill paid successfully!\n₹1,240 paid to MSEDCL\nPayment ID: PAY789456123', delay: 7.2 }
  ],
  // Conversation 2: Transfer Money
  [
    { from: 'user', text: 'Hi', delay: 0.5 },
    { from: 'bot', text: 'Hello! How may I help you today? 😊', delay: 1.2 },
    { from: 'user', text: 'Kiran ko 3000 bhejo', delay: 2.5 },
    { from: 'bot', text: 'Processing transfer...', delay: 3.2 },
    { from: 'bot', text: '✅ ₹3,000 sent to Kiran\nUPI ID: kiran@paytm\nTransaction ID: TXN456789123\nCompleted in 2 seconds', delay: 4.5 },
    { from: 'user', text: 'Receipt bhejo', delay: 6 },
    { from: 'bot', text: '📧 Receipt sent to your email\nkiran@example.com', delay: 7 }
  ],
  // Conversation 3: Check Balance & Statement
  [
    { from: 'user', text: 'Hi', delay: 0.5 },
    { from: 'bot', text: 'Hello! How may I help you today? 😊', delay: 1.2 },
    { from: 'user', text: 'Balance check karo', delay: 2.5 },
    { from: 'bot', text: 'Checking your balance...', delay: 3.2 },
    { from: 'bot', text: '🪙 Account Balance: ₹45,230\nAvailable: ₹45,230\nLast updated: Just now', delay: 4.2 },
    { from: 'user', text: 'Last 3 transactions dikhao', delay: 5.8 },
    { from: 'bot', text: '📊 Recent Transactions:\n1. -₹1,240 MSEDCL Bill\n2. -₹3,000 to Kiran\n3. +₹10,000 Salary Credit', delay: 6.8 }
  ],
  // Conversation 4: Apply for Credit
  [
    { from: 'user', text: 'Hi', delay: 0.5 },
    { from: 'bot', text: 'Hello! How may I help you today? 😊', delay: 1.2 },
    { from: 'user', text: 'Mujhe loan chahiye', delay: 2.5 },
    { from: 'bot', text: 'Checking your eligibility...', delay: 3.2 },
    { from: 'bot', text: '🎯 You are eligible for:\n₹2,00,000 Business Loan\nInterest: 12% p.a.\nTenure: 12 months', delay: 4.5 },
    { from: 'user', text: 'Apply karo', delay: 6 },
    { from: 'bot', text: 'Processing application...', delay: 6.8 },
    { from: 'bot', text: '🎉 Congratulations!\nLoan approved: ₹2,00,000\nAmount will be credited in 24 hours', delay: 8 }
  ],
  // Conversation 5: Mobile Recharge
  [
    { from: 'user', text: 'Hi', delay: 0.5 },
    { from: 'bot', text: 'Hello! How may I help you today? 😊', delay: 1.2 },
    { from: 'user', text: '9876543210 ka recharge karo', delay: 2.5 },
    { from: 'bot', text: 'Select plan:\n1. ₹299 - 1.5GB/day, 28 days\n2. ₹599 - 2GB/day, 56 days\n3. ₹799 - 2GB/day, 84 days', delay: 3.5 },
    { from: 'user', text: '1', delay: 5 },
    { from: 'bot', text: 'Processing recharge...', delay: 5.8 },
    { from: 'bot', text: '✅ Recharge successful!\n₹299 for 9876543210\nValidity: 28 days', delay: 7 }
  ],
  // Conversation 6: DTH Recharge
  [
    { from: 'user', text: 'Hi', delay: 0.5 },
    { from: 'bot', text: 'Hello! How may I help you today? 😊', delay: 1.2 },
    { from: 'user', text: 'DTH recharge karna hai', delay: 2.5 },
    { from: 'bot', text: 'Enter your DTH number:', delay: 3.2 },
    { from: 'user', text: '1234567890', delay: 4.5 },
    { from: 'bot', text: 'Tata Sky - ₹450\nPlan: HD Pack\nValidity: 30 days\nConfirm payment?', delay: 5.5 },
    { from: 'user', text: 'Yes', delay: 7 },
    { from: 'bot', text: '✅ DTH recharged successfully!\n₹450 paid to Tata Sky', delay: 8 }
  ],
]

const borderDelays = ['', 'animate-border-flow-delayed', 'animate-border-flow-delayed-2', 'animate-border-flow-delayed']

export default function StopUsingApps() {
  const [conversationIndex, setConversationIndex] = useState(0)
  const [chatKey, setChatKey] = useState(0)

  useEffect(() => {
    // Change conversation every 8 seconds (more time for longer conversations)
    const timer = setInterval(() => {
      setConversationIndex((prev) => (prev + 1) % continuousConversations.length)
      setChatKey((prev) => prev + 1)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="demo-section" className="bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 items-start gap-8 lg:gap-16">

        {/* ── LEFT CONTENT ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h2 className="rf-h2 font-jakarta text-gray-900">
              Everything your business needs <span className="text-emerald-500">inside WhatsApp</span>
            </h2>
            <p className="rf-lead font-inter text-gray-500 mt-4 max-w-xl leading-relaxed">
              Send money, check balance, pay bills and apply for credit just by typing a message. Supports voice notes in 12 languages.
            </p>
          </motion.div>

          {/* Feature cards — scroll-triggered stagger, animated borders on all */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: feat.delay, ease: 'easeOut' }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-[length:200%_100%] animate-border-flow ${borderDelays[i]}`} />
                <div className="relative bg-white rounded-[calc(1rem-1.5px)] p-5 z-10 h-full">
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    {feat.icon.startsWith('/') ? (
                      <Image src={feat.icon} alt={feat.title} width={48} height={48} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-3xl">{feat.icon}</span>
                    )}
                  </div>
                  <h4 className="rf-h4 font-jakarta text-gray-900">{feat.title}</h4>
                  <p className="rf-body font-inter text-gray-500 mt-2">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT VISUAL AREA — WhatsApp Chat Simulator ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* WhatsApp Phone Mockup - Narrower and Taller */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="relative w-[340px] bg-black rounded-[3rem] p-2 shadow-2xl">
              {/* Phone screen */}
              <div className="w-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* WhatsApp header */}
                <div className="bg-[#128C7E] p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-sm">
                    RF
                  </div>
                  <div>
                    <h4 className="font-jakarta text-white font-semibold text-sm">RupeeFlow Banking</h4>
                    <p className="font-inter text-white/70 text-xs">● Online</p>
                  </div>
                </div>

                {/* Chat messages - Continuous Loop with scrollable area */}
                <div key={chatKey} className="bg-[#ECE5DD] h-[550px] p-3 space-y-2 overflow-y-auto">
                  {continuousConversations[conversationIndex].map((message, index) => (
                    <motion.div
                      key={`${chatKey}-${index}`}
                      initial={{ opacity: 0, x: message.from === 'user' ? 50 : -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: message.delay }}
                      className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`p-2.5 rounded-2xl max-w-[75%] ${
                        message.from === 'user'
                          ? 'bg-[#DCF8C6] rounded-br-md'
                          : 'bg-white rounded-bl-md shadow-sm'
                      }`}>
                        <p className="font-inter text-xs text-gray-800 whitespace-pre-line leading-relaxed">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating WhatsApp icon */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl"
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
        </motion.div>
      </div>
    </section>
  )
}
