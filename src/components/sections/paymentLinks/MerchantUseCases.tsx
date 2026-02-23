'use client'

import { FileText, GraduationCap, ShoppingBag, ClipboardList, Plane } from 'lucide-react'
import UseCaseTabs, { type UseCaseTab } from '@/components/ui/UseCaseTabs'

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
          'Merchants can embed payment links directly into invoices, making it easy for clients to pay outstanding balances with a single click.',
      },
      {
        title: 'Recurring Payments',
        description:
          'Payment links are used to set up recurring payments for subscriptions, memberships, or other recurring services.',
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
        title: 'Schools and Educational Institutions',
        description:
          'Streamline tuition and other fee payments by sending unique payment links to students or parents.',
      },
      {
        title: 'Professional Services',
        description:
          'Lawyers, accountants, and consultants can use payment links to collect retainers, invoices, or other professional fees.',
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
        description:
          'Merchants can easily create and share payment links for individual products or services, enabling customers to purchase directly through a simple link.',
      },
      {
        title: 'Social Media Sales',
        description:
          'Payment links are ideal for merchants selling through platforms like Instagram or Facebook, where customers can easily click and pay without leaving the platform.',
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
        description:
          'Event organizers can use payment links to sell tickets online, providing a convenient and secure payment option.',
      },
      {
        title: 'Workshop or Class Registration',
        description:
          'Payment links can be used to collect registration fees for workshops, classes, or other events.',
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
        title: 'Travel Agents and Operators',
        description:
          'Use payment links to collect deposits or full payments for travel packages, flights, accommodations, and other travel-related services. This streamlines the booking process and reduces administrative overhead.',
      },
      {
        title: 'Accommodation Providers',
        description:
          'Hotels, hostels, and other accommodation providers can use payment links to collect booking deposits or full payments directly from guests. This can be integrated into booking confirmation emails or used for last-minute bookings.',
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
