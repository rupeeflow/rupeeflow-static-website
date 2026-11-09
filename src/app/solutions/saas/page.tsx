import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('saas')!

export const metadata = buildIndustryMetadata(solution)

export default function SaasSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
