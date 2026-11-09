import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('retail')!

export const metadata = buildIndustryMetadata(solution)

export default function RetailSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
