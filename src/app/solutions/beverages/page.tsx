import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('beverages')!

export const metadata = buildIndustryMetadata(solution)

export default function BeveragesSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
