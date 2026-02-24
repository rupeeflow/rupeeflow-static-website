'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const features = [
  {
    title: '24-Hour Disbursal',
    desc: 'Funds reach your family in India within 24 hours. No delays when emergencies strike.',
    icon: '/features/clock.svg',
  },
  {
    title: 'Multi-Language Support',
    desc: 'Apply in 12 Indian languages. Voice-enabled assistance for easy application process.',
    icon: '/features/mic.png',
  },
  {
    title: '100% Online Process',
    desc: 'Apply from anywhere in the world. No need to visit India or any branch.',
    icon: '/home/globe.svg',
  },
  {
    title: 'Flexible Repayment',
    desc: 'Pay only when you use. Multiple repayment options to suit your financial situation.',
    icon: '/home/wallet.svg',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              NRI Emergency Loans
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Designed specifically for NRIs who need to support their family in India during emergencies
          </p>
        </motion.div>

        {/* Features + Image Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Feature Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="mb-4 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 fontbody2 text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-teal-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Right: Why Choose Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <div className="w-full max-w-[500px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg">
              <Image
                src="/nri-emergency-loans/why.jpeg"
                alt="Why choose NRI emergency loans"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
