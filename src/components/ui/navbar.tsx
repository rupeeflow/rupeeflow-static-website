'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { navlist } from '@/interface/typesInterfaces'
import Dropdown from './Dropdown'
import PaymentsDropdown from './PaymentsDropdown'

const creditnav: navlist[] = [
  { id: 'merchant', label: 'Merchant Cash Advance', icon: '/credit/merchant-cash-advance.svg', href: '/merchant-cash-advance' },
  { id: 'nri', label: 'NRI Emergency Loans', icon: '/credit/nri-emergency-loans.svg', href: '/nri-emergency-loans' },
  { id: 'invoicing', label: 'Invoicing Financing', icon: '/credit/invoicing-financing.svg', href: '/invoicing-financing' },
  { id: 'personal', label: 'Personal Credit Line', icon: '/credit/personal-credit-line.svg', href: '/personal-credit-line' },
  { id: 'education', label: 'Education / Medical Loan', icon: '/credit/education-medical-loan.svg', href: '/education-medical-loan' },
  { id: 'check', label: 'Check Eligibility', icon: '/credit/check-eligibility.svg', href: '/check-eligibility' },
]

const resourcesnav: navlist[] = [
  { id: 'blogs', label: 'Blogs', icon: '/resources/blogs.svg', href: '/blog' },
  { id: 'cases', label: 'Case Studies', icon: '/resources/case-studies.svg', href: '/case-studies' },
  { id: 'api', label: 'API Documentation', icon: '/resources/api-documentation.svg', href: '/docs' },
  { id: 'help', label: 'Help Center', icon: '/resources/help-center.svg', href: '/support' },
  { id: 'pricing', label: 'Pricing', icon: '/resources/pricing.svg', href: '/pricing' },
  { id: 'compare', label: 'Compare Products', icon: '/resources/compare-products.svg', href: '/compare-products' },
]

const partnershipsnav: navlist[] = [
  { id: 'banking', label: 'Business Banking', icon: '/business/business-current-account.svg', href: '/business-banking' },
  { id: 'api', label: 'API Banking', icon: '/business/api-banking.svg', href: '/api-banking' },
  { id: 'developer', label: 'Developer Tools', icon: '/business/developer.svg', href: '/developer' },
  { id: 'kirana', label: 'Kirana Partners', icon: '/business/kirana.svg', href: '/kirana-partners' },
  { id: 'msme', label: 'MSME Partners', icon: '/business/msme.svg', href: '/msme-partners' },
  { id: 'nri', label: 'NRI Services', icon: '/business/nri.svg', href: '/nri-services' },
]


const cardTypes: navlist[] = [
  { id: 'business', label: 'Business Cards', icon: '/cards/business-cards.svg', href: '/business-cards' },
  { id: 'corporate', label: 'Corporate Cards', icon: '/cards/corporate-cards.svg', href: '/corporate-cards' },
  { id: 'prepaid', label: 'Prepaid Cards', icon: '/cards/prepaid-cards.svg', href: '/prepaid-cards' },
  { id: 'virtual', label: 'Virtual Cards', icon: '/cards/virtual-cards.svg', href: '/virtual-cards' },
  { id: 'expense', label: 'Expense Management Cards', icon: '/cards/expense-management-cards.svg', href: '/expense-management-cards' },
  { id: 'rewards', label: 'Rewards Cards', icon: '/cards/rewards-cards.svg', href: '/rewards-cards' },
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (key: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveMenu(key)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 200)
  }

  return (
    <header className="fixed top-0 z-[99] w-full flex flex-col items-center">
      <div
        className={`flex transition-all duration-300 ${
          scrolled
            ? 'w-full bg-white/90 shadow-md backdrop-blur-md'
            : 'w-[90%] bg-white rounded-2xl mt-4'
        } items-center justify-between px-6`}
        style={{ maxWidth: scrolled ? '100%' : '1200px' }}
      >
        <Link href="/">
          <Image src="/rflogowhitebg.svg" alt="Logo" width={180} height={36} />
        </Link>

        <nav className="hidden lg:flex gap-8 text-sm relative">

          {/* Payments - mega dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('payments')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="group flex items-center h-14 gap-1">
              Payments
              <ChevronDown className={`w-5 h-5 duration-300 ${activeMenu === 'payments' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {([
            ['credit', 'Get Credit', creditnav],
            ['cards', 'Cards', cardTypes],
            ['partner', 'Partnerships', partnershipsnav],
            ['resources', 'Resources', resourcesnav],
          ] as [string, string, navlist[]][]).map(([key, label, items]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="group flex items-center h-14 gap-1">
                {label}
                <ChevronDown className={`w-5 h-5 duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === key && <Dropdown navitems={items} />}
            </div>
          ))}

        </nav>

        {/* AUTH */}
        <div className="hidden lg:flex gap-4">
          <Link
            href="/login"
            className="border border-emerald-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-50"
          >
            LOGIN
          </Link>

          <Link
            href="/signup"
            className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700"
          >
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Payments mega dropdown - rendered below navbar */}
      {activeMenu === 'payments' && (
        <div
          className="w-full flex justify-center"
          onMouseEnter={() => handleMouseEnter('payments')}
          onMouseLeave={handleMouseLeave}
        >
          <PaymentsDropdown />
        </div>
      )}
    </header>
  )
}
