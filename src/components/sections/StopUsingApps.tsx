'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cpu, Wallet, CreditCard, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    delay: 0,
    title: 'AI-powered Payment Gateway',
    desc: 'Accept 100+ payment modes — UPI, cards, net banking, wallets. Zero-code setup for SMBs; developer-friendly APIs with built-in real-time fraud detection and instant settlement.',
  },
  {
    icon: Wallet,
    delay: 0.1,
    title: 'Make Payments Instantly',
    desc: 'Pay vendors, employees, or partners in seconds via NEFT, RTGS, IMPS, or UPI. Bulk payouts to 10,000+ accounts with full reconciliation, auto-debit scheduling, and audit trail.',
  },
  {
    icon: CreditCard,
    delay: 0.2,
    title: 'Cards for Every Choice',
    desc: 'Issue virtual and physical cards for team expenses, business travel, and vendor payments. Set per-card spend limits, get real-time alerts, and sync automatically with accounting tools.',
  },
  {
    icon: ShieldCheck,
    delay: 0.3,
    title: 'Credit for Your Expenses',
    desc: 'Unlock up to ₹50L in business or personal credit — for NRIs, MSMEs, and startups. Instant approval, flexible repayment, and a fully paperless process backed by AI underwriting.',
  },
]

const borderDelays = ['', 'animate-border-flow-delayed', 'animate-border-flow-delayed-2', 'animate-border-flow-delayed']

export default function StopUsingApps() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-start gap-16">

        {/* ── LEFT CONTENT ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="rf-h2 text-gray-900">
              <span className="text-emerald-500">Stop</span> Using 5 Different Apps
            </h2>
            <p className="rf-lead text-gray-500 mt-4 max-w-xl leading-relaxed">
              One unified platform for AI-powered payments, instant payouts, smart cards, and business credit — everything your business needs, seamlessly connected.
            </p>
          </motion.div>

          {/* Feature cards — scroll-triggered stagger, animated borders on all */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: feat.delay, ease: 'easeOut' }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-[length:200%_100%] animate-border-flow ${borderDelays[i]}`} />
                <div className="relative bg-white rounded-[calc(1rem-1.5px)] p-5 z-10 h-full">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-3 shadow-sm shadow-emerald-100 group-hover:scale-110 transition-transform duration-300">
                    <feat.icon size={17} />
                  </div>
                  <h4 className="rf-h4 text-gray-900">{feat.title}</h4>
                  <p className="rf-body text-gray-500 mt-2">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT VISUAL AREA — original 4 payment image cards ── */}
        <div className="relative h-[560px] hidden lg:block">

          {/* PERSON */}
          <div className="absolute right-[1px] bottom-0 z-10 stat-card">
            <Image
              src="/different/differentmen.png"
              alt="business owner"
              width={320}
              height={460}
              priority
            />
          </div>

          {/* TOP CARD LEFT — UPI Collections */}
          <div className="zone topLeft">
            <img src="/different/collections.png" className="card w-[210px]" alt="" />
          </div>

          {/* TOP CARD RIGHT — Payment Gateway */}
          <div className="zone topRight">
            <img src="/different/gateway.png" className="card w-[210px]" alt="" />
          </div>

          {/* LEFT CARD — Business */}
          <div className="zone leftZone">
            <img src="/different/business.png" className="card w-[250px] right-3.5" alt="" />
          </div>

          {/* BOTTOM CARD — Vendor */}
          <div className="zone bottomZone">
            <img src="/different/vendor.png" className="card w-[240px] " alt="" />
          </div>

        </div>
      </div>

      <style jsx>{`
        .card {
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          background: #fff;
        }
        .zone { position: absolute; z-index: 20; }
        .topLeft  { top: 30px;   right: 360px; animation: slideLeftRight 12s ease-in-out infinite; }
        .topRight { top: -100px; right: 80px;  animation: slideRightLeft 14s ease-in-out infinite; }
        .leftZone { left: 20px;  top: 160px;   animation: floatUp 12s ease-in-out infinite; }
        .bottomZone { right: 260px; bottom: 0; animation: floatDown 13s ease-in-out infinite; }

        @keyframes slideLeftRight { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-45px); } }
        @keyframes slideRightLeft { 0%,100% { transform: translateX(0); } 50% { transform: translateX(45px); } }
        @keyframes floatUp  { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-35px); } }
        @keyframes floatDown { 0%,100% { transform: translateY(0); } 50% { transform: translateY(35px); } }
      `}</style>
    </section>
  )
}
