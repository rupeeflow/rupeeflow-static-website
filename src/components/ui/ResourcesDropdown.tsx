'use client'

import { navlist } from '@/interface/typesInterfaces'
import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, BookOpen, FileText, Code, HelpCircle, DollarSign, GitCompare } from 'lucide-react'

interface ResourcesDropdownProps {
  navitems: navlist[]
  scrolled?: boolean
}

export default function ResourcesDropdown({ navitems, scrolled = false }: ResourcesDropdownProps) {
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
      blogs: {
        title: 'Blogs',
        icon: BookOpen,
        metric: '100+ Articles',
        description: 'Industry insights and fintech trends',
        color: 'purple',
      },
      cases: {
        title: 'Case Studies',
        icon: FileText,
        metric: '25+ Success Stories',
        description: 'Real-world implementation examples',
        color: 'blue',
      },
      api: {
        title: 'API Documentation',
        icon: Code,
        metric: 'Complete API Reference',
        description: 'Developer-friendly integration guides',
        color: 'emerald',
      },
      help: {
        title: 'Help Center',
        icon: HelpCircle,
        metric: '24/7 Support',
        description: 'Get answers to your questions',
        color: 'orange',
      },
      pricing: {
        title: 'Pricing',
        icon: DollarSign,
        metric: 'Transparent Pricing',
        description: 'Clear and competitive rates',
        color: 'green',
      },
      compare: {
        title: 'Compare Products',
        icon: GitCompare,
        metric: 'Side-by-side Comparison',
        description: 'Find the right solution for you',
        color: 'indigo',
      },
    }
    return content[itemId as keyof typeof content] || content.blogs
  }

  const productContent = getProductContent(active.id)
  const IconComponent = productContent.icon

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`bg-[var(--card)] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 w-full mt-2 ${scrolled ? '' : 'max-w-[920px] mx-auto'}`}
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
              src="/resources.jpeg" 
              alt="Resources" 
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
                <div className="flex items-start justify-between gap-6">
                  {/* Left: Icon and Title */}
                  <div className="flex-1">
                    {/* Product Icon - Minimal */}
                    <div className="mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[var(--card)] shadow-sm border border-gray-100/50 flex items-center justify-center">
                        <Image src={active.icon} alt={active.label} width={22} height={22} />
                      </div>
                    </div>

                    {/* Title Only */}
                    <div className="mb-6">
                      <h3 className="text-[20px] font-semibold text-gray-900 tracking-tight leading-tight">
                        {productContent.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Resource Card - Top Right Position */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
                    className="flex-shrink-0 w-[220px]"
                  >
                    <div className="relative">
                      {/* Resource Card - Compact Premium Design */}
                      <div className="bg-[var(--card)] backdrop-blur-md rounded-lg p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-200/50">
                        {/* Icon with dynamic color */}
                        <div className={`w-10 h-10 rounded-lg bg-${productContent.color}-50 flex items-center justify-center mb-3`}>
                          <IconComponent className={`w-5 h-5 text-${productContent.color}-600`} />
                        </div>

                        {/* Metric */}
                        <div className="mb-3">
                          <div className="text-[16px] font-semibold text-gray-900 tracking-tight mb-1 leading-tight">
                            {productContent.metric}
                          </div>
                          <p className="text-[10px] text-gray-600 leading-relaxed">
                            {productContent.description}
                          </p>
                        </div>

                        {/* Quick Access Button */}
                        <motion.button
                          onClick={() => {
                            if (active.href) {
                              router.push(active.href)
                            }
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-${productContent.color}-600 text-[var(--foreground)] rounded-lg text-[11px] font-medium shadow-sm hover:shadow-md transition-all duration-200`}
                        >
                          <span>Access Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                      
                      {/* Subtle depth shadow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/5 rounded-lg -z-10 translate-y-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Secondary Feature */}
                <div className="mb-auto mt-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-gray-50/80 border border-gray-200/50">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${productContent.color}-500`} />
                    <span className="text-[11px] text-gray-700">Free access for all users</span>
                  </div>
                </div>

                {/* CTA Button - Premium Style */}
                <div className="mt-5">
                  <motion.button
                    onClick={() => {
                      if (active.href) {
                        router.push(active.href)
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-[var(--foreground)] rounded-lg text-[13px] font-medium shadow-sm hover:shadow-md transition-all duration-200"
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
