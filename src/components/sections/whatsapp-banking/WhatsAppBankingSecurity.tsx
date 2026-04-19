'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: 'RBI Compliant',
    description: 'Fully regulated by Reserve Bank of India with all necessary licenses and approvals',
    stats: '100% Compliant',
    bgIcon: '🛡️'
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All messages and transactions are encrypted using bank-grade 256-bit SSL encryption',
    stats: '256-bit SSL',
    bgIcon: '🔐'
  },
  {
    icon: Eye,
    title: 'Zero Data Storage',
    description: 'We never store your chat messages or personal conversations on our servers',
    stats: 'Zero Storage',
    bgIcon: '👁️'
  },
  {
    icon: CheckCircle,
    title: 'Instant Verification',
    description: 'Multi-factor authentication and real-time fraud detection for every transaction',
    stats: '99.9% Secure',
    bgIcon: '✅'
  }
]

export default function WhatsAppBankingSecurity() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white" />
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
            Your Money is <span className="text-[#25D366]">100% Safe</span>
          </h2>
          <p className="font-inter text-xl text-gray-900 max-w-3xl mx-auto">
            Bank-grade security meets WhatsApp convenience. Every transaction is protected by multiple layers of security.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
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
                scale: 1.03,
              }}
              className="group relative"
            >
              <div className="relative bg-white/90 backdrop-blur-sm border-2 border-[#25D366]/30 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-[#25D366] group-hover:shadow-lg group-hover:shadow-[#25D366]/20">
                {/* Background Icon */}
                <div
                  className="absolute top-4 right-4 text-4xl opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                >
                  {feature.bgIcon}
                </div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content with Staggered Animation */}
                <h3 
                  className="font-jakarta text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#128C7E] transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p 
                  className="font-inter text-sm text-gray-600 leading-relaxed"
                >
                  {feature.description}
                </p>

                {/* Corner Dot */}
                <div
                  className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#25D366] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm border-2 border-[#25D366]/30 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div
              className="group"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#25D366] to-[#30f3bc] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-jakarta text-xl font-bold text-gray-900 mb-2">RBI Licensed</h3>
              <p className="font-inter text-sm text-gray-600">Authorized Payment System Operator under RBI guidelines</p>
            </div>

            <div
              className="group"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#30f3bc] to-[#53BEC2] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
              >
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-jakarta text-xl font-bold text-gray-900 mb-2">ISO Certified</h3>
              <p className="font-inter text-sm text-gray-600">ISO 27001 certified for information security management</p>
            </div>

            <div
              className="group"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#53BEC2] to-[#25D366] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-jakarta text-xl font-bold text-gray-900 mb-2">PCI DSS</h3>
              <p className="font-inter text-sm text-gray-600">Payment Card Industry Data Security Standard compliant</p>
            </div>
          </div>
        </motion.div>

        {/* Security Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#25D366]/20 to-[#30f3bc]/20 border border-[#25D366]/30 rounded-full px-8 py-4 mb-6">
            <Shield className="w-6 h-6 text-[#25D366]" />
            <span className="font-inter text-gray-900 font-semibold">100% Money Back Guarantee on Fraud</span>
          </div>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            If any unauthorized transaction occurs due to our security breach, we guarantee full refund within 24 hours. Your trust is our priority.
          </p>
        </motion.div>
      </div>
    </section>
  )
}