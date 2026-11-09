/**
 * Loan / credit product routes and marketing are currently hidden (not deleted).
 * Flip SHOW_LOAN_OFFERING to true to bring everything back.
 * Keep HIDDEN_LOAN_ROUTES in sync with robots.txt Disallow rules and noindex layouts.
 */
export const SHOW_LOAN_OFFERING = false

export const HIDDEN_LOAN_ROUTES = [
  '/merchant-cash-advance',
  '/nri-emergency-loans',
  '/invoicing-financing',
  '/personal-credit-line',
  '/education-medical-loan',
  '/check-eligibility',
] as const

export const loanOfferingDisabledMetadata = {
  title: 'Page Unavailable',
  description: 'This page is not currently offered by RupeeFlow.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },
  },
} as const

/** Feature/win labels to hide from public UI while loan offering is off */
export const HIDDEN_LOAN_UI_LABELS = [
  'Embedded Lending',
  'B2B BNPL at Checkout',
  'Embedded Credit for Payouts',
  'Embedded Lending Built-in',
  'Credit Float for Payouts',
  'Merchant Cash Advance',
  'Invoice Financing',
  'Personal Credit Line',
  'NRI Emergency Loans',
  'NRI Emergency Loan',
  'Education / Medical',
  'B2B BNPL (Embedded)',
  'Credit + Payments Bundle',
  'White-label Lending API',
] as const
