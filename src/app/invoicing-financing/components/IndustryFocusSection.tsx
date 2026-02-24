'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const industries = [
  {
    name: 'Manufacturing',
    desc: 'Raw materials, machinery, finished goods',
    avgFinancing: '₹10-50L',
    icon: '/business/msme.svg',
  },
  {
    name: 'Wholesale & Distribution',
    desc: 'FMCG, electronics, pharmaceuticals',
    avgFinancing: '₹5-30L',
    icon: '/business/kirana.svg',
  },
  {
    name: 'IT & Software Services',
    desc: 'Development, consulting, maintenance',
    avgFinancing: '₹3-20L',
    icon: '/business/developer.svg',
  },
  {
    name: 'Trading Companies',
    desc: 'Import/export, commodity trading',
    avgFinancing: '₹15-50L',
    icon: '/home/globe.svg',
  },
  {
    name: 'Professional Services',
    desc: 'Consulting, legal, accounting',
    avgFinancing: '₹2-15L',
    icon: '/business/api-banking.svg',
  },
  {
    name: 'Construction & Infrastructure',
    desc: 'Contractors, suppliers, equipment',
    avgFinancing: '₹20-50L',
    icon: '/payments/payment-gateway.svg',
  },
]

export default function IndustryFocusSection() {
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
            Industries We{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Specialized financing solutions for B2B businesses across sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Image src={industry.icon} alt={industry.name} width={24} height={24} />
              </div>

              <h3 className="text-gray-900 text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                {industry.name}
              </h3>
              
              <p className="text-gray-600 fontbody2 text-sm mb-4">
                {industry.desc}
              </p>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-indigo-600 font-bold text-lg">{industry.avgFinancing}</div>
                <div className="text-gray-500 text-xs">Avg. Financing</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
