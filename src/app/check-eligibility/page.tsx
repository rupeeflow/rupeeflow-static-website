import HeroSection from './components/HeroSection'
import EligibilityCalculator from './components/EligibilityCalculator'
import LoanOptionsGrid from './components/LoanOptionsGrid'
import FactorsSection from './components/FactorsSection'
import ImproveTipsSection from './components/ImproveTipsSection'
import InstantCheckSection from './components/InstantCheckSection'
import CTASection from './components/CTASection'
import LoanOfferingUnavailable from '@/components/solutions/LoanOfferingUnavailable'
import { SHOW_LOAN_OFFERING } from '@/lib/loanOffering'

export default function CheckEligibilityPage() {
  // Content preserved — flip SHOW_LOAN_OFFERING to true to show again.
  if (!SHOW_LOAN_OFFERING) return <LoanOfferingUnavailable />

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <EligibilityCalculator />
      <LoanOptionsGrid />
      <FactorsSection />
      <ImproveTipsSection />
      <InstantCheckSection />
      <CTASection />
    </main>
  )
}
