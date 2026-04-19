'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Multiple conversation scenarios
const chatScenarios = [
  {
    messages: [
      { from: 'user', text: 'Balance check karo', delay: 0.5 },
      { from: 'bot', text: ' Account Balance: ₹25,430', delay: 1.5 },
      { from: 'user', text: 'Credit chahiye', delay: 2.5 },
      { from: 'bot', text: '🎉 ₹50,000 credit approved!\nInstant approval in 2 seconds', delay: 3.5 }
    ]
  },
  {
    messages: [
      { from: 'user', text: 'Rahul ko 3000 bhejo', delay: 0.5 },
      { from: 'bot', text: 'Processing your transfer...', delay: 1.5 },
      { from: 'bot', text: '✅ ₹3,000 sent to Rahul Kumar\nTransaction completed instantly', delay: 2.5 }
    ]
  },
  {
    messages: [
      { from: 'user', text: 'Bijli ka bill pay karo', delay: 0.5 },
      { from: 'bot', text: '💡 MSEDCL Bill: ₹1,240\nDue: Tomorrow', delay: 1.5 },
      { from: 'user', text: 'Pay kar do', delay: 2.5 },
      { from: 'bot', text: '✅ Bill paid successfully!\n₹1,240 paid to MSEDCL', delay: 3.5 }
    ]
  }
]

// Languages array
const languages = [
  'Hindi',
  'English', 
  'Tamil',
  'Telugu',
  'Marathi',
  'Kannada',
  'Hindi',
  'Gujarati',
  'Malayalam',
  'Punjabi',
  'Odia',
  'Assamese'
]

export default function WhatsAppBankingHero() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [scenarioKey, setScenarioKey] = useState(0)
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScenario((prev) => (prev + 1) % chatScenarios.length)
      setScenarioKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const languageTimer = setInterval(() => {
      setCurrentLanguageIndex((prev) => (prev + 1) % languages.length)
    }, 2000)

    return () => clearInterval(languageTimer)
  }, [])

  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-jakarta text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            <span className="block mb-4">
              Bank on <span className="text-[#25D366]">WhatsApp</span> in
            </span>
            
            {/* Horizontal Scrolling Marquee */}
            <div className="block mb-4 overflow-hidden relative w-full">
              <motion.div 
                className="flex gap-4"
                animate={{
                  x: [0, -1000]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                  }
                }}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                {/* First set of languages */}
                {languages.map((lang, index) => (
                  <span
                    key={`lang-1-${index}`}
                    className="inline-block px-6 py-3 bg-white text-gray-900 rounded-2xl font-bold text-2xl sm:text-3xl lg:text-4xl border-2 border-gray-200 whitespace-nowrap flex-shrink-0"
                  >
                    {lang}
                  </span>
                ))}
                {/* Duplicate set for seamless loop */}
                {languages.map((lang, index) => (
                  <span
                    key={`lang-2-${index}`}
                    className="inline-block px-6 py-3 bg-white text-gray-900 rounded-2xl font-bold text-2xl sm:text-3xl lg:text-4xl border-2 border-gray-200 whitespace-nowrap flex-shrink-0"
                  >
                    {lang}
                  </span>
                ))}
                {/* Third set for extra smooth loop */}
                {languages.map((lang, index) => (
                  <span
                    key={`lang-3-${index}`}
                    className="inline-block px-6 py-3 bg-white text-gray-900 rounded-2xl font-bold text-2xl sm:text-3xl lg:text-4xl border-2 border-gray-200 whitespace-nowrap flex-shrink-0"
                  >
                    {lang}
                  </span>
                ))}
              </motion.div>
            </div>
            
            <span className="block">in Seconds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl text-gray-900 mb-8 leading-relaxed"
          >
            Start in 30 seconds. Send money, pay bills, get credit. Just type in any language
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="https://wa.me/919876543210?text=Hi, I want to start banking on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-jakarta font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Banking on WhatsApp →</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-center"
        >
          <div className="relative w-80 h-[600px] bg-black rounded-[3rem] shadow-2xl lg:translate-x-20">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              <div className="bg-[#128C7E] p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1">
                  <Image src="/rupeeflow.png" alt="RupeeFlow" width={32} height={32} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-jakarta text-white font-semibold">RupeeFlow Banking</h4>
                  <p className="font-inter text-white/70 text-sm">● Online</p>
                </div>
              </div>

              <div key={scenarioKey} className="bg-[#ECE5DD] h-full p-4 space-y-3 overflow-hidden">
                {chatScenarios[currentScenario].messages.map((message, index) => (
                  <motion.div
                    key={`${scenarioKey}-${index}`}
                    initial={{ opacity: 0, x: message.from === 'user' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: message.delay }}
                    className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.from === 'bot' && index > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ 
                          duration: 1, 
                          delay: message.delay - 0.5,
                          times: [0, 0.1, 0.9, 1]
                        }}
                        className="absolute"
                      >
                        <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm">
                          <div className="flex gap-1">
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
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
        </motion.div>
      </div>
    </section>
  )
}
