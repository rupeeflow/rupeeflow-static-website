'use client'

import { motion } from 'framer-motion'
import { MessageCircle, CreditCard, Smartphone, Shield, Clock, Globe } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Voice Messages Supported',
    description: 'Send voice notes in Hindi, Telugu, Tamil, or any of 12 supported languages',
    bgIcon: '🎤'
  },
  {
    icon: CreditCard,
    title: 'Instant Credit Approval',
    description: 'Get business loans up to ₹50L approved in minutes with AI-powered underwriting',
    bgIcon: '💳'
  },
  {
    icon: Smartphone,
    title: 'Zero App Download',
    description: 'Works directly in WhatsApp. No additional apps, no registration hassles',
    bgIcon: '📱'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'End-to-end encryption, RBI compliance, and secure payment processing',
    bgIcon: '🛡️'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Banking services available round the clock, even on holidays',
    bgIcon: '⏰'
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Communicate in Hindi, English, Telugu, Tamil, Marathi, and 7 more languages',
    bgIcon: '🌍'
  }
]

export default function WhatsAppBankingFeatures() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-jakarta text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Why Choose <span className="text-[#25D366]">WhatsApp Banking</span>?
          </h2>
          <p className="font-inter text-xl text-gray-900 max-w-3xl mx-auto">
            Experience the future of banking with features designed for modern India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
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
              <div className="relative bg-white/80 backdrop-blur-sm border-2 border-[#25D366]/30 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#25D366] group-hover:shadow-xl group-hover:shadow-[#25D366]/20 overflow-hidden">
                
                {/* Animated Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-[#128C7E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Floating Particles on Hover */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [-50, -60, -50],
                    y: [-50, -40, -50],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Animated Gradient Border Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
                
                {/* Main Icon with Consistent WhatsApp Green */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center mb-6 relative overflow-hidden"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.15
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Pulsing Ring on Hover */}
                  <motion.div
                    className="absolute inset-0 border-4 border-white/30 rounded-2xl opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <feature.icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="font-jakarta text-xl font-medium text-gray-900 mb-4 transition-all duration-300 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <motion.span
                    className="group-hover:text-[#128C7E]"
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                  </motion.span>
                </motion.h3>
                <motion.p 
                  className="font-inter text-gray-700 leading-relaxed transition-colors duration-300 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {feature.description}
                </motion.p>

                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#25D366]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating Dots */}
                <motion.div
                  className="absolute top-6 right-6 w-2 h-2 bg-[#25D366] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-[#30f3bc] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.3, 1],
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://wa.me/919876543210?text=Hi, tell me more about WhatsApp Banking features"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-jakarta font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            Experience WhatsApp Banking
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}