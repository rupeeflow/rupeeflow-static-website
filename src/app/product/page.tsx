'use client'

import AEPSInfoSection from '@/components/ui/AepsSection'
import DMTSection from '@/components/ui/DMTSection'
import FaqSection from '@/components/ui/FAQ'
import ProductHero from '@/components/ui/ProductHero'

export default function SolutionPage() {
  return (
    <>
      <ProductHero />
      <AEPSInfoSection />
      <DMTSection />
      <FaqSection />
    </>
  )
}
