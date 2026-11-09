import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('bfsi')!

export const metadata = buildIndustryMetadata(solution)

export default function BfsiSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
