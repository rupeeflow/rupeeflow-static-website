'use client'

import AEPSInfoSection from '@/components/sections/AepsSection'
import DMTSection from '@/components/sections/DMTSection'
import FaqSection from '@/components/sections/FAQ'
import IMPSInfoSection from '@/components/sections/IMPSSection'
import NEFTInfoSection from '@/components/sections/NEFTSection'
import ProductHero from '@/components/sections/ProductHero'
import UPISwitchSection from '@/components/sections/UPISwitchSection'
import VerificationSection from '@/components/sections/VerificationSection'

export default function SolutionPage() {
  return (
    <>
      <ProductHero />
      <NEFTInfoSection />
      <IMPSInfoSection />
      <UPISwitchSection />
      <VerificationSection />
      <AEPSInfoSection />
      <DMTSection />

      <FaqSection />
    </>
  )
}
