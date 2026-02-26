'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navlist } from '@/interface/typesInterfaces'
import Dropdown from './Dropdown'
import PaymentsDropdown from './PaymentsDropdown'
import CreditDropdown from './CreditDropdown'
import CardsDropdown from './CardsDropdown'
import PartnershipsDropdown from './PartnershipsDropdown'
import ResourcesDropdown from './ResourcesDropdown'

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
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null)
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
    setMobileExpandedSection(null)
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
              <CreditDropdown navitems={creditnav} scrolled={scrolled} />
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
              <CardsDropdown navitems={cardTypes} scrolled={scrolled} />
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
              <PartnershipsDropdown navitems={partnershipsnav} scrolled={scrolled} />
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
              <ResourcesDropdown navitems={resourcesnav} scrolled={scrolled} />
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
              {/* Payments Section */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'payments' ? null : 'payments')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                >
                  <span className="font-medium">Payments</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'payments' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'payments' && (
                  <div className="mt-2 ml-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
                    {/* Collect Payments */}
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide px-4 mb-2">Collect Payments</p>
                      <div className="space-y-1">
                        <Link href="/payment-gateway" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payments/payment-gateway.svg" alt="" width={20} height={20} />
                          Payment Gateway
                        </Link>
                        <Link href="/payment-links" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payments/payment-links.svg" alt="" width={20} height={20} />
                          Payment Links
                        </Link>
                        <Link href="/payment-button" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payments/payment-button.svg" alt="" width={20} height={20} />
                          Payment Button
                        </Link>
                        <Link href="/upi-collections" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payments/upi-collections.svg" alt="" width={20} height={20} />
                          UPI Collections
                        </Link>
                        <Link href="/qr-code" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payments/qr-code.svg" alt="" width={20} height={20} />
                          QR Code
                        </Link>
                        <Link href="/cross-border-payments" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payments/cross-border-payments.svg" alt="" width={20} height={20} />
                          Cross-border Payments
                        </Link>
                      </div>
                    </div>

                    {/* Make Payments */}
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide px-4 mb-2 mt-3">Make Payments</p>
                      <div className="space-y-1">
                        <Link href="/bulk-payouts" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/bulk-payouts.svg" alt="" width={20} height={20} />
                          Bulk Payouts
                        </Link>
                        <Link href="/vendor-payments" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/vendor-payments.svg" alt="" width={20} height={20} />
                          Vendor Payments
                        </Link>
                        <Link href="/bill-payments" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/bill-payments.svg" alt="" width={20} height={20} />
                          Bill Payments
                        </Link>
                        <Link href="/salary-disbursements" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/salary-disbursements.svg" alt="" width={20} height={20} />
                          Salary Disbursements
                        </Link>
                        <Link href="/tax-payments" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/tax-payments.svg" alt="" width={20} height={20} />
                          Tax Payments
                        </Link>
                        <Link href="/invoicing" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/invoicing.svg" alt="" width={20} height={20} />
                          Invoicing
                        </Link>
                        <Link href="/rental-payments" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/rental-payments.svg" alt="" width={20} height={20} />
                          Rental Payments
                        </Link>
                      </div>
                    </div>

                    {/* Payable & Receivable+ */}
                    <div>
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide px-4 mb-2 mt-3">Payable & Receivable+</p>
                      <div className="space-y-1">
                        <Link href="/payment-reminders" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/features/clock.svg" alt="" width={20} height={20} />
                          Payment Reminders
                        </Link>
                        <Link href="/e-invoicing" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/invoicing.svg" alt="" width={20} height={20} />
                          E-Invoicing
                        </Link>
                        <Link href="/analytics" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/resources/case-studies.svg" alt="" width={20} height={20} />
                          Analytics
                        </Link>
                        <Link href="/auto-reconciliation" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/features/bill.svg" alt="" width={20} height={20} />
                          Auto Reconciliation
                        </Link>
                        <Link href="/invoice-management" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/invoicing.svg" alt="" width={20} height={20} />
                          Invoice Management
                        </Link>
                        <Link href="/vendor-management" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/payouts/vendor-payments.svg" alt="" width={20} height={20} />
                          Vendor Management
                        </Link>
                        <Link href="/payable-analytics" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/resources/pricing.svg" alt="" width={20} height={20} />
                          Payable Analytics
                        </Link>
                        <Link href="/cashflow-analytics" onClick={closeMenu} className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                          <Image src="/home/wallet.svg" alt="" width={20} height={20} />
                          Cashflow Analytics
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Get Credit Section */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'credit' ? null : 'credit')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                >
                  <span className="font-medium">Get Credit</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'credit' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'credit' && (
                  <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {creditnav.map((item) => (
                      <Link 
                        key={item.id}
                        href={item.href} 
                        onClick={closeMenu} 
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                      >
                        <Image src={item.icon} alt="" width={20} height={20} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Cards Section */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'cards' ? null : 'cards')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                >
                  <span className="font-medium">Cards</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'cards' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'cards' && (
                  <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {cardTypes.map((item) => (
                      <Link 
                        key={item.id}
                        href={item.href} 
                        onClick={closeMenu} 
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                      >
                        <Image src={item.icon} alt="" width={20} height={20} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Partnerships Section */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'partnerships' ? null : 'partnerships')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                >
                  <span className="font-medium">Partnerships</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'partnerships' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'partnerships' && (
                  <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {partnershipsnav.map((item) => (
                      <Link 
                        key={item.id}
                        href={item.href} 
                        onClick={closeMenu} 
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                      >
                        <Image src={item.icon} alt="" width={20} height={20} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div>
                <button
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'resources' ? null : 'resources')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                >
                  <span className="font-medium">Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'resources' && (
                  <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {resourcesnav.map((item) => (
                      <Link 
                        key={item.id}
                        href={item.href} 
                        onClick={closeMenu} 
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                      >
                        <Image src={item.icon} alt="" width={20} height={20} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
