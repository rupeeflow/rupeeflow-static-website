'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative bg-[#020506] py-24 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">
                Instant Eligibility Check
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="fontheading text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Check Your{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Loan Eligibility
              </span>
            </h1>

            {/* Description */}
            <p className="fontbody2 text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Find out how much you can borrow in just 60 seconds. No impact on credit score. 
              100% free and secure.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: '/features/clock.svg', value: '60 sec', label: 'Quick Check' },
                { icon: '/Developer-friendly/security-card.svg', value: 'No Impact', label: 'Credit Score' },
                { icon: '/features/shield.svg', value: '100%', label: 'Secure' },
                { icon: '/home/rupee.svg', value: '₹50L', label: 'Max Loan' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <Image src={stat.icon} alt="" width={20} height={20} className="opacity-80" />
                  </div>
                  <div className="text-emerald-400 text-xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
              >
                <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
                Check Eligibility Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
