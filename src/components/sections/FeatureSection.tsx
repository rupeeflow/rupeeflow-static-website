'use client'

import FeatureCard from '../ui/FeatureCard'
import { Globe, Wifi, Mic, ShieldCheck } from 'lucide-react'

export default function FeatureSection() {
  const features = [
    {
      title: 'Cross Border Payments',
      icon: <Globe className="w-14 h-14" />,
      heading: 'Easy Cross Border Payments with UPI',

      points: [
        'Send money to India from anywhere in the world.',
        'Instant and low fee payments',
      ],
    },
    {
      title: 'Pay Any Time, Anywhere',
      icon: <Wifi className="w-14 h-14" />,
      heading: 'Online + Offline payments in one app',

      points: [
        'Works in cities and villages, even without internet.',
        'Smart UPI Lite ensures your money moves when needed',
      ],
    },
    {
      title: 'Speak Your Language',
      icon: <Mic className="w-14 h-14" />,
      heading: 'Voice payments in regional languages',

      points: [
        'Pay bills or send money with simple voice commands.',
        'Supports multiple Indian languages for true inclusivity',
      ],
    },
    {
      title: 'Built for Trust & Growth',
      icon: <ShieldCheck className="w-14 h-14" />,
      heading: 'Secure, transparent, and MSME-friendly',

      points: [
        'Bank-grade security with UPI compliance.',
        'Tailored for individuals and small businesses',
      ],
    },
  ]

  return (
    <section className="relative bg-black text-center py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl fontheadingthin text-white mb-2">
          The Future of UPI, Built for You
        </h2>
        <p className="text-2xl md:text-3xl text-gradient-teal-emerald font-semibold mb-4">
          Connecting Voices
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Key features which set us apart from the crowd. Smarter bills to voice
          payments.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </div>

      <div className="absolute opacity-70 top-[15%] left-[15%] w-100 h-100 bg-radial-teal-soft "></div>

      <div className="absolute opacity-70 bottom-0 right-[10%] w-150 h-150 bg-radial-emerald-soft "></div>
    </section>
  )
}
