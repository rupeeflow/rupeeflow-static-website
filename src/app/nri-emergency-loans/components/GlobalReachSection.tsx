'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const countries = [
  { name: 'United States', flag: '🇺🇸', nris: '4.5M+', cities: 'New York, San Francisco, Chicago' },
  { name: 'United Kingdom', flag: '🇬🇧', nris: '1.8M+', cities: 'London, Manchester, Birmingham' },
  { name: 'UAE', flag: '🇦🇪', nris: '3.5M+', cities: 'Dubai, Abu Dhabi, Sharjah' },
  { name: 'Singapore', flag: '🇸🇬', nris: '700K+', cities: 'Singapore City' },
  { name: 'Canada', flag: '🇨🇦', nris: '1.6M+', cities: 'Toronto, Vancouver, Montreal' },
  { name: 'Australia', flag: '🇦🇺', nris: '700K+', cities: 'Sydney, Melbourne, Perth' },
]

export default function GlobalReachSection() {
  return (
    <section className="relative bg-[var(--card)] py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Serving NRIs{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            No matter where you are, we&apos;re here to help your family in India
          </p>
        </motion.div>

        {/* Worldwide Map Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-[1000px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg">
            <Image
              src="/nri-emergency-loans/worldwide.png"
              alt="Serving NRIs worldwide - Global reach map"
              width={1000}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--card)] rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{country.flag}</span>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg">{country.name}</h3>
                  <p className="text-emerald-600 text-sm font-semibold">{country.nris} NRIs</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{country.cities}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
