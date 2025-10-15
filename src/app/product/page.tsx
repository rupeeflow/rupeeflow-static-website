'use client'

import AEPSInfoSection from '@/components/ui/AepsSection'
import DMTSection from '@/components/ui/DMTSection'
import FaqSection from '@/components/ui/FAQ'
import IMPSInfoSection from '@/components/ui/IMPSSection'
import NEFTInfoSection from '@/components/ui/NEFTSection'
import ProductHero from '@/components/ui/ProductHero'
import UPISwitchSection from '@/components/ui/UPISwitchSection'
import VerificationSection from '@/components/ui/VerificationSection'

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
