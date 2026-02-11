'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, X } from 'lucide-react'
import { navlist } from '@/interface/typesInterfaces'
import Dropdown from './Dropdown'

const paymentnav: navlist[] = [
  { id: 'gateway', label: 'Payment Gateway', icon: '/payments/payment-gateway.svg', href: '/payment-gateway' },
  { id: 'links', label: 'Payment Links', icon: '/payments/payment-links.svg', href: '/payment-links' },
  { id: 'upi', label: 'UPI Collections', icon: '/payments/upi-collections.svg', href: '/upi-collections' },
  { id: 'qr', label: 'QR Code', icon: '/payments/qr-code.svg', href: '/qr-code' },
  { id: 'cross', label: 'Cross-border Payments', icon: '/payments/cross-border-payments.svg', href: '/cross-border-payments' },
  { id: 'voice', label: 'Voice Payments', icon: '/payments/voice-payments.svg', href: '/voice-payments' },
  { id: 'button', label: 'Payment Button', icon: '/payments/payment-button.svg', href: '/payment-button' },
]

const payoutnav: navlist[] = [
  { id: 'bulk', label: 'Bulk Payouts', icon: '/payouts/bulk-payouts.svg', href: '/bulk-payouts' },
  { id: 'vendor', label: 'Vendor Payments', icon: '/payouts/vendor-payments.svg', href: '/vendor-payments' },
  { id: 'bill', label: 'Bill Payments', icon: '/payouts/bill-payments.svg', href: '/bill-payments' },
  { id: 'salary', label: 'Salary Disbursements', icon: '/payouts/salary-disbursements.svg', href: '/salary-disbursements' },
  { id: 'tax', label: 'Tax Payments', icon: '/payouts/tax-payments.svg', href: '/tax-payments' },
  { id: 'invoice', label: 'Invoicing', icon: '/payouts/invoicing.svg', href: '/invoicing' },
  { id: 'rental', label: 'Rental Payments', icon: '/payouts/rental-payments.svg', href: '/rental-payments' },
]

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

const bankingnav: navlist[] = [
  { id: 'banking', label: 'Business Banking', icon: '/business/business-current-account.svg', href: '/business-banking' },
  { id: 'api', label: 'API Banking', icon: '/business/api-banking.svg', href: '/api-banking' },
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-[99] w-full flex justify-center">
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

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-8 text-sm relative">

          {[
            ['payments', 'Payments', paymentnav],
            ['payout', 'Payout', payoutnav],
            ['credit', 'Get Credit', creditnav],
            ['partner', 'Partnerships', paymentnav],
            ['resources', 'Resources', resourcesnav],
            
          ].map(([key, label, items]: any) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="group flex items-center h-14 gap-1">
                {label}
                <ChevronDown className="w-5 h-5 group-hover:rotate-180 duration-300" />
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
    </header>
  )
}
