'use client'

import { navlist } from '@/interface/typesInterfaces'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface DropdownProps {
  navitems: navlist[]
}

export default function Dropdown({ navitems }: DropdownProps) {
  const [active, setActive] = useState<navlist>(navitems[0])
  const router = useRouter()

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl h-[380px] p-4 w-[760px] flex gap-2 z-20">

      {/* LEFT LIST */}
      <div className="w-[260px] space-y-2 h-full overflow-y-auto">
        {navitems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item)
              if (item.href) {
                router.push(item.href)
              }
            }}
            className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg border text-left transition
              ${
                active?.id === item.id
                  ? 'border-emerald-500 shadow'
                  : 'border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* RIGHT PREVIEW */}
      <div className="flex-1 bg-[#737373] rounded-xl h-full" />
    </div>
  )
}
