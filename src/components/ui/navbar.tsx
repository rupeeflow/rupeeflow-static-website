'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
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
  {
    id: 'bank',
    label: 'For Banks',
    icon: '/business/business-current-account.svg',
    href: '/partnerships/banking',
  },
  {
    id: 'partner',
    label: 'Affiliate Partners',
    icon: '/business/api-banking.svg',
    href: '/partnerships/affiliates',
  },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
    }, 150)
  }

  const closeMenu = () => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
  }

  const handleLinkClick = () => {
    closeMenu()
  }

  return (
    <>
      <header className="fixed top-0 z-[99] w-full flex flex-col items-center">
        <div
          className={`flex transition-all duration-500 ease-out ${
            scrolled
              ? 'w-full bg-white/95 shadow-lg backdrop-blur-xl border-b border-gray-200/50'
              : 'w-[95%] lg:w-[90%] bg-white/98 backdrop-blur-md rounded-2xl mt-4 shadow-xl border border-gray-200/50'
          } items-center justify-between px-4 sm:px-6 relative overflow-hidden`}
          style={{ maxWidth: scrolled ? '100%' : '1200px' }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-transparent to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <Link href="/" className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            <Image src="/rflogowhitebg.svg" alt="Logo" width={180} height={36} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1 text-sm relative z-10">
            {/* Payments - mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('payments')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="group flex items-center h-14 gap-1 px-4 text-gray-700 hover:text-emerald-600 transition-all duration-300 rounded-lg hover:bg-emerald-50/50 relative">
                <span className="relative">
                  Payments
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'payments' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {([
              ['credit', 'Get Credit', creditnav],
              ['cards', 'Cards', cardTypes],
              ['partner', 'Partnerships', partnershipsnav],
              ['resources', 'Resources', resourcesnav],
            ] as [string, string, navlist[]][]).map(([key, label]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="group flex items-center h-14 gap-1 px-4 text-gray-700 hover:text-emerald-600 transition-all duration-300 rounded-lg hover:bg-emerald-50/50 relative">
                  <span className="relative">
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
          </nav>

          {/* AUTH Buttons */}
          <div className="hidden lg:flex gap-3 relative z-10">
            <Link
              href="/contact"
              className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative">CONTACT US</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Payments mega dropdown - rendered below navbar */}
        {activeMenu === 'payments' && (
          <div
            className={`flex justify-center animate-in fade-in slide-in-from-top-2 duration-200 ${
              scrolled ? 'w-full' : 'w-[95%] lg:w-[90%] max-w-[1200px]'
            }`}
            onMouseEnter={() => handleMouseEnter('payments')}
            onMouseLeave={handleMouseLeave}
          >
            <div onClick={handleLinkClick} className="w-full">
              <PaymentsDropdown />
            </div>
          </div>
        )}

        {/* Get Credit dropdown */}
        {activeMenu === 'credit' && (
          <div
            className={`flex justify-center animate-in fade-in slide-in-from-top-2 duration-200 ${
              scrolled ? 'w-full' : 'w-[95%] lg:w-[90%] mx-auto'
            }`}
            style={{ maxWidth: scrolled ? 'none' : '1200px' }}
            onMouseEnter={() => handleMouseEnter('credit')}
            onMouseLeave={handleMouseLeave}
          >
            <div onClick={handleLinkClick} className="w-full">
              <Dropdown navitems={creditnav} scrolled={scrolled} />
            </div>
          </div>
        )}

        {/* Cards dropdown */}
        {activeMenu === 'cards' && (
          <div
            className={`flex justify-center animate-in fade-in slide-in-from-top-2 duration-200 ${
              scrolled ? 'w-full' : 'w-[95%] lg:w-[90%] mx-auto'
            }`}
            style={{ maxWidth: scrolled ? 'none' : '1200px' }}
            onMouseEnter={() => handleMouseEnter('cards')}
            onMouseLeave={handleMouseLeave}
          >
            <div onClick={handleLinkClick} className="w-full">
              <Dropdown navitems={cardTypes} scrolled={scrolled} />
            </div>
          </div>
        )}

        {/* Partnerships dropdown */}
        {activeMenu === 'partner' && (
          <div
            className={`flex justify-center animate-in fade-in slide-in-from-top-2 duration-200 ${
              scrolled ? 'w-full' : 'w-[95%] lg:w-[90%] mx-auto'
            }`}
            style={{ maxWidth: scrolled ? 'none' : '1200px' }}
            onMouseEnter={() => handleMouseEnter('partner')}
            onMouseLeave={handleMouseLeave}
          >
            <div onClick={handleLinkClick} className="w-full">
              <Dropdown navitems={partnershipsnav} scrolled={scrolled} />
            </div>
          </div>
        )}

        {/* Resources dropdown */}
        {activeMenu === 'resources' && (
          <div
            className={`flex justify-center animate-in fade-in slide-in-from-top-2 duration-200 ${
              scrolled ? 'w-full' : 'w-[95%] lg:w-[90%] mx-auto'
            }`}
            style={{ maxWidth: scrolled ? 'none' : '1200px' }}
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <div onClick={handleLinkClick} className="w-full">
              <Dropdown navitems={resourcesnav} scrolled={scrolled} />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[98] lg:hidden animate-in fade-in duration-300"
          onClick={closeMenu}
        >
          <div
            className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-2">
              <Link
                href="/payments"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              >
                Payments
              </Link>
              <Link
                href="/credit"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              >
                Get Credit
              </Link>
              <Link
                href="/cards"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              >
                Cards
              </Link>
              <Link
                href="/partnerships"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              >
                Partnerships
              </Link>
              <Link
                href="/resources"
                onClick={closeMenu}
                className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              >
                Resources
              </Link>

              <div className="border-t border-gray-200 my-4"></div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-3 text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
