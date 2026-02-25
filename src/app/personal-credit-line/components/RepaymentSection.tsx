'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const ImagePlaceholder = ({ size }: { size?: string }) => (
  <div className="text-center text-gray-400">
    <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
    </svg>
    {size && <p className="text-xs">{size}</p>}
  </div>
)

const repaymentOptions = [
  {
    title: 'Pay Only What You Use',
    desc: 'Interest charged only on the amount you withdraw. No charges on unused credit limit.',
    percentage: '0%',
    frequency: 'On Used Amount',
    icon: '/home/wallet.svg',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Flexible Repayment',
    desc: 'No fixed EMI schedule. Pay anytime, any amount above minimum due. Complete flexibility.',
    percentage: 'Flexible',
    frequency: 'Anytime',
    icon: '/features/clock.svg',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Revolving Credit',
    desc: 'Repaid amount becomes available again instantly. Borrow, repay, and borrow again.',
    percentage: 'Instant',
    frequency: 'Revolving',
    icon: '/payments/payment-gateway.svg',
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function RepaymentSection() {
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
            Flexible{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Repayment Options
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Complete flexibility in how and when you repay
          </p>
        </motion.div>

        {/* Layout with cards on left and image on right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-12">
          {/* Left: Repayment Cards */}
          <div className="flex-1 grid grid-cols-1 gap-6 w-full">
            {repaymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden hover:-translate-y-1">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative flex items-center gap-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Image
                        src={option.icon}
                        alt={option.title}
                        width={28}
                        height={28}
                        className="w-7 h-7"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-gray-900 text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 fontbody2 text-sm leading-relaxed mb-3">
                        {option.desc}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-emerald-600 text-2xl font-bold">
                            {option.percentage}
                          </div>
                          <div className="text-gray-500 text-xs">charges</div>
                        </div>
                        <div className="w-px h-8 bg-gray-200" />
                        <div>
                          <div className="text-gray-900 text-base font-semibold">
                            {option.frequency}
                          </div>
                          <div className="text-gray-500 text-xs">payment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <div className="w-full max-w-[500px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
              <Image
                src="/personal-credit/flexible repayment.jpeg"
                alt="Flexible Repayment Options"
                width={500}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>``
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
              <Image
                src="/features/shield.svg"
                alt="Smart Repayment"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h4 className="text-gray-900 text-lg font-bold mb-2">
                No Prepayment Penalty
              </h4>
              <p className="text-gray-700 fontbody2 text-sm leading-relaxed">
                Pay off your outstanding balance anytime without any prepayment charges or penalties. 
                The moment you repay, that amount becomes available in your credit line again. Enjoy complete 
                freedom to manage your finances the way you want.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
