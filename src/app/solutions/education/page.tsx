import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('education')!

export const metadata = buildIndustryMetadata(solution)

export default function EducationSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
