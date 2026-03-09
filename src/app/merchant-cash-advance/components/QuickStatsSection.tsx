'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const stats = [
  {
    number: 100,
    suffix: '+',
    label: 'Businesses Funded',
    icon: '/business/msme.svg',
  },
  {
    number: 30,
    prefix: '₹',
    suffix: 'Cr+',
    label: 'Total Disbursed',
    icon: '/home/rupee.svg',
  },
  {
    number: 3,
    suffix: ' min',
    label: 'Approval Time',
    icon: '/features/clock.svg',
  },
  {
    number: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    icon: '/features/shield.svg',
  },
]

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function QuickStatsSection() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-emerald-500/10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-500/10"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="fontheading text-3xl md:text-5xl text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Hundreds
            </span>
          </motion.h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Join the growing community of businesses that trust RupeeFlow
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 text-center relative overflow-hidden">
                {/* Animated gradient background on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 to-teal-500/0"
                  whileHover={{ 
                    background: 'linear-gradient(to bottom right, rgba(16, 185, 129, 0.05), rgba(20, 184, 166, 0.05))'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with rotation animation */}
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 group-hover:from-emerald-100 group-hover:to-teal-100 flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image 
                      src={stat.icon} 
                      alt={stat.label} 
                      width={28} 
                      height={28}
                      className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>

                  {/* Animated Number */}
                  <motion.div 
                    className="text-gray-900 group-hover:text-emerald-600 text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <AnimatedCounter 
                      value={stat.number} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                    />
                  </motion.div>

                  {/* Label */}
                  <div className="text-gray-600 group-hover:text-gray-700 fontbody2 text-sm transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Image with parallax effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 relative"
        >
          <motion.div 
            className="w-full max-w-[1000px] rounded-3xl border-2 border-gray-200 shadow-lg relative"
            whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-3xl overflow-hidden">
              <Image 
                src="/merchant-cash-advance/trustedby.jpeg"
                alt="Trusted by thousands of businesses"
                width={1000}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Floating animated feature cards positioned on image corners */}
            <motion.div
              className="absolute top-4 right-4 z-20"
              initial={{ opacity: 0, y: 20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
            >
              <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-500/20 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Fast Approval</div>
                    <div className="text-xs text-gray-500">In 3 minutes</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 z-20"
              initial={{ opacity: 0, y: -20, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, 10, 0] }}
              style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}
            >
              <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-500/20 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">No Collateral</div>
                    <div className="text-xs text-gray-500">100% Unsecured</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
