'use client'

import { motion, Variants } from 'framer-motion'
import { ShieldCheck, Clock, Mic, ReceiptIndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function WhyChooseSection() {
  const features = [
    {
      icon: <ReceiptIndianRupee className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-neutral-300" />,
      title: 'All your bills, paid in seconds.',
      desc: 'Effortlessly manage all your utility bills—electricity, water, mobile, and more—from a single, intuitive platform. Say goodbye to late fees and scattered due dates with automated reminders and smart scheduling.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-neutral-300" />,
      title: 'Payments you can trust.',
      desc: 'Bank-grade security with 256-bit encryption, ISO 27001 compliance, and multi-factor authentication. Every transaction is protected by advanced fraud detection systems and real-time monitoring.',
    },
    {
      icon: <Clock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-neutral-300" />,
      title: 'Always on, whenever you need us.',
      desc: '24/7/365 availability with dedicated support teams, instant transaction processing, and real-time notifications. RupeeFlow ensures your business never stops with 99.9% uptime guarantee.',
    },
    {
      icon: (
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
          <Mic className="w-full h-full text-emerald-400" />
          {/* Animated waveform bars */}
          <div className="absolute inset-0 flex items-center justify-center gap-0.5">
            <div className="w-0.5 bg-emerald-400 rounded-full animate-wave-1" style={{ height: '30%' }} />
            <div className="w-0.5 bg-emerald-400 rounded-full animate-wave-2" style={{ height: '50%' }} />
            <div className="w-0.5 bg-emerald-400 rounded-full animate-wave-3" style={{ height: '40%' }} />
            <div className="w-0.5 bg-emerald-400 rounded-full animate-wave-4" style={{ height: '60%' }} />
            <div className="w-0.5 bg-emerald-400 rounded-full animate-wave-5" style={{ height: '35%' }} />
          </div>
        </div>
      ),
      title: 'Pay in your language, with your voice',
      desc: 'Speak Hindi, Telugu, Tamil or 9 other languages to send money, check balance and pay bills. No typing needed. 99.5% accuracy powered by AI.',
      isVoice: true,
    },
    {
      icon: (
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#25D366] rounded-2xl opacity-20" />
          <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#25D366] relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      ),
      title: 'Bank without an app',
      desc: 'No install. No login. No password. Just open WhatsApp and type. Available 24/7 in your language.',
      cta: 'Try it now →',
      ctaLink: '/whatsapp-banking',
      isWhatsApp: true,
    },
  ]

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section className="relative w-full bg-black-emerald text-white py-16 sm:py-24 lg:py-36 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="rf-h2 font-jakarta mb-4">
            Why 1,00,000+ businesses trust{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              RupeeFlow
            </span>
          </h2>
          <p className="rf-lead font-inter text-gray-300 mb-10 max-w-md">
            Everything your business needs to collect, pay, and grow — seamlessly connected.
          </p>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ReceiptIndianRupee className="w-5 h-5 relative z-10" />
            <span className="relative z-10">SEE ALL FEATURES</span>
            <div className="absolute -right-2 -top-2 w-4 h-4 bg-white/30 rounded-full animate-ping" />
          </motion.button>
        </motion.div>

        {/* Right Side - Feature Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col space-y-3 text-left"
            >
              <div>{feature.icon}</div>
              <h4 className="rf-h4 font-jakarta">{feature.title}</h4>
              <p className="rf-body font-inter text-gray-400">{feature.desc}</p>
              {feature.cta && feature.ctaLink && (
                <Link 
                  href={feature.ctaLink}
                  className="inline-flex items-center gap-2 text-[#25D366] font-jakarta font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  {feature.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
