import AddonsSection from '@/components/sections/AddonSection'
import FaqSection from '@/components/sections/FAQ'
import PricingSection from '@/components/sections/PricingHero'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Transparent Payment Solutions Pricing | RupeeFlow',
  description: 'Simple, transparent pricing for UPI, AEPS, DMT, IMPS, and NEFT payment solutions. No hidden fees. Scale as you grow with RupeeFlow\'s flexible payment infrastructure.',
  keywords: ['payment pricing', 'UPI pricing', 'fintech pricing', 'payment gateway cost', 'transaction fees'],
  openGraph: {
    title: 'Pricing - Transparent Payment Solutions | RupeeFlow',
    description: 'Simple, transparent pricing for payment solutions. No hidden fees.',
    url: 'https://rupeeflow.co/pricing',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Transparent Payment Solutions | RupeeFlow',
    description: 'Simple, transparent pricing for payment solutions. No hidden fees.',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/pricing',
  },
}

const PricingPage = () => {
  return (
    <div>
      <PricingSection />
      <AddonsSection />
    </div>
  )
}

export default PricingPage
