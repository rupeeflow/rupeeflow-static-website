import HeroSection from './components/HeroSection'
import EligibilityCalculator from './components/EligibilityCalculator'
import LoanOptionsGrid from './components/LoanOptionsGrid'
import FactorsSection from './components/FactorsSection'
import ImproveTipsSection from './components/ImproveTipsSection'
import InstantCheckSection from './components/InstantCheckSection'
import CTASection from './components/CTASection'

export default function CheckEligibilityPage() {
  return (
    <main className="min-h-screen bg-[var(--card)]">
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
