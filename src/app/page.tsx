import './globals.css'
import HeroSection from '@/components/sections/Herosection'
import StopUsingApps from '@/components/sections/StopUsingApps'
import CollectMoney from '@/components/sections/CollectMoney'
import MakePayments from '@/components/sections/MakePayments'
// Credit / lending sections preserved but hidden:
// import GetCredit from '@/components/sections/GetCredit'
// import LendingBanner from '@/components/sections/LendingBanner'
import PartnershipBanner from '@/components/sections/PartnershipBanner'
import ChooseRupeeFlow from '@/components/sections/ChooseRupeeFlow'
import LanguageSection from '@/components/sections/RegionalLanguage'
import FaqSection from '@/components/sections/FAQ'
import BlogSection from '@/components/sections/BlogSection'
import BusinessBanking from '@/components/sections/BusinessBanking'
import ChooseBusinessType from '@/components/sections/ChooseBusinessType'
import blogPosts from '@/data/blogPostsHome.json'
import faq from '@/data/top-faqs.json'
import { FAQSchema, WebPageSchema } from '@/components/StructuredData'
import NoLoanNotice from '@/components/ui/NoLoanNotice'

export default function HomePage() {
  return (
    <div className="w-full relative">
      <WebPageSchema
        title="RupeeFlow — Payments & Payouts for Indian Businesses"
        description="RupeeFlow is India's all-in-one payments platform. Accept payments via Payment Gateway, UPI Collections, Payment Links, QR Code & Payment Button. Send money with Vendor Payouts, Salary Disbursements, Bulk Transfers & Bill Payments."
        url="/"
      />
      <FAQSchema
        faqs={faq.map(f => ({ question: f.question, answer: f.answer }))}
      />

      <HeroSection />
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <NoLoanNotice />
      </div>
      <StopUsingApps />
      {/* <LendingBanner /> — loan offering temporarily hidden */}
      <CollectMoney />
      <MakePayments />

      {/* <GetCredit /> — loan offering temporarily hidden */}
      <BusinessBanking />

      <ChooseBusinessType />

      {/* <FeatureSection /> */}
      {/* <PartnerShip /> */}
      {/* <FuturePayments /> */}
      {/* <KiranaPromo /> */}
      {/* <BuiltForSection /> */}

      {/* <VisionSection /> */}
      <ChooseRupeeFlow />
      <PartnershipBanner />

      {/* <StatsSection /> */}
      {/* <LanguageSection /> */}

      <BlogSection
        title="News and Articles"
        microcopy="Explore fresh perspectives and updates from the RupeeFlow team."
        posts={blogPosts}
      />
      <FaqSection faqs={faq} />
    </div>
  )
}
