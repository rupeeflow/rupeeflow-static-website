'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

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
            Serving NRIs{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            No matter where you are, we're here to help your family in India
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-[1000px] h-[400px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
            <div className="text-center text-gray-400">
              <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <p className="text-xs">1000x400 - World Map</p>
            </div>
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
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg"
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
