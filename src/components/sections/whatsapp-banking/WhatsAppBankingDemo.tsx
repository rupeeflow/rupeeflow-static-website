'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Sparkles, Zap, Star, Heart, Globe } from 'lucide-react'

// Floating animation component
const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 4, 
  className = "",
  amplitude = 20 
}: { 
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  amplitude?: number
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [-amplitude, amplitude, -amplitude],
      x: [-amplitude/2, amplitude/2, -amplitude/2],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  >
    {children}
  </motion.div>
)

// Floating icon component
const FloatingIcon = ({ 
  Icon, 
  className = "", 
  delay = 0,
  size = "w-8 h-8"
}: { 
  Icon: any
  className?: string
  delay?: number
  size?: string
}) => (
  <FloatingElement delay={delay} className={className} amplitude={15}>
    <motion.div
      className={`${size} text-[#25D366] opacity-20`}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: delay * 0.5
      }}
    >
      <Icon className="w-full h-full" />
    </motion.div>
  </FloatingElement>
)

// Floating text bubble
const FloatingTextBubble = ({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string
  className?: string
  delay?: number
}) => (
  <FloatingElement delay={delay} className={className} amplitude={12}>
    <motion.div
      className="bg-[#25D366]/10 backdrop-blur-sm border border-[#25D366]/20 rounded-full px-4 py-2 text-[#25D366] text-sm font-medium opacity-60"
      animate={{
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 0.3
      }}
    >
      {text}
    </motion.div>
  </FloatingElement>
)

export default function WhatsAppBankingDemo() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-white" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-jakarta text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
            animate={{
              textShadow: [
                "0 0 0px rgba(37, 211, 102, 0)",
                "0 0 20px rgba(37, 211, 102, 0.3)",
                "0 0 0px rgba(37, 211, 102, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            See How <span className="text-[#25D366]">Natural</span> It Feels
          </motion.h2>
          <motion.p 
            className="font-inter text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Real conversations in your language. No complex commands, just natural chat.
          </motion.p>
        </motion.div>

        {/* Demo Cards with Enhanced Animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              language: 'Hindi',
              example: 'Paisa bhejo mere bhai ko',
              translation: 'Send money to my brother',
              response: '✅ ₹5,000 sent to Rahul Kumar',
              emoji: '🇮🇳'
            },
            {
              language: 'Telugu',
              example: 'Naa current bill kattu',
              translation: 'Pay my electricity bill',
              response: '✅ ₹1,240 paid to TSEDCL',
              emoji: '⚡'
            },
            {
              language: 'Tamil',
              example: 'Enakku loan venum',
              translation: 'I need a loan',
              response: '✅ ₹25,000 loan approved!',
              emoji: '🪙'
            }
          ].map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
              }}
              className="group relative"
            >
              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-[#25D366]/40 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#25D366] group-hover:shadow-xl group-hover:shadow-[#25D366]/30 overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />

                {/* Floating Emoji */}
                <motion.div
                  className="absolute top-4 right-4 text-4xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {demo.emoji}
                </motion.div>

                {/* Language Badge - Consistent WhatsApp Green */}
                <motion.div 
                  className="inline-block bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-jakarta text-sm font-semibold px-4 py-2 rounded-full mb-4"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(37, 211, 102, 0)",
                      "0 0 20px rgba(37, 211, 102, 0.4)",
                      "0 0 0px rgba(37, 211, 102, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                >
                  {demo.language}
                </motion.div>

                {/* Example Text */}
                <motion.div 
                  className="font-inter text-gray-900 font-medium text-lg mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  "{demo.example}"
                </motion.div>

                {/* Translation */}
                <motion.div 
                  className="font-inter text-gray-600 text-sm mb-4 italic"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {demo.translation}
                </motion.div>

                {/* Response */}
                <motion.div 
                  className="font-inter text-[#25D366] font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  animate={{
                    color: ["#25D366", "#30f3bc", "#25D366"]
                  }}
                >
                  {demo.response}
                </motion.div>

                {/* Corner Particles */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-[#25D366] rounded-full opacity-0 group-hover:opacity-100"
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
                  className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-[#30f3bc] rounded-full opacity-0 group-hover:opacity-100"
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#25D366]/20 to-[#30f3bc]/20 border border-[#25D366]/30 rounded-full px-8 py-4"
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 0px rgba(37, 211, 102, 0.2)",
                "0 0 30px rgba(37, 211, 102, 0.4)",
                "0 0 0px rgba(37, 211, 102, 0.2)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-[#25D366] rounded-full"
            />
            <span className="font-inter text-gray-900 font-semibold">Voice Messages Also Supported</span>
            <motion.svg 
              className="w-5 h-5 text-[#25D366]" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}