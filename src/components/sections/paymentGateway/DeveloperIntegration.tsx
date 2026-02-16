'use client'

import Image from 'next/image'
import {
  Code2,
  Zap,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle2,
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Powerful APIs',
    items: [
      'RESTful APIs',
      'Webhooks for real-time updates',
      'Detailed documentation',
    ],
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    items: [
      '5-minute integration',
      'Pre-built plugins',
      'Mobile SDKs (Android, iOS)',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    items: [
      'PCI DSS compliant',
      '256-bit encryption',
      'Fraud detection built-in',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Smart Dashboard',
    items: [
      'Real-time analytics',
      'Transaction reports',
      'Reconciliation tools',
    ],
  },
]

export default function DeveloperIntegration() {
  return (
    <section className="py-12 bg-white">
      {/* ✅ tighter container like reference */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-semibold text-gray-900">
            Developer-Friendly Integration
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Easy and secure to integrate with any platform
          </p>
        </div>

        {/* ✅ column balance fixed */}
        <div className="grid lg:grid-cols-[1.28fr_0.72fr] gap-4 items-center">

          {/* LEFT SIDE */}
          {/* ❌ removed extra padding pushing cards left */}
          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition"
                >
                  <Icon className="w-10 h-10 text-emerald-500 mb-5" />

                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>

                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-[2px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* RIGHT SIDE */}
          
          <div className="relative flex justify-end lg:-ml-15">

            <Image
              src="/developer.png"
              alt="developer"
              width={820}
              height={660}
              className="relative z-10"
            />

            {/* Floating cards */}

            <Image
              src="/Developer-friendly/api-card.svg"
              alt="Powerful APIs"
              width={120}
              height={140}
              className="absolute -top-4 right-16 rotate-12 drop-shadow-lg"
            />

            <Image
              src="/Developer-friendly/security-card.svg"
              alt="Security First"
              width={120}
              height={140}
              className="absolute top-12 right-0 rotate-6 drop-shadow-lg"
            />

            <Image
              src="/Developer-friendly/dashboard-card.svg"
              alt="Smart Dashboard"
              width={120}
              height={140}
              className="absolute top-40 right-44 -rotate-6 drop-shadow-lg"
            />

            <Image
  src="/developer-friendly/dev-friendly-card.svg"
  alt="Developer Friendly"
  width={280}
  height={170}
  className="absolute bottom-39 -right-40 drop-shadow-xl"
/>

            {/* Bottom Callout */}
            {/* <div className="absolute bottom-0 right-0 bg-white border rounded-2xl shadow-lg p-6 w-64">
              <h4 className="font-semibold text-lg mb-1">
                Developer Friendly
              </h4>
              <p className="text-gray-500 text-sm">
                Track payments, customers and on chain transactions.
              </p>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  )
}
