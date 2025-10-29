import FaqSupportSection from '@/components/sections/FaqSupportSection'
import FaqSection from '@/components/sections/FAQ'
import faq from '@/data/top-faqs.json'

import SupportHero from '@/components/sections/SupportHero'
import React from 'react'

const SupportPage = () => {
  return (
    <div>
      <SupportHero />
      <FaqSupportSection />
      <FaqSection faqs={faq} />
    </div>
  )
}

export default SupportPage
