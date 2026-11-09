'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { industrySolutions } from '@/data/industrySolutions'

const SOLUTION_ORDER = [
  'b2b-manufacturing',
  'cafe',
  'restaurants',
  'retail',
  'beverages',
  'saas',
  'ecommerce',
  'education',
  'bfsi',
  'freelance',
] as const

type Props = {
  onNavigate?: () => void
}

export default function SolutionsDropdown({ onNavigate }: Props) {
  const pathname = usePathname()
  const orderedSolutions = SOLUTION_ORDER.map(
    slug => industrySolutions.find(item => item.slug === slug)!
  )

  return (
    <div className="mt-2 w-full max-w-[360px] rounded-xl border border-gray-100 bg-white shadow-2xl">
      <div className="px-5 pb-2 pt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          Solutions
        </p>
      </div>
      <div className="max-h-[70vh] overflow-y-auto px-2 pb-3">
        {orderedSolutions.map(item => {
          const href = `/solutions/${item.slug}`
          const normalizedPath =
            pathname.endsWith('/') && pathname !== '/'
              ? pathname.slice(0, -1)
              : pathname
          const active = normalizedPath === href

          return (
            <Link
              key={item.slug}
              href={href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[17px] font-semibold transition ${
                active
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-[#1f2a44] hover:bg-gray-50 hover:text-emerald-700'
              }`}
            >
              <span
                className={`h-5 w-[3px] rounded-full ${
                  active ? 'bg-emerald-500' : 'bg-transparent'
                }`}
              />
              <Image
                src={item.navIcon}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              <span>{item.shortLabel}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
