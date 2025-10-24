import './globals.css'
import HeroSection from '@/components/sections/Herosection'

import PartnerShip from '@/components/sections/PartnerShip'

import FuturePayments from '@/components/ui/FuturePayments'
import ChooseRupeeFlow from '@/components/sections/ChooseRupeeFlow'
import FeatureSection from '@/components/sections/FeatureSection'
import StatsSection from '@/components/sections/StatsSection'
import Testimonials from '@/components/sections/Testimonials'
import LanguageSection from '@/components/sections/RegionalLanguage'
import BuiltForSection from '@/components/sections/BuiltForSection'
import FaqSection from '@/components/sections/FAQ'
import BlogSection from '@/components/sections/BlogSection'

import blogPosts from '@/data/blogPostsHome.json'
import VisionSection from '@/components/sections/VisionSection'

export default function HomePage() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <VisionSection />

      <PartnerShip />
      <FuturePayments />
      <BuiltForSection />
      <ChooseRupeeFlow />
      <StatsSection />
      <LanguageSection />

      <BlogSection
        title="News and Articles"
        microcopy="Explore fresh perspectives and updates from the RupeeFlow team."
        posts={blogPosts}
      />
      <FaqSection />
    </div>
  )
}
