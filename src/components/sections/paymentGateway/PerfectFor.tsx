'use client'

import { motion } from 'framer-motion'
import EcommIcon from '../../../../public/icons/payment-gateway/EcommIcon'
import OnlineMarketPlaceIcon from '../../../../public/icons/payment-gateway/OnlineMarketPlaceIcon'
import EducationalIcon from '../../../../public/icons/payment-gateway/EducationalIcon'
import HealthCareIcon from '../../../../public/icons/payment-gateway/HealthCareIcon'
import ServiceBusinessIcon from '../../../../public/icons/payment-gateway/ServicesBusinessIcon'
import SaasPlatform from '../../../../public/icons/payment-gateway/SassPlatform'

const industries = [
  {
    Icon: EcommIcon,
    title: 'E-commerce\nwebsites',
    iconW: 100,
    iconH: 90,
  },
  {
    Icon: OnlineMarketPlaceIcon,
    title: 'Online\nmarketplaces',
    iconW: 80,
    iconH: 80,
  },
  {
    Icon: EducationalIcon,
    title: 'Educational\ninstitutions',
    iconW: 110,
    iconH: 75,
  },
  {
    Icon: HealthCareIcon,
    title: 'Healthcare\nproviders',
    iconW: 100,
    iconH: 82,
  },
  {
    Icon: ServiceBusinessIcon,
    title: 'Service Businesses',
    iconW: 100,
    iconH: 110,
  },
  {
    Icon: SaasPlatform,
    title: 'SaaS Platforms',
    iconW: 110,
    iconH: 96,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export default function PerfectFor() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Perfect For
          </h2>
          <p className="text-gray-500 mt-3 text-lg">No matter what app, platform or card you use</p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="mt-14 grid grid-cols-3 gap-5">
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: i % 2 === 0 ? -3 : 3,
                boxShadow: '0 24px 56px rgba(48,243,188,0.18)',
                borderColor: '#30F3BC',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative group bg-white rounded-3xl border border-gray-150 p-8 flex flex-col items-start justify-between min-h-[240px] cursor-default overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 900,
                borderColor: '#ebebeb',
              }}
            >
              {/* Background hover tint */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f0fdf9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon - takes up top area */}
              <div className="flex items-center justify-center w-full flex-1 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <item.Icon style={{ width: item.iconW, height: item.iconH }} />
                </motion.div>
              </div>

              {/* Title at bottom */}
              <div className="mt-6 relative z-10">
                {item.title.includes('\n') ? (
                  <h4 className="font-bold text-gray-900 text-xl leading-snug whitespace-pre-line">
                    {item.title}
                  </h4>
                ) : (
                  <h4 className="font-bold text-gray-900 text-xl leading-snug">{item.title}</h4>
                )}
              </div>

              {/* 3D shine */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, transparent 55%)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#235065] text-white font-semibold text-sm shadow-xl hover:bg-[#1a3d4f] transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Pulsing dot indicator */}
            <span className="relative flex items-center justify-center">
              <span className="absolute w-4 h-4 rounded-full bg-[#30F3BC] opacity-40 animate-ping" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#30F3BC]" />
            </span>
            See Industry Solution
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
