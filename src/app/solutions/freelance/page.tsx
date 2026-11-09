import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('freelance')!

export const metadata = buildIndustryMetadata(solution)

export default function FreelanceSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
