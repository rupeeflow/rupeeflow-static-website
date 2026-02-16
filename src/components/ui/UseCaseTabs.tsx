'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'

export interface UseCaseSubItem {
  title: string
  description: string
}

export interface UseCaseTab {
  id: string
  label: string
  icon: ReactNode
  subItems: UseCaseSubItem[]
  image?: string
}

interface UseCaseTabsProps {
  heading: string
  headingHighlight: string
  tabs: UseCaseTab[]
}

export default function UseCaseTabs({ heading, headingHighlight, tabs }: UseCaseTabsProps) {
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            {heading}{' '}
            <span className="text-emerald-500">{headingHighlight}</span>
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="flex overflow-x-auto gap-0 border-b border-gray-200 mb-12 scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 border-b-2 shrink-0 ${
                activeTab === index
                  ? 'text-gray-900 border-emerald-500'
                  : 'text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content area */}
        <div className="relative min-h-[500px]">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`transition-all duration-500 ${
                activeTab === index
                  ? 'opacity-100 relative'
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left: Content */}
                <div className="lg:w-[50%]">
                  {/* Tab icon + title */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                      {tab.icon}
                    </span>
                    <h3 className="fontheading text-2xl md:text-3xl text-gray-900">
                      {tab.label}
                    </h3>
                  </div>

                  {/* Sub-items */}
                  <div className="space-y-8">
                    {tab.subItems.map((item) => (
                      <div key={item.title}>
                        <h4 className="fontheading text-lg md:text-xl text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Get Started button */}
                  <div className="mt-10">
                    <Link
                      href="#"
                      className="inline-flex items-center px-6 py-2.5 rounded-lg border-2 border-emerald-500 text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                {/* Right: Image with gradient background */}
                <div className="lg:w-[50%] relative min-h-[400px] rounded-2xl overflow-hidden">
                  {/* Gradient background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at 70% 60%, rgba(16,185,129,0.15) 0%, rgba(20,184,166,0.08) 40%, transparent 70%)',
                    }}
                  />

                  {/* Image */}
                  <div className="relative w-full h-full flex items-end justify-center">
                    {tab.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={tab.image}
                        alt={tab.label}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.style.display = 'none'
                          const sibling = target.nextElementSibling as HTMLElement
                          if (sibling) sibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div
                      className={`absolute inset-0 items-center justify-center text-gray-300 ${
                        tab.image ? 'hidden' : 'flex'
                      }`}
                    >
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                        <p className="text-sm">{tab.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
