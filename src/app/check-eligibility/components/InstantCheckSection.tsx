'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const features = [
  {
    icon: '/features/clock.svg',
    title: 'Instant Results',
    desc: 'Get your eligibility status in 60 seconds',
  },
  {
    icon: '/Developer-friendly/security-card.svg',
    title: 'No Credit Impact',
    desc: 'Soft check that doesn&apos;t affect your credit score',
  },
  {
    icon: '/features/shield.svg',
    title: '100% Secure',
    desc: 'Bank-grade encryption for your data',
  },
  {
    icon: '/home/rupee.svg',
    title: 'Free Service',
    desc: 'No charges for checking eligibility',
  },
]

export default function InstantCheckSection() {
  return (
    <section className="relative bg-[var(--card)] py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <Container>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden relative"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--card)] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--background)]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-6 px-4 py-2 rounded-full bg-[var(--card)] backdrop-blur-sm border border-white/30"
              >
                <span className="text-[var(--foreground)] text-sm font-semibold">
                  ⚡ Quick & Easy
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="fontheading text-3xl md:text-5xl text-[var(--foreground)] mb-6"
              >
                Check Your Eligibility in 60 Seconds
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="fontbody2 text-[var(--foreground)] text-lg mb-10 max-w-2xl mx-auto"
              >
                No paperwork, no credit score impact, completely free. Find out your loan eligibility instantly.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
              >
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-[var(--card)] backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                      <Image src={feature.icon} alt="" width={24} height={24} className="opacity-90" />
                    </div>
                    <div className="text-[var(--foreground)] font-bold text-sm mb-1">
                      {feature.title}
                    </div>
                    <div className="text-[var(--foreground)] text-xs">
                      {feature.desc}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-[var(--card)] text-emerald-600 font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105"
                >
                  <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
                  Check Now - It&apos;s Free
                </a>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-8 flex items-center justify-center gap-2 text-[var(--foreground)] text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Trusted by 50,000+ customers</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
