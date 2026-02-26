'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const emergencies = [
  {
    type: 'Medical Emergency',
    scenarios: ['Surgery', 'Hospitalization', 'Critical Care', 'Medication'],
    maxAmount: '₹10L',
    disbursal: '2-4 hours',
    icon: '/features/shield.svg',
  },
  {
    type: 'Education Fees',
    scenarios: ['Tuition Fees', 'Exam Fees', 'Course Materials', 'Hostel Fees'],
    maxAmount: '₹8L',
    disbursal: '24 hours',
    icon: '/business/developer.svg',
  },
  {
    type: 'Home Repairs',
    scenarios: ['Roof Repair', 'Plumbing', 'Electrical', 'Renovation'],
    maxAmount: '₹5L',
    disbursal: '24 hours',
    icon: '/business/msme.svg',
  },
  {
    type: 'Family Emergency',
    scenarios: ['Wedding', 'Funeral', 'Legal Matters', 'Travel'],
    maxAmount: '₹6L',
    disbursal: '12 hours',
    icon: '/home/globe.svg',
  },
]

export default function EmergencyTypesSection() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            We Cover All{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Emergencies
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Quick financial support for your family&apos;s urgent needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {emergencies.map((emergency, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 group-hover:from-emerald-100 group-hover:to-teal-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <Image 
                      src={emergency.icon} 
                      alt={emergency.type} 
                      width={28} 
                      height={28}
                      className="w-7 h-7 transition-all duration-300"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-600 text-xl font-bold transition-colors">
                      {emergency.maxAmount}
                    </div>
                    <div className="text-gray-500 text-xs transition-colors">
                      Max Amount
                    </div>
                  </div>
                </div>

                <h3 className="text-gray-900 group-hover:text-emerald-600 text-2xl font-bold mb-4 transition-colors">
                  {emergency.type}
                </h3>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {emergency.scenarios.map((scenario, sIndex) => (
                    <div key={sIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 transition-colors" />
                      <span className="text-gray-600 text-sm transition-colors">
                        {scenario}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-emerald-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 font-semibold transition-colors">
                    Disbursal: {emergency.disbursal}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
