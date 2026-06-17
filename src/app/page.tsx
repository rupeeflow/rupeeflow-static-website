import './globals.css'
import HomeExperience from '@/components/sections/HomeExperience'
import StopUsingApps from '@/components/sections/StopUsingApps'
import CollectMoney from '@/components/sections/CollectMoney'
import MakePayments from '@/components/sections/MakePayments'
import GetCredit from '@/components/sections/GetCredit'
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
    <div className="w-full relative bg-[#F4F8F6]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(42,184,113,0.1),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(0,135,90,0.08),transparent_40%),linear-gradient(#F4F8F6,#F4F8F6)]" />
      <WebPageSchema
        title="RupeeFlow — AI-led Financial Infrastructure"
        description="RupeeFlow provides AI-native financial infrastructure including credit engine, embedded finance, WhatsApp banking, supply chain finance, NRI finance, AI treasury, and gig worker financial services."
        url="/"
      />
      <FAQSchema faqs={faq.map(f => ({ question: f.question, answer: f.answer }))} />
      <HomeExperience />
      <StopUsingApps />
      <LendingBanner />
      <CollectMoney />
      <MakePayments />
      <GetCredit />
      <BusinessBanking />
      <ChooseBusinessType />
      <ChooseRupeeFlow />
      <PartnershipBanner />
      <BlogSection
        title="News and Articles"
        microcopy="Explore fresh perspectives and updates from the RupeeFlow team."
        posts={blogPosts}
      />
      <FaqSection faqs={faq} />
    </div>
  )
}
