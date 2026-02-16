'use client'

import Image from 'next/image'

const industries = [
  {
    icon: '/perfect-for/ecommerce.svg',
    title: 'E-commerce\nwebsites',
  },
  {
    icon: '/perfect-for/marketplace.svg',
    title: 'Online\nmarketplaces',
  },
  {
    icon: '/perfect-for/education.svg',
    title: 'Educational\ninstitutions',
  },
  {
    icon: '/perfect-for/healthcare.svg',
    title: 'Healthcare\nproviders',
  },
  {
    icon: '/perfect-for/services.svg',
    title: 'Service\nproviders',
  },
  {
    icon: '/perfect-for/saas.svg',
    title: 'SaaS Platforms',
  },
]

export default function PerfectFor() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900">
          Perfect For
        </h2>
        <p className="text-gray-500 mt-3">
          No matter what app, platform or card you use
        </p>

        {/* Cards */}
        <div className="relative mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {industries.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-10 text-left shadow-sm hover:shadow-md transition"
            >
              {/* SVG Icon */}
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="mb-6"
              />

              <h3 className="text-xl font-semibold text-gray-800 whitespace-pre-line">
                {item.title}
              </h3>
            </div>
          ))}

          {/* Center CTA Button */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
            <button className="pointer-events-auto bg-gradient-to-r from-[#66d17e] to-[#3cc37a] text-white px-6 py-3 rounded-full shadow-md font-medium mt-134">
              • See Industry Solution
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
