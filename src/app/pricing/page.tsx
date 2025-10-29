import AddonsSection from '@/components/sections/AddonSection'
import FaqSection from '@/components/sections/FAQ'
import PricingSection from '@/components/sections/PricingHero'
import React from 'react'
import faq from '@/data/top-faqs.json'

const PricingPage = () => {
  return (
    <div>
      <PricingSection />
      <AddonsSection />
      <FaqSection faqs={faq} />
    </div>
  )
}

export default PricingPage
