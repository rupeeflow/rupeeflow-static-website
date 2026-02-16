'use client'

import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const features = [
  {
    id: 'branding',
    label: 'Custom Branding',
    description:
      'Personalize payment links with your logo and brand colors to strengthen customer trust and reinforce your brand identity. Stand out with a professional payment experience tailored to your business.',
    image: '/icons/payment-link/placeholder-branding.png',
  },
  {
    id: 'partial',
    label: 'Partial Payments',
    description:
      'Allow customers to pay in installments or make partial payments on invoices. Offer flexible payment terms that improve collection rates and enhance the customer experience.',
    image: '/icons/payment-link/placeholder-partial.png',
  },
  {
    id: 'bulk',
    label: 'Bulk Upload',
    description:
      'Generate multiple payment links at once by uploading a simple CSV file. Save time and streamline operations when dealing with large volumes of transactions.',
    image: '/icons/payment-link/placeholder-bulk.png',
  },
  {
    id: 'webhooks',
    label: 'Webhooks and APIs',
    description:
      'Automate payment processes and integrate seamlessly with your existing systems. Get real-time event notifications and build custom workflows using our developer-friendly APIs.',
    image: '/icons/payment-link/placeholder-webhooks.png',
  },
  {
    id: 'dashboard',
    label: 'Dashboard Insights',
    description:
      'Monitor your payment trends, track revenues, and optimize cash flow with a powerful analytics dashboard. Make data-driven decisions with real-time reporting and visualizations.',
    image: '/icons/payment-link/placeholder-dashboard.png',
  },
]

export default function IntegrateSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-[#f0f0f0] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-16">
          Integrate with Ease. Connect Without Gaps.
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Feature list with expandable descriptions */}
          <div className="lg:w-[45%] space-y-2">
            {features.map((feature, index) => {
              const isActive = activeIndex === index
              return (
                <div key={feature.id}>
                  {/* Clickable row */}
                  <button
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full flex items-center gap-4 py-4 text-left transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                    }`}
                  >
                    {/* Chevron circle */}
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-emerald-500 shadow-emerald-500/30'
                          : 'bg-white'
                      }`}
                    >
                      <ChevronUp
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? 'text-white rotate-0'
                            : 'text-emerald-500 rotate-180'
                        }`}
                      />
                    </span>

                    {/* Label */}
                    <span
                      className={`fontheading text-lg md:text-xl transition-colors duration-300 ${
                        isActive ? 'text-gray-900' : 'text-gray-600'
                      }`}
                    >
                      {feature.label}
                    </span>
                  </button>

                  {/* Expandable description */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isActive ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-14 pb-4">
                      <p className="text-gray-600 fontbody2 text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Image preview */}
          <div className="lg:w-[55%] flex items-start justify-center pt-4">
            <div className="w-full h-[400px] md:h-[480px] bg-gray-200 rounded-2xl overflow-hidden relative">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const sibling = target.nextElementSibling as HTMLElement
                      if (sibling) sibling.style.display = 'flex'
                    }}
                  />
                  <div className="absolute inset-0 items-center justify-center hidden text-gray-400">
                    <div className="text-center">
                      <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <p className="text-sm font-medium">{feature.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
