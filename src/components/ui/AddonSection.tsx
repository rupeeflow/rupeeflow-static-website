'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AddonsSection() {
  const addons = [
    {
      title: 'AI Insight',
      price: '₹49',
      period: '/month',
      desc: 'AI-driven bill predictions based on your history. Personalized reminders & smart-savings recommendations.',
      features: [
        'Smart AI insights with detailed trends',
        'Advanced analytics dashboard',
      ],
      buttonText: 'Get Addon',
      buttonHref: '#',
    },
    {
      title: 'Eco Analytics',
      price: '₹99',
      period: '/year',
      desc: 'Track and map eco-friendly billing (e.g., renewable energy, water conservation).',
      features: [
        'Reverts to the form of carbon credits or tree-planting',
        'Carbon footprint dashboard',
        'Join community green challenges',
      ],
      buttonText: 'Get Addon',
      buttonHref: '#',
    },
    {
      title: 'Fraud-Resilient Switch',
      price: '₹99',
      period: '/month',
      desc: 'Advanced fraud detection and blockchain verification for secure UPI transfers.',
      features: [
        'Blockchain-based bill verification',
        'Biometric + PIN & device binding',
        'Real-time fraud alerts & anomaly detection',
        'Transaction insurance for peace of mind',
      ],
      buttonText: 'Get Addon',
      buttonHref: '#',
    },
    {
      title: 'Instant Credit Boost',
      price: '₹99',
      period: '/year',
      desc: 'AI-driven instant credit approvals for small transactions & merchant purchases.',
      features: [
        'Instant credit against bills & invoices',
        'High-limit micro-loan offers in minutes',
        'Seamless repayment linked to UPI',
        'Supports personal transactions (on hidden charges)',
      ],
      buttonText: 'Contact Sales',
      buttonHref: '#',
    },
  ]

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Need more? Add advanced features on top of any plan.
        </h2>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {addons.map((addon, index) => (
          <motion.div
            key={addon.title}
            variants={card}
            whileHover={{ scale: 1.03 }}
            className="relative backdrop-blur-lg bg-neutral-500/30 border border-teal-500/40 hover:border-white hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] rounded-2xl p-8 flex flex-col justify-between shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300"
          >
            {/* Title and Price */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{addon.title}</h3>
                <div className="text-2xl font-bold">
                  {addon.price}
                  <span className="text-sm text-gray-400">{addon.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{addon.desc}</p>

              {/* Features */}
              <ul className="text-sm text-gray-300 space-y-2 mb-8">
                {addon.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <Link
              href={addon.buttonHref}
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-md px-6 py-3 bg-teal-emerald hover:bg-green-600 text-black transition"
            >
              {addon.buttonText} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Glow Effect (you can tweak gradient manually) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-500/20 to-transparent blur-3xl" />
      <div className="absolute opacity-70 top-[5%] left-[15%] w-100 h-100 bg-radial-teal-soft "></div>
      <div className="absolute opacity-70 bottom-[-10%] right-[10%] w-150 h-150 bg-radial-emerald-soft "></div>
    </section>
  )
}
