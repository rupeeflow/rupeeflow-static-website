'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const stats = [
  {
    number: '10,000+',
    label: 'Businesses Funded',
    icon: '/business/msme.svg',
  },
  {
    number: '₹250Cr+',
    label: 'Total Disbursed',
    icon: '/home/rupee.svg',
  },
  {
    number: '3 min',
    label: 'Approval Time',
    icon: '/features/clock.svg',
  },
  {
    number: '98%',
    label: 'Satisfaction Rate',
    icon: '/features/shield.svg',
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
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 text-center">
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-500 pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 group-hover:from-emerald-100 group-hover:to-teal-100 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <Image 
                      src={stat.icon} 
                      alt={stat.label} 
                      width={28} 
                      height={28}
                      className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Number */}
                  <div className="text-gray-900 group-hover:text-emerald-600 text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-gray-600 group-hover:text-gray-700 fontbody2 text-sm transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="w-full max-w-[1000px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg">
            <Image 
              src="/merchant-cash-advance/trustedby.jpeg"
              alt="Trusted by thousands of businesses"
              width={1000}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
