'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, ArrowDownCircle, ArrowUpCircle, Key, HelpCircle } from 'lucide-react'

const navItems = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    href: '/docs',
  },
  {
    title: 'Authentication',
    icon: Key,
    href: '/docs/authentication',
  },
  {
    title: 'Pay-In API',
    icon: ArrowDownCircle,
    href: '/docs/payin',
    subItems: [
      { title: 'Create Transaction', href: '/docs/payin#initiate-payin-transaction' },
      { title: 'Check Status', href: '/docs/payin#check-payin-transaction-status' },
      { title: 'Webhook', href: '/docs/payin#payin-webhook-response' },
    ],
  },
  {
    title: 'Pay-Out API',
    icon: ArrowUpCircle,
    href: '/docs/payout',
    subItems: [
      { title: 'Create Payout', href: '/docs/payout#initiate-payout-transaction' },
      { title: 'Check Status', href: '/docs/payout#check-payout-transaction-status' },
      { title: 'Webhook', href: '/docs/payout#payout-webhook-response' },
      { title: 'Wallet Balance', href: '/docs/payout#payout-wallet' },
    ],
  },
  {
    title: 'FAQ',
    icon: HelpCircle,
    href: '/docs/faq',
  },
]

export default function DocsSidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/docs' && pathname === '/docs') return true
    if (href !== '/docs' && pathname?.startsWith(href)) return true
    return false
  }

  return (
    <aside className="w-64 border-r border-gray-800 h-[calc(100vh-96px)] sticky top-24 overflow-y-auto">
      <div className="p-6">
        <h2 className="fontheading text-xl text-white mb-4">API Documentation</h2>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all fontbody2 ${
                    active
                      ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-400 border border-teal-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.title}
                </Link>

                {/* Sub Items */}
                {item.subItems && active && (
                  <div className="ml-7 mt-1 space-y-1 border-l border-gray-700 pl-3">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block py-1.5 text-sm text-gray-500 hover:text-teal-400 transition-colors fontbody2"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
