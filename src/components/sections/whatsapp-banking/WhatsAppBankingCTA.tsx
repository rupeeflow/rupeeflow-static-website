'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function WhatsAppBankingCTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Animated Background Particles - Reduced */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#25D366] rounded-full opacity-20 will-change-transform"
            animate={{
              y: [0, -50, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h2
            className="font-jakarta text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Bank on{' '}
            <span className="text-[#25D366]">WhatsApp</span>?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-inter text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join 1,00,000+ users who are already banking in their language. 
            <br />
            <span className="text-[#30f3bc]">No app download. No registration. Just WhatsApp.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://wa.me/919876543210?text=Hi, I want to start banking on WhatsApp in Hindi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-jakarta font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Start Banking Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 bg-[#25D366] rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group flex items-center gap-3 bg-transparent border-2 border-[#30f3bc]/50 hover:border-[#30f3bc] text-[#30f3bc] hover:text-white hover:bg-[#30f3bc]/10 font-jakarta font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: '🔒', title: 'Bank Grade Security', subtitle: 'RBI Compliant' },
              { icon: '🌍', title: '12 Languages', subtitle: 'Including Hindi' },
              { icon: '⚡', title: 'Instant Transfers', subtitle: '24/7 Available' },
              { icon: '💳', title: 'Zero Fees', subtitle: 'No Hidden Charges' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-jakarta text-gray-900 font-semibold mb-1 group-hover:text-[#128C7E] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-inter text-gray-900 text-sm">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="mt-16 p-8 bg-white/80 border-2 border-[#25D366]/40 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.p
              className="font-inter text-lg text-gray-800 mb-4"
              animate={{ 
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              "पैसे भेजना हो या बिल भरना हो, बस WhatsApp पर मैसेज करें"
            </motion.p>
            <p className="font-inter text-sm text-[#128C7E] italic font-medium">
              "Whether sending money or paying bills, just message on WhatsApp"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}