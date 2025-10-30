import RefundContent from '@/components/sections/RefundContent'
import RefundHero from '@/components/sections/RefundHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | RupeeFlow',
  description:
    'Learn about RupeeFlow\'s Refund and Cancellation Policy. Understand the terms for refunds, cancellations, chargebacks, and dispute resolution for our payment services.',
}

export default function RefundPage() {
  return (
    <div>
      <RefundHero />
      <RefundContent />
    </div>
  )
}
