'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const repaymentOptions = [
  {
    title: 'Daily Repayment',
    desc: 'Small daily deductions from your sales. Perfect for businesses with consistent daily revenue.',
    percentage: '2-5%',
    frequency: 'Every Day',
    icon: '/features/clock.svg',
  },
  {
    title: 'Weekly Repayment',
    desc: 'Weekly deductions that align with your business cycle. Ideal for businesses with weekly patterns.',
    percentage: '10-15%',
    frequency: 'Every Week',
    icon: '/payments/payment-gateway.svg',
  },
  {
    title: 'Monthly Repayment',
    desc: 'Monthly deductions for businesses with longer revenue cycles. More breathing room for cash flow.',
    percentage: '20-30%',
    frequency: 'Every Month',
    icon: '/payouts/salary-disbursements.svg',
  },
]

export default function RepaymentSection() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Flexible{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Repayment Options
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Choose a repayment schedule that matches your business cash flow
          </p>
        </motion.div>

        {/* Layout with cards on left and image on right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-12 relative">
          {/* Left: Repayment Cards */}
          <div className="flex-1 grid grid-cols-1 gap-6 w-full">
            {repaymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden">
                  {/* Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0"
                    whileHover={{ 
                      background: 'linear-gradient(to bottom right, rgba(16, 185, 129, 0.05), rgba(20, 184, 166, 0.05))'
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative flex items-center gap-6">
                    {/* Icon with pulse animation */}
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={option.icon}
                        alt={option.title}
                        width={28}
                        height={28}
                        className="w-7 h-7"
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.h3 
                        className="text-gray-900 text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {option.title}
                      </motion.h3>
                      <p className="text-gray-600 fontbody2 text-sm leading-relaxed mb-3">
                        {option.desc}
                      </p>
                      
                      {/* Stats with animated underline */}
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-emerald-600 text-2xl font-bold">
                            {option.percentage}
                          </div>
                          <div className="text-gray-500 text-xs">of sales</div>
                        </motion.div>
                        <div className="w-px h-8 bg-gray-200" />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-gray-900 text-base font-semibold">
                            {option.frequency}
                          </div>
                          <div className="text-gray-500 text-xs">deduction</div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Animated arrow on hover */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Flexible Repayment Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <div className="w-full max-w-[500px] rounded-3xl border-2 border-gray-200 shadow-lg relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/merchant-cash-advance/flexible-repayment.jpeg"
                  alt="Flexible repayment options"
                  width={500}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating animated feature cards positioned on image corners */}
              <motion.div
                className="absolute top-4 right-4 z-20"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
              >
                <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-500/20 p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Auto-Deduct</div>
                      <div className="text-xs text-gray-500">Hassle-free</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 z-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                animate={{ x: [0, -8, 0] }}
                style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}
              >
                <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-500/20 p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Flexible Terms</div>
                      <div className="text-xs text-gray-500">Your choice</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
              <Image
                src="/features/shield.svg"
                alt="Smart Repayment"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h4 className="text-gray-900 text-lg font-bold mb-2">
                Smart Repayment System
              </h4>
              <p className="text-gray-700 fontbody2 text-sm leading-relaxed">
                Our intelligent system automatically adjusts repayment amounts based on your daily sales performance. 
                If your sales are lower on a particular day, the deduction is proportionally reduced, ensuring your 
                business operations are never disrupted. You only pay when you earn.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
