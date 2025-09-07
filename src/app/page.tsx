import ResizableNavigation from '@/components/ui/ResizableNavigation'
import './globals.css'
import HeroSection from '@/components/ui/Herosection'
import ProductShowCase from '@/components/ui/ProductShowcase'
import PartnerShip from '@/components/ui/PartnerShip'
import BillPayments from '@/components/ui/BillPayments'
import FuturePayments from '@/components/ui/FuturePayments'
import ChooseRupeeFlow from '@/components/ui/ChooseRupeeFlow'
import Cards from '@/components/ui/Cards'
import RegionalLanguage from '@/components/ui/RegionalLanguage'

export default function HomePage() {
  return (
    <div className='w-full h-full'>
      <ResizableNavigation />
      <HeroSection/>
      <ProductShowCase/>
      <PartnerShip/>
      <BillPayments/>
      <FuturePayments/>
      <ChooseRupeeFlow/>
      <Cards/>
      <RegionalLanguage/>
    </div>
  )
}