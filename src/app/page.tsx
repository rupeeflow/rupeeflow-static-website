import './globals.css'
import HeroSection from '@/components/ui/Herosection'

import PartnerShip from '@/components/ui/PartnerShip'
import BillPayments from '@/components/ui/BillPayments'
import FuturePayments from '@/components/ui/FuturePayments'
import ChooseRupeeFlow from '@/components/ui/ChooseRupeeFlow'
import FeatureSection from '@/components/ui/FeatureSection'
import StatsSection from '@/components/ui/StatsSection'
import Testimonials from '@/components/ui/Testimonials'
import LanguageSection from '@/components/ui/RegionalLanguage'
import BuiltForSection from '@/components/ui/BuiltForSection'
import FaqSection from '@/components/ui/FAQ'

export default function HomePage() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <FeatureSection />
      <PartnerShip />
      <BuiltForSection />
      <FuturePayments />
      <ChooseRupeeFlow />
      <StatsSection />
      <LanguageSection />
      <Testimonials />
      <FaqSection />
    </div>
  )
}
