'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const businessTypes = [
  {
    type: 'Retail Stores',
    examples: ['Kirana Shops', 'Grocery Stores', 'Mobile Shops', 'Clothing Stores'],
    avgLoan: '₹2-5L',
    icon: '/business/kirana.svg',
  },
  {
    type: 'Food & Beverage',
    examples: ['Restaurants', 'Cafes', 'Cloud Kitchens', 'Food Trucks'],
    avgLoan: '₹3-5L',
    icon: '/business/msme.svg',
  },
  {
    type: 'Service Providers',
    examples: ['Salons', 'Gyms', 'Repair Shops', 'Laundry Services'],
    avgLoan: '₹1-3L',
    icon: '/business/developer.svg',
  },
  {
    type: 'Gig Workers',
    examples: ['Delivery Partners', 'Drivers', 'Freelancers', 'Consultants'],
    avgLoan: '₹50K-2L',
    icon: '/home/man.svg',
  },
  {
    type: 'E-commerce',
    examples: ['Online Sellers', 'Dropshippers', 'Marketplace Vendors', 'D2C Brands'],
    avgLoan: '₹2-5L',
    icon: '/payments/payment-links.svg',
  },
  {
    type: 'Healthcare',
    examples: ['Clinics', 'Pharmacies', 'Diagnostic Centers', 'Dental Clinics'],
    avgLoan: '₹3-5L',
    icon: '/features/shield.svg',
  },
]

export default function BusinessTypesSection() {
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
            Perfect For{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Every Business
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            No matter what business you run, we have the right financing solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 group"
            >
              {/* Icon & Type */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image src={business.icon} alt={business.type} width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 text-lg font-bold group-hover:text-emerald-600 transition-colors">
                    {business.type}
                  </h3>
                  <div className="text-emerald-600 text-sm font-semibold">
                    {business.avgLoan}
                  </div>
                </div>
              </div>

              {/* Examples */}
              <div className="space-y-2">
                {business.examples.map((example, exIndex) => (
                  <div key={exIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-gray-600 text-sm">{example}</span>
                  </div>
                ))}
              </div>

              {/* Apply Button */}
              <button className="mt-6 w-full py-2.5 rounded-xl bg-gray-50 text-gray-700 font-semibold text-sm hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 border border-gray-200 hover:border-emerald-300">
                Get Funded
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
