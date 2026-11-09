import type { Metadata } from 'next'
import { loanOfferingDisabledMetadata } from '@/lib/loanOffering'

export const metadata: Metadata = {
  ...loanOfferingDisabledMetadata,
  title: 'Page Unavailable',
  description: 'This product is not currently offered.',
}

export default function PersonalCreditLineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
