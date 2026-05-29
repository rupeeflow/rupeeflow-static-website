'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { navlist } from '@/interface/typesInterfaces'

const collectPayments: navlist[] = [
  { id: 'gateway', label: 'Payment Gateway', desc: 'Fast, secure payment collection', icon: '/payments/payment-gateway.svg', href: '/payment-gateway' },
  { id: 'links', label: 'Payment Links', desc: 'Create & send links to get paid', icon: '/payments/payment-links.svg', href: '/payment-links' },
  { id: 'button', label: 'Payment Button', desc: 'Custom payment buttons', icon: '/payments/payment-button.svg', href: '/payment-button' },
  { id: 'pos', label: 'Smart POS', desc: 'Accept payments anywhere — card, UPI & QR', icon: '/payments/qr-code.svg', href: '/smart-pos' },
  { id: 'upi', label: 'UPI Collections', desc: 'Accept UPI payments with ease', icon: '/payments/upi-collections.svg', href: '/upi-collections' },
  { id: 'qr', label: 'QR Code', desc: 'Multiple QRs for payment collection', icon: '/payments/qr-code.svg', href: '/qr-code' },
  { id: 'cross', label: 'Cross-border Payments', desc: 'International payment solutions', icon: '/payments/cross-border-payments.svg', href: '/cross-border-payments' },
  // { id: 'voice', label: 'Voice Payments', desc: 'Accept payments via voice', icon: '/payments/voice-payments.svg', href: '/voice-payments' },
]

const makePayments: navlist[] = [
  { id: 'bulk', label: 'Bulk Payouts', desc: 'Mass payments in one click', icon: '/payouts/bulk-payouts.svg', href: '/bulk-payouts' },
  { id: 'vendor', label: 'Vendor Payments', desc: 'Pay vendors instantly', icon: '/payouts/vendor-payments.svg', href: '/vendor-payments' },
  { id: 'bill', label: 'Bill Payments', desc: 'Auto-fetch & pay utility bills', icon: '/payouts/bill-payments.svg', href: '/bill-payments' },
  { id: 'salary', label: 'Salary Disbursements', desc: 'Disburse salaries on time', icon: '/payouts/salary-disbursements.svg', href: '/salary-disbursements' },
  { id: 'tax', label: 'Tax Payments', desc: 'Pay & track tax payments', icon: '/payouts/tax-payments.svg', href: '/tax-payments' },
  { id: 'invoice', label: 'Invoicing', desc: 'Digital invoice management', icon: '/payouts/invoicing.svg', href: '/invoicing' },
  { id: 'rental', label: 'Rental Payments', desc: 'Never miss rent deadlines', icon: '/payouts/rental-payments.svg', href: '/rental-payments' },
]

const payableReceivable: navlist[] = [
  { id: 'payment-reminders', label: 'Payment Reminders', icon: '/features/clock.svg', href: '/payment-reminders' },
  { id: 'e-invoicing', label: 'E-Invoicing', icon: '/payouts/invoicing.svg', href: '/e-invoicing' },
  { id: 'analytics', label: 'Analytics', icon: '/resources/case-studies.svg', href: '/analytics' },
  { id: 'auto-reconciliation', label: 'Auto Reconciliation', icon: '/features/bill.svg', href: '/auto-reconciliation' },
  { id: 'invoice-management', label: 'Invoice Management', icon: '/payouts/invoicing.svg', href: '/invoice-management' },
  { id: 'vendor-management', label: 'Vendor Management', icon: '/payouts/vendor-payments.svg', href: '/vendor-management' },
  { id: 'payable-analytics', label: 'Payable Analytics', icon: '/resources/pricing.svg', href: '/payable-analytics' },
  { id: 'cashflow-analytics', label: 'Cashflow Analytics', icon: '/home/wallet.svg', href: '/cashflow-analytics' },
];

export default function PaymentsDropdown() {
  const [hoveredItem, setHoveredItem] = useState<navlist | null>(null)
  const router = useRouter()

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-b-2xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden">
      <div className="h-1 bg-emerald-500 dark:bg-emerald-400" />

      <div className="flex min-h-[420px] max-w-[1200px] mx-auto px-4">
        <div className="flex-[2.5] p-6 pr-5">
          <h3 className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-5">
            Collect Payments
          </h3>
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            {collectPayments.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredItem(item)}
                onClick={() => router.push(item.href)}
                className="flex items-start gap-2.5 text-left group"
              >
                <div className="w-5 h-5 mt-0.5 shrink-0 relative opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image src={item.icon} alt="" width={20} height={20} className="w-full h-full" />
                </div>
                <div>
                  <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                    {item.label}
                  </span>
                  {item.desc && (
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 pt-3 border-t border-gray-100 dark:border-gray-700">
            <a href="/products/collections" className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
              Explore Collect Payments →
            </a>
          </div>
        </div>

        {/* MAKE PAYMENTS */}
        <div className="flex-[1.5] px-5 py-6 border-x border-gray-100 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-900/30">
          <h3 className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-5">
            Make Payments
          </h3>
          <div className="space-y-3.5">
            {makePayments.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredItem(item)}
                onClick={() => router.push(item.href)}
                className="flex items-start gap-2.5 text-left group w-full"
              >
                <div className="w-5 h-5 mt-0.5 shrink-0 relative opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image src={item.icon} alt="" width={20} height={20} className="w-full h-full" />
                </div>
                <div>
                  <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                    {item.label}
                  </span>
                  {item.desc && (
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 pt-3 border-t border-gray-200 dark:border-gray-700">
            <a href="/products/make-payments/explore" className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
              Explore Make Payments →
            </a>
          </div>
        </div>

        {/* PAYABLE & RECEIVABLE+ */}
        <div className="flex-[2.5] p-6 pl-5 flex flex-col">
          <h3 className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-5">
            Payable & Receivable+
          </h3>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 ">
            {payableReceivable.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredItem(item)}
                onClick={() => router.push(item.href)}
                className="flex items-center gap-2.5 text-left group self-start"
              >
                <div className="w-5 h-5 shrink-0 relative opacity-70 group-hover:opacity-100 transition-opacity">
                  <Image src={item.icon} alt="" width={20} height={20} className="w-full h-full" />
                </div>
                <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom preview strip - changes on hover */}
      <div className="border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30 px-6 py-4 flex items-center gap-4 min-h-[60px]">
        {hoveredItem ? (
          <>
            <div className="w-8 h-8 relative opacity-80">
              <Image src={hoveredItem.icon} alt={hoveredItem.label} width={32} height={32} className="w-full h-full" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{hoveredItem.label}</p>
              {hoveredItem.desc && (
                <p className="text-xs text-gray-400 dark:text-gray-500">{hoveredItem.desc}</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-xs text-gray-400 dark:text-gray-500">Hover over a product to learn more</p>
        )}
      </div>
    </div>
  )
}
