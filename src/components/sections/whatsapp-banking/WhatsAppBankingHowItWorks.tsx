'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Smartphone, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const steps = [
  {
    icon: MessageCircle,
    title: 'Save Our Number',
    description: 'Add +91-98765-43210 to your WhatsApp contacts',
    detail: 'Just like adding any friend on WhatsApp'
  },
  {
    icon: Smartphone,
    title: 'Send "Hi"',
    description: 'Start a conversation in Hindi, English, or any language',
    detail: 'Our AI understands 12 Indian languages'
  },
  {
    icon: CheckCircle,
    title: 'Start Banking',
    description: 'Send money, pay bills, get credit - all through chat',
    detail: 'No forms, no apps, no waiting'
  }
]

// Phone scenarios for each step
const stepPhoneScenarios = [
  // Step 1: Save Our Number
  {
    messages: [
      { from: 'user', text: 'Save our WhatsApp number', delay: 0.5 },
      { from: 'bot', text: 'Welcome to RupeeFlow Banking! 🏦', delay: 1.5 },
      { from: 'user', text: 'Hi', delay: 2 },
      { from: 'bot', text: 'Hello! How can I help you today?', delay: 3 }
    ],
    label: 'Getting Started',
    sublabel: 'Add our number like any WhatsApp contact'
  },
  // Step 2: Send "Hi"
  {
    messages: [
      { from: 'user', text: 'Namaste', delay: 0.5 },
      { from: 'bot', text: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूं?', delay: 1.5 },
      { from: 'user', text: 'Balance check karo', delay: 2 },
      { from: 'bot', text: '🪙 Account Balance: ₹25,430', delay: 3 }
    ],
    label: 'Start Conversation',
    sublabel: 'Chat in Hindi, English, or 10 other languages'
  },
  // Step 3: Start Banking
  {
    messages: [
      { from: 'user', text: 'Rachit ko 2000 bhejo', delay: 0.5 },
      { from: 'bot', text: 'Processing your transfer...', delay: 1.5 },
      { from: 'bot', text: '✅ ₹2,000 sent to Rachit \nTransaction completed in 2 seconds', delay: 2.5 }
    ],
    label: 'Complete Banking',
    sublabel: 'Send money, pay bills, get credit instantly'
  }
]

export default function WhatsAppBankingHowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000) // Change step every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="max-w-7xl mx-auto px-15 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-jakarta text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            How It <span className="text-[#25D366]">Works</span>
          </h2>
          <p className="font-inter text-xl text-gray-900 max-w-3xl mx-auto">
            Get started in 3 simple steps. No app downloads, no lengthy forms, no waiting.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
                {/* Card */}
                <div className={`bg-white/90 backdrop-blur-sm border-2 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl relative overflow-hidden ${
                  activeStep === index 
                    ? 'border-[#25D366] shadow-xl shadow-[#25D366]/20' 
                    : 'border-[#25D366]/30 group-hover:border-[#25D366] group-hover:shadow-[#25D366]/20'
                }`}>
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                    <step.icon className="w-7 h-7 text-white relative z-10" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="font-jakarta text-xl font-medium text-gray-900 mb-2 group-hover:text-[#128C7E] transition-colors duration-300 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="font-inter text-gray-700 text-base mb-2 leading-relaxed relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                  <motion.p 
                    className="font-inter text-[#30f3bc] text-sm font-medium relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {step.detail}
                  </motion.p>

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#25D366] rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 right-8 w-1.5 h-1.5 bg-[#30f3bc] rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Single Phone Mockup */}
          <div className="flex justify-center">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-80 h-[550px] bg-black rounded-[2.5rem]  shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  {/* WhatsApp header */}
                  <div className="bg-[#128C7E] p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1">
                      <Image src="/rupeeflow.png" alt="RupeeFlow" width={32} height={32} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-jakarta text-white font-semibold">RupeeFlow Banking</h4>
                      <p className="font-inter text-white/70 text-xs">● Online</p>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="bg-[#ECE5DD] h-full p-4 space-y-3 overflow-hidden">
                    {stepPhoneScenarios[activeStep].messages.map((message, index) => (
                      <motion.div
                        key={`${activeStep}-${index}`}
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
              
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mt-4"
              >
                <p className="font-jakarta text-[#25D366] font-semibold">{stepPhoneScenarios[activeStep].label}</p>
                <p className="font-inter text-gray-600 text-sm">{stepPhoneScenarios[activeStep].sublabel}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}