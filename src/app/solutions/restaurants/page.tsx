import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('restaurants')!

export const metadata = buildIndustryMetadata(solution)

export default function RestaurantsSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
