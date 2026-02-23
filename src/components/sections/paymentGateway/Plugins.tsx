'use client'

import { motion } from 'framer-motion'
import CodingIcon from '../../../../public/icons/payment-gateway/CodingIcon'
import EcommpluginIcon from '../../../../public/icons/payment-gateway/EcommPlugin'

const integrations = [
  { name: 'WooCommerce', color: '#7F54B3', logo: 'WC' },
  { name: 'Shopify', color: '#95BF46', logo: 'SH' },
  { name: 'Magento', color: '#EE672F', logo: 'MG' },
  { name: 'OpenCart', color: '#23AADF', logo: 'OC' },
]

const steps = [
  {
    step: '01',
    title: 'Copy API Keys',
    desc: 'Generate keys from the RupeeFlow dashboard in one click.',
  },
  {
    step: '02',
    title: 'Install SDK',
    desc: 'npm install, pip install, or use our REST API directly.',
  },
  {
    step: '03',
    title: 'Go Live',
    desc: 'Run a test transaction, flip to production and you are live.',
  },
]

export default function Plugins() {
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#f0fdf9] text-[#029789] border border-[#30F3BC] mb-4">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Ready-made Plugins
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
            Plug into your existing stack in minutes — no complex setup required
          </p>
        </motion.div>

        {/* SDK / Language strip */}
        <motion.div
          className="mt-14 w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <CodingIcon className="w-full h-auto" />
        </motion.div>

        {/* E-commerce Plugin Image */}
        <motion.div
          className="mt-8 w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <EcommpluginIcon className="w-full h-auto" />
        </motion.div>

        {/* E-commerce Integrations */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
              whileHover={{
                y: -5,
                boxShadow: '0 16px 40px rgba(48,243,188,0.14)',
                borderColor: '#30F3BC',
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0"
                style={{ backgroundColor: item.color }}
              >
                {item.logo}
              </div>
              <span className="font-semibold text-gray-700 text-sm">{item.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Integration Steps */}
        <div className="mt-14">
          <motion.h3
            className="text-center text-2xl font-bold text-gray-900 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Integrate in 3 steps
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-[#30F3BC] via-[#30F3BC] to-[#30F3BC] opacity-30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-7 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 48px rgba(48,243,188,0.15)',
                  borderColor: '#30F3BC',
                }}
              >
                <div className="w-14 h-14 bg-[#235065] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-[#30F3BC] font-extrabold text-base">{step.step}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.55, ease: 'easeOut' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#30F3BC] text-[#235065] font-bold text-sm shadow-lg hover:shadow-xl hover:bg-[#22e0a8] transition-all"
          >
            View Documentation
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#235065] text-[#235065] font-bold text-sm hover:bg-[#235065] hover:text-white transition-all"
          >
            Start Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  )
}
