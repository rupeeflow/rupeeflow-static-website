"use client"

import { FileText, GraduationCap, ShoppingBag, ClipboardList, Plane } from 'lucide-react'
import UseCaseTabs, { UseCaseTab } from '@/components/ui/UseCaseTabs'

const tabs: UseCaseTab[] = [
  {
    id: 'invoicing',
    label: 'Invoicing and Billing',
    icon: <FileText className="w-6 h-6" />,
    image: '/images/payment-link/InvoicingTemplate.jpeg',
    subItems: [
      {
        title: 'Invoice Payments',
        description:
          'Merchants can embed payment links directly into invoices.',
      },
      {
        title: 'Recurring Payments',
        description:
          'Set up recurring payments for subscriptions.',
      },
    ],
  },
  {
    id: 'fee-collection',
    label: 'Fee Collection',
    icon: <GraduationCap className="w-6 h-6" />,
    image: '/images/payment-link/WomenHandyPhone.png',
    subItems: [
      {
        title: 'Schools & Institutions',
        description: 'Collect tuition & fees easily.',
      },
      {
        title: 'Professional Services',
        description: 'Collect retainers & service fees.',
      },
    ],
  },
  {
    id: 'online-sales',
    label: 'Online Sales',
    icon: <ShoppingBag className="w-6 h-6" />,
    image: '/images/payment-link/Onlinbesales.jpeg',
    subItems: [
      {
        title: 'Direct Sales',
        description: 'Sell products using payment links.',
      },
      {
        title: 'Social Media Sales',
        description: 'Collect payments via Instagram & Facebook.',
      },
    ],
  },
  {
    id: 'registration',
    label: 'Registration Fees',
    icon: <ClipboardList className="w-6 h-6" />,
    image: '/images/payment-link/eventTicketing.jpeg',
    subItems: [
      {
        title: 'Event Tickets',
        description: 'Sell tickets online easily.',
      },
      {
        title: 'Workshop Registration',
        description: 'Collect workshop & class fees.',
      },
    ],
  },
  {
    id: 'travel',
    label: 'Travel Bookings',
    icon: <Plane className="w-6 h-6" />,
    image: '/images/payment-link/travel&booking.jpeg',
    subItems: [
      {
        title: 'Travel Operators',
        description: 'Collect travel package payments.',
      },
      {
        title: 'Hotels & Stays',
        description: 'Collect booking deposits & payments.',
      },
    ],
  },
]

export default function MerchantUseCases() {
  return (
    <UseCaseTabs
      heading="Payment Link for All Merchants:"
      headingHighlight="Accept Payments Anywhere, Anytime"
      tabs={tabs}
    />
  )
}