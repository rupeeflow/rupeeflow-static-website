'use client'

import { useState, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            {heading}{' '}
            <span className="text-emerald-500">{headingHighlight}</span>
          </h2>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex overflow-x-auto gap-0 border-b border-gray-200 mb-12 scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`whitespace-nowrap flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-medium transition-all duration-300 border-b-2 shrink-0 ${
                activeTab === index
                  ? 'text-gray-900 border-emerald-500'
                  : 'text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-300'
              }`}
            >
              <span
                className={`transition-colors duration-300 ${
                  activeTab === index ? 'text-emerald-500' : 'text-gray-400'
                }`}
              >
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row gap-10"
            >
              {/* LEFT — text content */}
              <div className="lg:w-[45%] flex flex-col justify-center">
                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/25">
                    {current.icon}
                  </span>
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">
                    {current.label}
                  </h3>
                </div>

                {/* Sub-items */}
                <div className="space-y-7">
                  {current.subItems.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.1 }}
                    >
                      {/* Accent line */}
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-full min-h-[44px] bg-emerald-500 rounded-full shrink-0 mt-1" />
                        <div>
                          <h4 className="fontheading text-lg md:text-xl text-gray-900 mb-1.5">
                            {item.title}
                          </h4>
                          <p className="text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 font-semibold text-sm hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    Get Started
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              </div>

              {/* RIGHT — image panel */}
              <div className="lg:w-[55%]">
                <motion.div
                  className="relative w-full h-[420px] md:h-[480px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Gradient overlay — subtle vignette */}
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.18) 100%)',
                    }}
                  />

                  {current.image ? (
                    <motion.div
                      className="absolute inset-0"
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Image
                        src={current.image}
                        alt={current.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        priority
                      />
                    </motion.div>
                  ) : (
                    /* Fallback when no image */
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
                      <div className="text-center text-gray-400">
                        <span className="block text-6xl mb-3 opacity-30">{current.icon}</span>
                        <p className="text-sm font-medium">{current.label}</p>
                      </div>
                    </div>
                  )}

                  {/* Bottom label badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                      <span className="text-emerald-500">{current.icon}</span>
                      <span className="text-xs font-semibold text-gray-800">{current.label}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
