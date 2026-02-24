import HeroSection from './components/HeroSection'
import LoanTypesSection from './components/LoanTypesSection'
import WhyChooseSection from './components/WhyChooseSection'
import ProcessSection from './components/ProcessSection'
import DocumentsSection from './components/DocumentsSection'
import BenefitsGrid from './components/BenefitsGrid'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'

export default function EducationMedicalLoanPage() {
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
