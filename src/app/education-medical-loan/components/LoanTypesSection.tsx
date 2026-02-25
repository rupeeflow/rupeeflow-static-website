'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const loanTypes = [
  {
    category: 'Education Loans',
    color: 'emerald',
    icon: '/business/developer.svg',
    types: [
      {
        name: 'Higher Education',
        amount: 'Up to ₹25L',
        desc: 'Undergraduate, postgraduate, and doctoral programs in India or abroad',
        features: ['No collateral up to ₹7.5L', 'Moratorium period available', 'Tax benefits under 80E'],
      },
      {
        name: 'Skill Development',
        amount: 'Up to ₹10L',
        desc: 'Professional courses, certifications, vocational training programs',
        features: ['Quick approval in 24hrs', 'Flexible tenure', 'Online application'],
      },
      {
        name: 'Competitive Exams',
        amount: 'Up to ₹5L',
        desc: 'Coaching for UPSC, CAT, GATE, NEET, JEE and other entrance exams',
        features: ['Instant disbursal', 'No processing fee', 'Pay after placement'],
      },
    ],
  },
  {
    category: 'Medical Loans',
    color: 'cyan',
    icon: '/features/shield.svg',
    types: [
      {
        name: 'Planned Surgeries',
        amount: 'Up to ₹15L',
        desc: 'Elective surgeries, organ transplants, cardiac procedures',
        features: ['Direct hospital payment', 'EMI starts after 3 months', 'Cashless facility'],
      },
      {
        name: 'Emergency Treatment',
        amount: 'Up to ₹10L',
        desc: 'Accident care, critical illness, ICU expenses, emergency surgeries',
        features: ['Approval in 2 hours', '24/7 support', 'Zero documentation'],
      },
      {
        name: 'Chronic Care',
        amount: 'Up to ₹8L',
        desc: 'Cancer treatment, dialysis, long-term therapies and medications',
        features: ['Flexible repayment', 'Top-up facility', 'Insurance linkage'],
      },
    ],
  },
]

export default function LoanTypesSection() {
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
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Loan Type
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Tailored solutions for education and medical needs
          </p>
        </motion.div>

        <div className="space-y-16">
          {loanTypes.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Header with Image */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${category.color}-50 to-${category.color}-100 flex items-center justify-center`}>
                    <Image src={category.icon} alt={category.category} width={28} height={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                
                {/* Category Image */}
                <div className="w-full lg:w-auto lg:ml-auto">
                  <div className="w-full lg:w-[300px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
                    <Image
                      src={catIndex === 0 ? '/edu-medi-loan/edu loan1.jpeg' : '/edu-medi-loan/medi loan.jpeg'}
                      alt={category.category}
                      width={300}
                      height={180}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Loan Type Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.types.map((type, typeIndex) => (
                  <motion.div
                    key={typeIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: typeIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
                  >
                    {/* Amount Badge */}
                    <div className="absolute -top-3 right-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold shadow-lg">
                      {type.amount}
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {type.name}
                      </h4>
                      <p className="text-gray-600 fontbody2 text-sm mb-6 leading-relaxed">
                        {type.desc}
                      </p>

                      {/* Features */}
                      <div className="space-y-2.5">
                        {type.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Apply Button */}
                      <button className="mt-6 w-full py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold text-sm hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 border border-gray-200 hover:border-emerald-300">
                        Apply for {type.name}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
