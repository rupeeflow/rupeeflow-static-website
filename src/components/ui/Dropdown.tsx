'use client'

import { navlist } from '@/interface/typesInterfaces'
import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

interface DropdownProps {
  navitems: navlist[]
  scrolled?: boolean
}

export default function Dropdown({ navitems, scrolled = false }: DropdownProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  // Find the active item based on current pathname, or default to first item
  const getActiveItem = useCallback(() => {
    // Normalize pathname by removing trailing slash
    const normalizedPathname = pathname.endsWith('/') && pathname !== '/' 
      ? pathname.slice(0, -1) 
      : pathname
    
    const matchedItem = navitems.find(item => {
      // Normalize item href as well
      const normalizedHref = item.href.endsWith('/') && item.href !== '/' 
        ? item.href.slice(0, -1) 
        : item.href
      return normalizedHref === normalizedPathname
    })
    
    return matchedItem || navitems[0]
  }, [pathname, navitems])
  
  const [active, setActive] = useState<navlist>(getActiveItem())

  // Update active item when pathname changes
  useEffect(() => {
    setActive(getActiveItem())
  }, [pathname, navitems, getActiveItem])

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 w-full mt-2 ${scrolled ? '' : 'max-w-[760px] mx-auto'}`}>
      <div className={`flex gap-2 p-4 ${scrolled ? 'max-w-[900px] mx-auto' : ''}`}>
        {/* LEFT LIST */}
        <div className="w-[260px] space-y-2 max-h-[380px] overflow-y-auto">
        {navitems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item)
              if (item.href) {
                router.push(item.href)
              }
            }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-all duration-200
              ${
                active?.id === item.id
                  ? 'border-emerald-500 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 shadow-sm text-emerald-700 dark:text-emerald-300'
                  : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-200'
              }
            `}
          >
            <div className="w-6 h-6 relative">
              <Image src={item.icon} alt={item.label} width={24} height={24} className="w-full h-full" />
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* RIGHT PREVIEW */}
      <div className="flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl flex items-center justify-center min-h-[380px]">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg dark:shadow-gray-900/50">
            <div className="w-10 h-10 relative">
              <Image src={active.icon} alt={active.label} width={40} height={40} className="w-full h-full" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{active.label}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Explore our {active.label.toLowerCase()} solutions
          </p>
          <button
            onClick={() => {
              if (active.href) {
                router.push(active.href)
              }
            }}
            className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}
