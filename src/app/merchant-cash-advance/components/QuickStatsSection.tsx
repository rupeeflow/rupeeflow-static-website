'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const stats = [
  {
    number: '10,000+',
    label: 'Businesses Funded',
    icon: '/business/msme.svg',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    number: '₹250Cr+',
    label: 'Total Disbursed',
    icon: '/home/rupee.svg',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    number: '3 min',
    label: 'Approval Time',
    icon: '/features/clock.svg',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    number: '98%',
    label: 'Satisfaction Rate',
    icon: '/features/shield.svg',
    color: 'from-blue-500 to-indigo-500',
  },
]

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

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Join the growing community of businesses that trust RupeeFlow
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden text-center">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <Image 
                      src={stat.icon} 
                      alt={stat.label} 
                      width={28} 
                      height={28}
                      className="w-7 h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>

                  {/* Number */}
                  <div className="text-gray-900 group-hover:text-white text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 group-hover:text-white/90 fontbody2 text-sm transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="w-full max-w-[1000px] h-[400px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
            <div className="text-center text-gray-400">
              <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <p className="text-xs">1000x400</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
