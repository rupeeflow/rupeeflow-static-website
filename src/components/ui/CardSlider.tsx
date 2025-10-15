'use client'

import { useState, useEffect } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Brain,
  Wallet,
  ShieldCheck,
  Zap,
  Cpu,
} from 'lucide-react'
import InfoCard from './ProductCard'

const cards = [
  {
    title: 'Cross-Border UPI for NRIs',
    description:
      'Pay Indian bills directly from your foreign bank accounts using international UPI.',
    imageUrl: '/images/crossborder.png',
    features: [
      { icon: Globe, label: 'Real-time forex conversion' },
      { icon: Globe, label: 'Secure remittance' },
      { icon: Globe, label: 'Family delegated payments' },
    ],
  },
  {
    title: 'Intelligent UPI Switch',
    description:
      'RupeeFlow’s AI-powered UPI Switch ensures seamless cross-bank routing, real-time optimization, and unmatched reliability for every transaction.',
    imageUrl: '/images/upi-switch.png',
    features: [
      { icon: Zap, label: 'Dynamic transaction routing' },
      { icon: Cpu, label: 'AI-based load balancing' },
      { icon: ShieldCheck, label: '99.99% uptime & resilience' },
    ],
  },

  {
    title: 'AI-Powered Bill Management',
    description:
      'Automate bill tracking, reminders, and insights with our advanced AI engine.',
    imageUrl: '/images/ai-bill.png',
    features: [
      { icon: Brain, label: 'Predictive analytics' },
      { icon: Brain, label: 'Smart alerts' },
      { icon: Brain, label: 'Expense optimization' },
    ],
  },
  {
    title: 'Smart Wallet for Gig Workers',
    description:
      'Simplify finances with automated payments and instant access to micro-loans.',
    imageUrl: '/images/smart-wallet.png',
    features: [
      { icon: Wallet, label: 'Bill auto-pay' },
      { icon: Wallet, label: 'One-tap withdrawals' },
      { icon: Wallet, label: 'Savings goals' },
    ],
  },
  {
    title: 'Fraud Resilient UPI Security',
    description:
      'Protect your transactions with blockchain verification and real-time alerts.',
    imageUrl: '/images/fraud-resilient.png',
    features: [
      { icon: ShieldCheck, label: '2FA & biometrics' },
      { icon: ShieldCheck, label: 'Blockchain verification' },
      { icon: ShieldCheck, label: 'Fraud alerts' },
    ],
  },
]

export default function CardSlider() {
  const [index, setIndex] = useState(0)

  const nextCard = () => setIndex(prev => (prev + 1) % cards.length)
  const prevCard = () =>
    setIndex(prev => (prev - 1 + cards.length) % cards.length)

  // ✅ Auto slide every 6 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex(prev => (prev + 1) % cards.length)
    }, 6000)
    return () => clearInterval(autoSlide)
  }, [])

  return (
    <div className="relative w-full flex flex-col items-center mb-40">
      {/* Slider */}
      <div className="overflow-hidden w-full max-w-6xl relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div key={i} className="flex w-full flex-shrink-0 px-3">
              <InfoCard {...card} isActive={i === index} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevCard}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextCard}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Page Indicators */}
      <div className="flex gap-2 mt-6">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all h-2 rounded-full ${
              i === index ? 'w-12 bg-white/70' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
