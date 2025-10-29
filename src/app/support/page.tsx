import FaqSupportSection from '@/components/sections/FaqSupportSection'

import SupportHero from '@/components/sections/SupportHero'
import React from 'react'
import { Metadata } from 'next'
import FaqSection from '@/components/sections/FAQ'
import faq from '@/data/top-faqs.json'
import { WebPageSchema, FAQSchema } from '@/components/StructuredData'


export const metadata: Metadata = {
  title: 'Support - Get Help with RupeeFlow Payment Solutions',
  description: 'Expert support for RupeeFlow payment infrastructure. Access documentation, FAQs, API guides, and contact our technical team for assistance with UPI, AEPS, DMT, and more.',
  keywords: ['payment support', 'API documentation', 'technical support', 'payment integration help', 'developer support'],
  openGraph: {
    title: 'Support - Get Help with RupeeFlow Payment Solutions',
    description: 'Expert support for RupeeFlow payment infrastructure. Access docs, FAQs, and technical assistance.',
    url: 'https://rupeeflow.co/support',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support - Get Help with RupeeFlow',
    description: 'Expert support for RupeeFlow payment infrastructure.',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/support',
  },
}

const SupportPage = () => {
  return (
    <div>
      <WebPageSchema
        title="Support - Get Help with RupeeFlow Payment Solutions"
        description="Expert support for RupeeFlow payment infrastructure. Access documentation, FAQs, API guides, and contact our technical team."
        url="/support"
      />
      <FAQSchema faqs={faq.map(f => ({ question: f.question, answer: f.answer }))} />
      <SupportHero />
      <FaqSupportSection />
      <FaqSection faqs={faq} />

    </div>
  )
}

export default SupportPage
