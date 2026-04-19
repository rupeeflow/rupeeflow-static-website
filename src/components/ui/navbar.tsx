'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
  { id: 'bank', label: 'For Banks', icon: '/business/business-current-account.svg', href: '/partnerships/banking' },
  { id: 'partner', label: 'Affiliate Partners', icon: '/business/api-banking.svg', href: '/partnerships/affiliates' },
]

const paymentsNav: navlist[] = [
  { id: 'gateway', label: 'Payment Gateway', icon: '/payments/payment-gateway.svg', href: '/payment-gateway' },
  { id: 'links', label: 'Payment Links', icon: '/payments/payment-links.svg', href: '/payment-links' },
  { id: 'upi', label: 'UPI Collections', icon: '/payments/upi-collections.svg', href: '/upi-collections' },
  { id: 'qr', label: 'QR Code', icon: '/payments/qr-code.svg', href: '/qr-code' },
  { id: 'button', label: 'Payment Button', icon: '/payments/payment-button.svg', href: '/payment-button' },
  { id: 'cross', label: 'Cross-border Payments', icon: '/payments/cross-border-payments.svg', href: '/cross-border-payments' },
]

const makePaymentsNav: navlist[] = [
  { id: 'bulk', label: 'Bulk Payouts', icon: '/payouts/bulk-payouts.svg', href: '/bulk-payouts' },
  { id: 'vendor', label: 'Vendor Payments', icon: '/payouts/vendor-payments.svg', href: '/vendor-payments' },
  { id: 'bill', label: 'Bill Payments', icon: '/payouts/bill-payments.svg', href: '/bill-payments' },
  { id: 'salary', label: 'Salary Disbursements', icon: '/payouts/salary-disbursements.svg', href: '/salary-disbursements' },
  { id: 'tax', label: 'Tax Payments', icon: '/payouts/tax-payments.svg', href: '/tax-payments' },
  { id: 'invoice', label: 'Invoicing', icon: '/payouts/invoicing.svg', href: '/invoicing' },
  { id: 'rental', label: 'Rental Payments', icon: '/payouts/rental-payments.svg', href: '/rental-payments' },
]

const payableReceivableNav: navlist[] = [
  { id: 'payment-reminders', label: 'Payment Reminders', icon: '/features/clock.svg', href: '/payment-reminders' },
  { id: 'e-invoicing', label: 'E-Invoicing', icon: '/payouts/invoicing.svg', href: '/e-invoicing' },
  { id: 'analytics', label: 'Analytics', icon: '/resources/case-studies.svg', href: '/analytics' },
  { id: 'auto-reconciliation', label: 'Auto Reconciliation', icon: '/features/bill.svg', href: '/auto-reconciliation' },
  { id: 'invoice-management', label: 'Invoice Management', icon: '/payouts/invoicing.svg', href: '/invoice-management' },
  { id: 'vendor-management', label: 'Vendor Management', icon: '/payouts/vendor-payments.svg', href: '/vendor-management' },
  { id: 'payable-analytics', label: 'Payable Analytics', icon: '/resources/pricing.svg', href: '/payable-analytics' },
  { id: 'cashflow-analytics', label: 'Cashflow Analytics', icon: '/home/wallet.svg', href: '/cashflow-analytics' },
]

const mobileSections = [
  { key: 'collect-payments', label: 'Collect Payments', items: paymentsNav },
  { key: 'whatsapp-banking', label: 'WhatsApp Banking', items: [] },
  { key: 'make-payments', label: 'Make Payments', items: makePaymentsNav },
  { key: 'payable-receivable', label: 'Payable & Receivable+', items: payableReceivableNav },
  { key: 'credit', label: 'Get Credit', items: creditnav },
  { key: 'partner', label: 'Partnerships', items: partnershipsnav },
  { key: 'developers', label: 'Developers', items: resourcesnav },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const handleMouseEnter = (key: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setActiveMenu(key)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  const closeAll = () => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
    setActiveMobileSection(null)
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
  }

  const toggleMobileSection = (key: string) =>
    setActiveMobileSection(prev => prev === key ? null : key)

  return (
    <>
      {/* ─────────── HEADER BAR ─────────── */}
      <header className="fixed top-0 z-[99] w-full flex flex-col items-center">
        <div
          className={`flex transition-all duration-500 ease-out ${
            scrolled
              ? 'w-full bg-white/95 shadow-lg backdrop-blur-xl border-b border-gray-200/50'
              : 'w-[95%] lg:w-[90%] bg-white/98 backdrop-blur-md rounded-2xl mt-4 shadow-xl border border-gray-200/50'
          } items-center justify-between px-4 sm:px-6 relative`}
          style={{ maxWidth: scrolled ? '100%' : '1200px' }}
        >
          {/* Logo */}
          <Link href="/" className="relative z-10 shrink-0 transform hover:scale-105 transition-transform duration-300" onClick={closeAll}>
            <Image src="/rflogowhitebg.svg" alt="RupeeFlow" width={180} height={36} className="h-8 w-auto" />
          </Link>

          {/* ── Desktop Navigation (lg+) ── */}
          <nav className="hidden lg:flex gap-1 text-sm relative z-10">
            <div className="relative" onMouseEnter={() => handleMouseEnter('payments')} onMouseLeave={handleMouseLeave}>
              <button className="group flex items-center h-14 gap-1 px-4 text-gray-700 hover:text-emerald-600 transition-all duration-300 rounded-lg hover:bg-emerald-50/50">
                <span className="relative">
                  Payments
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'payments' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link
              href="/whatsapp-banking"
              className="group flex items-center h-14 px-4 text-gray-700 hover:text-emerald-600 transition-all duration-300 rounded-lg hover:bg-emerald-50/50"
            >
              <span className="relative">
                WhatsApp Banking
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </span>
            </Link>

            {([
              ['credit', 'Get Credit', creditnav],
              ['partner', 'Partnerships', partnershipsnav],
              ['developers', 'Developers', resourcesnav],
            ] as [string, string, navlist[]][]).map(([key, label]) => (
              <div key={key} className="relative" onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={handleMouseLeave}>
                <button className="group flex items-center h-14 gap-1 px-4 text-gray-700 hover:text-emerald-600 transition-all duration-300 rounded-lg hover:bg-emerald-50/50">
                  <span className="relative">
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === key ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
          </nav>

          {/* ── Desktop CTA (lg+) ── */}
          <div className="hidden lg:flex gap-3 relative z-10">
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 overflow-hidden animate-pulse"
            >
              <span className="absolute inset-0 bg-[#128C7E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative">Try on WhatsApp →</span>
            </Link>
          </div>

          {/* ── Mobile Hamburger (below lg) ── */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden relative z-10 p-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />
            }
          </button>
        </div>

        {/* ── Desktop mega/dropdowns — ONLY rendered on lg+ ── */}
        <div className="hidden lg:contents">
          {activeMenu === 'payments' && (
            <div className="w-full flex justify-center animate-in fade-in slide-in-from-top-2 duration-200" onMouseEnter={() => handleMouseEnter('payments')} onMouseLeave={handleMouseLeave}>
              <div onClick={closeAll}><PaymentsDropdown /></div>
            </div>
          )}
          {activeMenu === 'credit' && (
            <div className="w-full flex justify-center animate-in fade-in slide-in-from-top-2 duration-200" onMouseEnter={() => handleMouseEnter('credit')} onMouseLeave={handleMouseLeave}>
              <div onClick={closeAll}><Dropdown navitems={creditnav} /></div>
            </div>
          )}
          {activeMenu === 'partner' && (
            <div className="w-full flex justify-center animate-in fade-in slide-in-from-top-2 duration-200" onMouseEnter={() => handleMouseEnter('partner')} onMouseLeave={handleMouseLeave}>
              <div onClick={closeAll}><Dropdown navitems={partnershipsnav} /></div>
            </div>
          )}
          {activeMenu === 'developers' && (
            <div className="w-full flex justify-center animate-in fade-in slide-in-from-top-2 duration-200" onMouseEnter={() => handleMouseEnter('developers')} onMouseLeave={handleMouseLeave}>
              <div onClick={closeAll}><Dropdown navitems={resourcesnav} /></div>
            </div>
          )}
        </div>
      </header>

      {/* ─────────── MOBILE DRAWER (below lg) ─────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAll}
            />

            {/* Drawer panel — slides in from the right */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[101] w-[280px] bg-white flex flex-col shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <Image src="/rflogowhitebg.svg" alt="RupeeFlow" width={140} height={28} className="h-7 w-auto" />
                <button
                  onClick={closeAll}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable nav links */}
              <nav className="flex-1 overflow-y-auto py-2">
                {mobileSections.map(({ key, label, items }) => {
                  const isOpen = activeMobileSection === key
                  
                  // Handle WhatsApp Banking as a direct link
                  if (key === 'whatsapp-banking') {
                    return (
                      <Link
                        key={key}
                        href="/whatsapp-banking"
                        onClick={closeAll}
                        className="w-full flex items-center px-5 py-3.5 text-gray-800 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <span className="text-sm font-semibold">{label}</span>
                      </Link>
                    )
                  }
                  
                  return (
                    <div key={key}>
                      <button
                        onClick={() => toggleMobileSection(key)}
                        className="w-full flex items-center justify-between px-5 py-3.5 text-gray-800 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <span className="text-sm font-semibold">{label}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                        >
                          <ChevronDown className={`w-4 h-4 transition-colors duration-200 ${isOpen ? 'text-emerald-500' : 'text-gray-400'}`} />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="bg-gray-50 px-3 pb-2 pt-1">
                              {items.map((item, idx) => (
                                <motion.div
                                  key={item.id}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.18, delay: idx * 0.04, ease: 'easeOut' }}
                                >
                                  <Link
                                    href={item.href}
                                    onClick={closeAll}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-colors group"
                                  >
                                    {item.icon && (
                                      <div className="w-7 h-7 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                                        <Image src={item.icon} alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                                      </div>
                                    )}
                                    <span className="text-xs text-gray-600 group-hover:text-emerald-600 font-medium leading-tight">
                                      {item.label}
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </nav>

              {/* CTA at bottom */}
              <div className="p-4 border-t border-gray-100">
                <Link
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeAll}
                  className="block w-full py-3 text-center bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-200"
                >
                  Try on WhatsApp →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
