'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CreditCard, Link as LinkIcon, QrCode, Wallet, Send, Users, Banknote, Receipt } from 'lucide-react';

/**
 * Payment Methods Grid Component
 * Displays all available payment methods with icons, descriptions, and links
 * Requirements: 2.3, 12.1, 12.2, 12.7
 */
export default function PaymentMethodsGrid() {
  const paymentMethods = [
    {
      icon: LinkIcon,
      title: 'Payment Links',
      description: 'Create and share payment links instantly. No coding required, perfect for quick payments and invoicing.',
      href: '/payment-links',
      features: ['No code required', 'Instant setup', 'Share via SMS/Email', 'Track payments'],
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway',
      description: 'Accept online payments with our secure payment gateway. Support for cards, UPI, wallets, and net banking.',
      href: '/payment-gateway',
      features: ['Multiple payment modes', 'ISO 27001 compliant', 'Instant settlements', 'Fraud detection'],
    },
    {
      icon: QrCode,
      title: 'QR Code Payments',
      description: 'Generate dynamic and static QR codes for instant payments. Perfect for in-store and contactless transactions.',
      href: '/qr-payments',
      features: ['Dynamic QR codes', 'Contactless payments', 'Real-time notifications', 'Easy reconciliation'],
    },
    {
      icon: Wallet,
      title: 'UPI Collections',
      description: 'Collect payments via UPI with automatic reconciliation and instant notifications. Support for all UPI apps.',
      href: '/upi-collections',
      features: ['All UPI apps supported', 'Auto reconciliation', 'Instant notifications', 'Virtual UPI IDs'],
    },
    {
      icon: Send,
      title: 'Bulk Payouts',
      description: 'Send money to multiple recipients instantly. Perfect for vendor payments, refunds, and cashback.',
      href: '/bulk-payouts',
      features: ['Bulk transfers', 'Excel upload', 'Approval workflows', 'Real-time tracking'],
    },
    {
      icon: Users,
      title: 'Vendor Payments',
      description: 'Automate vendor payments with approval workflows, invoice management, and payment scheduling.',
      href: '/vendor-payments',
      features: ['Invoice management', 'Multi-level approvals', 'TDS handling', 'Payment scheduling'],
    },
    {
      icon: Banknote,
      title: 'Salary Disbursements',
      description: 'Process employee salaries with automated tax calculations, compliance, and instant disbursement.',
      href: '/salary-disbursements',
      features: ['Automated payroll', 'Tax calculations', 'Compliance reports', 'Salary slips'],
    },
    {
      icon: Receipt,
      title: 'Bill Payments',
      description: 'Pay utility bills automatically with smart reminders, scheduled payments, and auto-fetch.',
      href: '/bill-payments',
      features: ['Auto-fetch bills', 'Smart reminders', 'Scheduled payments', 'All utilities supported'],
    },
  ];

  return (
    <section className="py-20 bg-[var(--card)]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Payment Method</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From accepting payments to making payouts, we have the right solution for every business need
          </p>
        </motion.div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={method.href}>
                <div className="group relative h-full bg-[var(--card)] rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl cursor-pointer">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-7 h-7 text-[var(--foreground)]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {method.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {method.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
