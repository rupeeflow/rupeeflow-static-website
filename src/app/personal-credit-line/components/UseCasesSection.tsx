'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const useCases = [
  {
    title: 'Medical Emergencies',
    desc: 'Cover unexpected medical expenses for yourself or family members without depleting savings.',
    example: 'Withdrew ₹30K for emergency surgery using voice command at midnight. Repaid in 3 months.',
    icon: '/features/shield.svg',
  },
  {
    title: 'Education Fees',
    desc: 'Pay tuition fees, course fees, or certification costs without taking a full loan.',
    example: 'Used ₹25K for online course fees. Paid only interest on used amount, not full limit.',
    icon: '/business/developer.svg',
  },
  {
    title: 'Travel & Vacation',
    desc: 'Fund your dream vacation or family trip. Pay back flexibly over time.',
    example: 'Borrowed ₹40K for family vacation. Repaid in small amounts over 6 months.',
    icon: '/home/globe.svg',
  },
  {
    title: 'Home Repairs',
    desc: 'Handle urgent home repairs, appliance replacement, or small renovations.',
    example: 'Got ₹20K instantly for AC repair during summer. Repaid when salary came.',
    icon: '/business/msme.svg',
  },
]

export default function UseCasesSection() {
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
              Every Need
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Real stories from people like you
          </p>
        </motion.div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10`}
            >
              {/* Image Side */}
              <div className="flex-1 flex justify-center items-center">
                <div className="relative w-full max-w-[280px] h-[240px] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 p-8 flex items-center justify-center">
                  <Image
                    src={useCase.icon}
                    alt={useCase.title}
                    width={160}
                    height={160}
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1">
                <h3 className="text-gray-900 text-2xl md:text-3xl font-bold mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 fontbody2 text-base leading-relaxed mb-6">
                  {useCase.desc}
                </p>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/features/shield.svg"
                        alt="Success"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <div className="text-emerald-700 text-sm font-bold mb-1">
                        Success Story
                      </div>
                      <p className="text-gray-700 text-sm fontbody2">
                        {useCase.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
