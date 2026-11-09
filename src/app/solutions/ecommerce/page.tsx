import IndustrySolutionPage from '@/components/solutions/IndustrySolutionPage'
import { getIndustrySolution } from '@/data/industrySolutions'
import { buildIndustryMetadata } from '@/lib/industrySolutionMetadata'

const solution = getIndustrySolution('ecommerce')!

export const metadata = buildIndustryMetadata(solution)

export default function EcommerceSolutionPage() {
  return <IndustrySolutionPage solution={solution} />
}
