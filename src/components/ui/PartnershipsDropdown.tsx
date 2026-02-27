'use client'

import { navlist } from '@/interface/typesInterfaces'
import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Building2, Users, TrendingUp, CheckCircle2 } from 'lucide-react'

interface PartnershipsDropdownProps {
  navitems: navlist[]
  scrolled?: boolean
}

export default function PartnershipsDropdown({ navitems, scrolled = false }: PartnershipsDropdownProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  const getActiveItem = useCallback(() => {
    const normalizedPathname = pathname.endsWith('/') && pathname !== '/' 
      ? pathname.slice(0, -1) 
      : pathname
    
    const matchedItem = navitems.find(item => {
      const normalizedHref = item.href.endsWith('/') && item.href !== '/' 
        ? item.href.slice(0, -1) 
        : item.href
      return normalizedHref === normalizedPathname
    })
    
    return matchedItem || navitems[0]
  }, [pathname, navitems])
  
  const [active, setActive] = useState<navlist>(getActiveItem())

  useEffect(() => {
    setActive(getActiveItem())
  }, [pathname, navitems, getActiveItem])

  // Product-specific content
  const getProductContent = (itemId: string) => {
    const content = {
      bank: {
        title: 'For Banks',
        partnerType: 'Banking Partner',
        metric: '50+ Banks',
        metricLabel: 'Connected',
        feature1: 'White-label solutions',
        feature2: 'API integration',
      },
      partner: {
        title: 'Affiliate Partners',
        partnerType: 'Affiliate Program',
        metric: '1000+ Partners',
        metricLabel: 'Active',
        feature1: 'Competitive commissions',
        feature2: 'Marketing support',
      },
    }
    return content[itemId as keyof typeof content] || content.bank
  }

  const productContent = getProductContent(active.id)

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 w-full mt-2 ${scrolled ? '' : 'max-w-[920px] mx-auto'}`}
    >
      <div className={`flex gap-0 ${scrolled ? 'max-w-[1100px] mx-auto' : ''}`}>
        {/* LEFT SIDEBAR */}
        <div className="w-[260px] p-5 border-r border-gray-100/80">
          <div className="space-y-1">
            {navitems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03, duration: 0.2 }}
                onClick={() => {
                  setActive(item)
                  if (item.href) {
                    router.push(item.href)
                  }
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-all duration-200 group
                  ${
                    active?.id === item.id
                      ? 'border-emerald-500 bg-emerald-50 shadow-sm text-emerald-700'
                      : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700'
                  }
                `}
              >
                <div className="w-6 h-6 relative">
                  <Image src={item.icon} alt={item.label} width={24} height={24} className="w-full h-full" />
                </div>
                <span className="text-sm font-medium flex-1">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT CARD */}
        <div className="flex-1 relative overflow-hidden min-h-[440px]">
          {/* Background Image with Depth */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image 
              src="/partnership.jpeg" 
              alt="Partnerships" 
              fill
              className="object-cover"
              priority
            />
            {/* Very subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </motion.div>

          {/* Content Layer */}
          <div className="relative z-10 h-full flex flex-col p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex-1 flex flex-col"
              >
                {/* Icon and Title - Top Left */}
                <div className="mb-6">
                  {/* Product Icon - Minimal */}
                  <div className="mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-gray-100/50 flex items-center justify-center">
                      <Image src={active.icon} alt={active.label} width={22} height={22} />
                    </div>
                  </div>

                  {/* Title Only */}
                  <div>
                    <h3 className="text-[20px] font-semibold text-gray-900 tracking-tight leading-tight">
                      {productContent.title}
                    </h3>
                  </div>
                </div>

                {/* Centered Partnership Card */}
                <div className="flex-1 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                    className="w-[280px]"
                  >
                    <div className="relative">
                      {/* Partnership Card - Premium Design */}
                      <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-200/50">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-[10px] font-medium text-emerald-700 uppercase tracking-wide">Active</span>
                            </div>
                            <div className="text-[24px] font-semibold text-gray-900 tracking-tight">
                              {productContent.metric}
                            </div>
                            <div className="text-[11px] text-gray-500">
                              {productContent.metricLabel}
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                            {active.id === 'bank' ? (
                              <Building2 className="w-5 h-5 text-blue-600" />
                            ) : (
                              <Users className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-100 space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[11px] text-gray-700">{productContent.feature1}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[11px] text-gray-700">{productContent.feature2}</span>
                          </div>
                        </div>

                        {/* Growth Indicator */}
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-[10px] text-gray-600">Growing network</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Subtle depth shadow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/5 rounded-lg -z-10 translate-y-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                  {/* Secondary Feature */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-gray-50/80 border border-gray-200/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] text-gray-700">Trusted by leading institutions</span>
                  </div>

                  {/* CTA Button - Premium Style */}
                  <motion.button
                    onClick={() => {
                      if (active.href) {
                        router.push(active.href)
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-[13px] font-medium shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <span>Explore {active.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
