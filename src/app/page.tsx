import './globals.css'
import HeroSection from '@/components/sections/Herosection'
// import StopUsing5Apps from '@/components/sections/StopUsing5Apps'
import StopUsingApps from '@/components/sections/StopUsingApps'
import CollectMoney from '@/components/sections/CollectMoney'
import MakePayments from '@/components/sections/MakePayments'
import LendingBanner from '@/components/sections/LendingBanner'
import PartnershipBanner from '@/components/sections/PartnershipBanner'
import ChooseRupeeFlow from '@/components/sections/ChooseRupeeFlow'
import FaqSection from '@/components/sections/FAQ'
import BlogSection from '@/components/sections/BlogSection'
import BusinessBanking from '@/components/sections/BusinessBanking'
import ChooseBusinessType from '@/components/sections/ChooseBusinessType'
import blogPosts from '@/data/blogPostsHome.json'
import faq from '@/data/top-faqs.json'
import { FAQSchema, WebPageSchema } from '@/components/StructuredData'

export default function HomePage() {
  return (
    <div className="w-full relative">
      <WebPageSchema
        title="RupeeFlow: Bank on WhatsApp | Payments, Credit & Payouts for Indian Businesses"
        description="India's first WhatsApp-native banking platform. Send money, pay bills, get instant credit in Hindi & 11 other languages. Zero app download needed. Trusted by 100,000+ businesses."
        url="/"
      />
      <FAQSchema faqs={faq.map(f => ({ question: f.question, answer: f.answer }))} />

      <HeroSection />
      {/* <StopUsing5Apps /> */}
      <StopUsingApps />
      <LendingBanner />
      <CollectMoney />
      <MakePayments />
      
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
