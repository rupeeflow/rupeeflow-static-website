import './globals.css'
import HeroSection from '@/components/sections/Herosection'
import CollectMoney from '@/components/sections/CollectMoney'
import MakePayments from '@/components/sections/MakePayments'
import GetCredit from '@/components/sections/GetCredit'
import LendingBanner from '@/components/sections/LendingBanner'
import PartnershipBanner from '@/components/sections/PartnershipBanner'
import ChooseRupeeFlow from '@/components/sections/ChooseRupeeFlow'
import LanguageSection from '@/components/sections/RegionalLanguage'
import FaqSection from '@/components/sections/FAQ'
import BlogSection from '@/components/sections/BlogSection'
import BusinessBanking from '@/components/sections/BusinessBanking'
import ChooseBusinessType from '@/components/sections/ChooseBusinessType'
import blogPosts from '@/data/blogPostsHome.json'
import faq from '@/data/top-faqs.json'
import { FAQSchema, OrganizationSchema, WebPageSchema } from '@/components/StructuredData'

export default function HomePage() {
  return (
    <div className="w-full relative">
      <OrganizationSchema />
      <WebPageSchema
        title="RupeeFlow - Modern UPI Payment Infrastructure for India"
        description="Enterprise-grade UPI payment solutions, digital banking APIs, AEPS, DMT, IMPS, and NEFT services"
        url="/"
      />
      <FAQSchema faqs={faq.map(f => ({ question: f.question, answer: f.answer }))} />

      <HeroSection />
     
      <CollectMoney />
      <MakePayments />
      <GetCredit />
      <BusinessBanking />
       <LendingBanner />
      <ChooseBusinessType />


      {/* <FeatureSection /> */}
      {/* <PartnerShip /> */}
      {/* <FuturePayments /> */}
      {/* <KiranaPromo /> */}
      {/* <BuiltForSection /> */}

     
      
     
      {/* <VisionSection /> */}
      <PartnershipBanner />
       <ChooseRupeeFlow />
      
      {/* <StatsSection /> */}
      <LanguageSection />

      <BlogSection
        title="News and Articles"
        microcopy="Explore fresh perspectives and updates from the RupeeFlow team."
        posts={blogPosts}
      />
      <FaqSection faqs={faq} />
    </div>
  )
}
