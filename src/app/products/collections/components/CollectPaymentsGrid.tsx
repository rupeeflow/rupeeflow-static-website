'use client'

import Image from 'next/image'
import Link from 'next/link'

const collectPayments = [
  {
    id: 'gateway',
    title: 'Payment Gateway',
    desc: 'Fast, secure payment collection',
    icon: '/payments/payment-gateway.svg',
    href: '/payment-gateway',
  },
  {
    id: 'links',
    title: 'Payment Links',
    desc: 'Create & send links to get paid',
    icon: '/payments/payment-links.svg',
    href: '/payment-links',
  },
  {
    id: 'button',
    title: 'Payment Button',
    desc: 'Custom payment buttons',
    icon: '/payments/payment-button.svg',
    href: '/payment-button',
  },
  {
    id: 'pos',
    title: 'Smart POS',
    desc: 'Accept payments anywhere — card, UPI & QR',
    icon: '/payments/qr-code.svg',
    href: '/smart-pos',
  },
  {
    id: 'upi',
    title: 'UPI Collections',
    desc: 'Accept UPI payments with ease',
    icon: '/payments/upi-collections.svg',
    href: '/upi-collections',
  },
  {
    id: 'cashpoint',
    title: 'UPI Cashpoint',
    desc: 'Offline & on-device UPI cash collection',
    icon: '/images/upi-cashpoint/upi cashpoint logo.png',
    href: '/upi-cashpoint',
  },
  {
    id: 'prepaid',
    title: 'Prepaid Cards',
    desc: 'Prepaid, virtual & corporate cards',
    icon: '/prepaid cards/prepaid cards logo.png',
    href: '/prepaid-cards',
  },
  {
    id: 'qr',
    title: 'QR Code',
    desc: 'Multiple QRs for payment collection',
    icon: '/payments/qr-code.svg',
    href: '/qr-code',
  },
]

export default function CollectPaymentsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-bold text-emerald-600 tracking-wider uppercase mb-10">
          COLLECT PAYMENTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collectPayments.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors"
            >
              <div className={`${item.id === 'cashpoint' || item.id === 'prepaid' ? 'w-16 h-16' : 'w-14 h-14'} shrink-0 flex items-center justify-center`}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={item.id === 'cashpoint' || item.id === 'prepaid' ? 64 : 56}
                  height={item.id === 'cashpoint' || item.id === 'prepaid' ? 64 : 56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
