'use client'

import { navlist } from '@/interface/typesInterfaces'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface DropdownProps {
  navitems: navlist[]
}

export default function Dropdown({ navitems }: DropdownProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  // Find the active item based on current pathname, or default to first item
  const getActiveItem = () => {
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
  }
  
  const [active, setActive] = useState<navlist>(getActiveItem())

  // Update active item when pathname changes
  useEffect(() => {
    setActive(getActiveItem())
  }, [pathname, navitems])

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 w-[760px] flex gap-2 mt-2">

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
                  ? 'border-emerald-500 bg-emerald-50 shadow-sm text-emerald-700'
                  : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700'
              }
            `}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* RIGHT PREVIEW */}
      <div className="flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center min-h-[380px]">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
            <img src={active.icon} alt={active.label} className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{active.label}</h3>
          <p className="text-sm text-gray-600 mb-4">
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
  )
}
