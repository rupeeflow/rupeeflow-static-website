import HeroSection from './components/HeroSection'
import LoanTypesSection from './components/LoanTypesSection'
import WhyChooseSection from './components/WhyChooseSection'
import ProcessSection from './components/ProcessSection'
import DocumentsSection from './components/DocumentsSection'
import BenefitsGrid from './components/BenefitsGrid'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import LoanOfferingUnavailable from '@/components/solutions/LoanOfferingUnavailable'
import { SHOW_LOAN_OFFERING } from '@/lib/loanOffering'

export default function EducationMedicalLoanPage() {
  // Content preserved — flip SHOW_LOAN_OFFERING to true to show again.
  if (!SHOW_LOAN_OFFERING) return <LoanOfferingUnavailable />

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <LoanTypesSection />
      <WhyChooseSection />
      <ProcessSection />
      <DocumentsSection />
      <BenefitsGrid />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
