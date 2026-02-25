import AddonsSection from '@/components/sections/AddonSection'
import PricingSection from '@/components/sections/PricingHero'
import React from 'react'
import { Metadata } from 'next'
import { WebPageSchema } from '@/components/StructuredData'

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
      <WebPageSchema
        title="Pricing - Transparent Payment Solutions Pricing"
        description="Simple, transparent pricing for UPI, AEPS, DMT, IMPS, and NEFT payment solutions. No hidden fees. Scale as you grow."
        url="/pricing"
      />
      <PricingSection />
      <AddonsSection />
    </div>
  )
}

export default PricingPage
