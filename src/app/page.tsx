import './globals.css'
import HeroSection from '@/components/ui/Herosection'

import PartnerShip from '@/components/ui/PartnerShip'

import FuturePayments from '@/components/ui/FuturePayments'
import ChooseRupeeFlow from '@/components/ui/ChooseRupeeFlow'
import FeatureSection from '@/components/ui/FeatureSection'
import StatsSection from '@/components/ui/StatsSection'
import Testimonials from '@/components/ui/Testimonials'
import LanguageSection from '@/components/ui/RegionalLanguage'
import BuiltForSection from '@/components/ui/BuiltForSection'
import FaqSection from '@/components/ui/FAQ'
import BlogSection from '@/components/ui/BlogSection'

import blogPosts from '@/data/blogPostsHome.json'
import VisionSection from '@/components/ui/VisionSection'

export default function HomePage() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <VisionSection />
      <FeatureSection />
      <PartnerShip />
      <FuturePayments />
      <BuiltForSection />
      <ChooseRupeeFlow />
      <StatsSection />
      <LanguageSection />
      <Testimonials />
      <BlogSection
        title="News and Articles"
        microcopy="Explore fresh perspectives and updates from the RupeeFlow team."
        posts={blogPosts}
      />
      <FaqSection />
    </div>
  )
}
