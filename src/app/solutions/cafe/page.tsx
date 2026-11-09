import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('cafe')!

export const metadata = buildIndustryMetadata(solution)

export default function CafeSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
