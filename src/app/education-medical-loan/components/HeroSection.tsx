'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative bg-[#020506] py-24 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons */}
      {[
        { icon: '/features/shield.svg', delay: 0, x: '10%', y: '20%' },
        { icon: '/home/rupee.svg', delay: 0.5, x: '85%', y: '30%' },
        { icon: '/features/clock.svg', delay: 1, x: '15%', y: '70%' },
        { icon: '/Developer-friendly/security-card.svg', delay: 1.5, x: '80%', y: '75%' },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute hidden md:block"
          style={{ left: item.x, top: item.y }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Image src={item.icon} alt="" width={32} height={32} className="w-8 h-8 opacity-60" />
          </div>
        </motion.div>
      ))}

      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">
                Invest in Your Future
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="fontheading text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Education &{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Medical Loans
              </span>
            </h1>

            {/* Description */}
            <p className="fontbody2 text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Fund your dreams or handle medical emergencies with loans up to ₹25 Lakhs. 
              Quick approval, flexible repayment, and competitive interest rates.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: '₹25L', label: 'Max Loan' },
                { value: '48 hrs', label: 'Disbursal' },
                { value: '12.5%', label: 'Interest Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-base hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                Apply Now
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-bold text-base hover:bg-white/10 transition-all duration-300"
              >
                Calculate EMI
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Education Loan Card */}
                  <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-500/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <Image src="/business/developer.svg" alt="Education" width={24} height={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Education Loan</div>
                        <div className="text-emerald-300 text-sm">Up to ₹25 Lakhs</div>
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm">
                      For higher education, skill courses, certifications
                    </div>
                  </div>

                  {/* Medical Loan Card */}
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-500/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <Image src="/features/shield.svg" alt="Medical" width={24} height={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Medical Loan</div>
                        <div className="text-cyan-300 text-sm">Up to ₹15 Lakhs</div>
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm">
                      For surgeries, treatments, medical emergencies
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-emerald-600 text-2xl font-bold">48hrs</div>
                  <div className="text-gray-600 text-xs">Quick Approval</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
