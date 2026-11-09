/** Product workspace URL — keep this host unchanged */
export const ERP_URL = 'https://erp.rupeeflow.co'
/** Public product name shown in UI/copy */
export const ONICHANNEL_LABEL = 'Onichannel'

export type IndustryFaq = {
  question: string
  answer: string
}

export type IndustrySolution = {
  slug: string
  name: string
  shortLabel: string
  navIcon: string
  eyebrow: string
  headline: string
  subheadline: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  audience: string
  /** Schema.org audience / serviceType signals for richer indexing */
  serviceType: string
  industrySegments: string[]
  challenges: { title: string; description: string }[]
  capabilities: { title: string; description: string }[]
  outcomes: { value: string; label: string }[]
  steps: { title: string; description: string }[]
  faqs: IndustryFaq[]
}

/** Shared B2B manufacturing coverage woven into every vertical for query reach */
export const B2B_MANUFACTURING_SEGMENTS = [
  'B2B Manufacturing',
  'Cafe supply manufacturing',
  'Restaurant equipment manufacturing',
  'Retail goods manufacturing',
  'Beverage manufacturing',
  'FMCG manufacturing',
  'Packaged food manufacturing',
] as const

export const industrySolutions: IndustrySolution[] = [
  {
    slug: 'saas',
    name: 'SaaS',
    shortLabel: 'SaaS',
    navIcon: '/solutions/saas.svg',
    eyebrow: 'Solutions for SaaS',
    headline: 'Payments, billing & payouts built for SaaS companies',
    subheadline:
      'Collect subscriptions, automate invoices, and pay partners from one platform — with UPI, cards, and instant settlements designed for recurring revenue.',
    metaTitle:
      'SaaS Payment Solutions India | Billing, Subscriptions & Payouts — RupeeFlow',
    metaDescription:
      'RupeeFlow helps SaaS businesses in India collect subscription payments, automate invoicing, run partner payouts, and reconcile revenue in real time. Start on Onichannel.',
    keywords: [
      'SaaS payment gateway India',
      'subscription billing India',
      'SaaS invoicing platform',
      'recurring payments UPI',
      'SaaS payouts India',
      'RupeeFlow SaaS solutions',
      'B2B manufacturing SaaS payments',
    ],
    audience:
      'SaaS founders, finance teams, and product ops who need reliable collections and partner payouts.',
    serviceType: 'SaaS payment and billing platform',
    industrySegments: [
      'SaaS',
      'B2B Manufacturing software',
      'Subscription businesses',
    ],
    challenges: [
      {
        title: 'Failed subscription collections',
        description:
          'Missed renewals and failed mandates hurt MRR. Recover payments with smart retries and multi-mode checkout.',
      },
      {
        title: 'Manual invoicing & GST work',
        description:
          'Replace spreadsheet billing with automated invoices, reminders, and clean reconciliation.',
      },
      {
        title: 'Partner & affiliate payouts',
        description:
          'Pay agencies, affiliates, and marketplace sellers in bulk with clear status tracking.',
      },
    ],
    capabilities: [
      {
        title: 'Subscription & one-time checkout',
        description:
          'Accept UPI, cards, net banking, and payment links for trials, upgrades, and renewals.',
      },
      {
        title: 'Invoice management',
        description:
          'Generate invoices, send reminders, and track receivables from a single dashboard.',
      },
      {
        title: 'Bulk partner payouts',
        description:
          'Disburse commissions and vendor payments via UPI, IMPS, NEFT, and RTGS.',
      },
      {
        title: 'Real-time reconciliation',
        description:
          'Match payments to invoices and exports for accounting tools without manual cleanup.',
      },
    ],
    outcomes: [
      { value: '99.9%', label: 'Payment uptime target' },
      { value: '1 day', label: 'Faster settlement cycles' },
      { value: '10k+', label: 'Bulk payouts per batch' },
    ],
    steps: [
      {
        title: 'Create your Onichannel workspace',
        description:
          'Sign up on Onichannel at https://erp.rupeeflow.co and connect your business profile in minutes.',
      },
      {
        title: 'Turn on collections & billing',
        description:
          'Enable payment links, invoices, and subscription-ready checkout flows.',
      },
      {
        title: 'Automate payouts & reports',
        description:
          'Schedule partner payouts and export reconciled reports for finance.',
      },
    ],
    faqs: [
      {
        question: 'Can RupeeFlow handle recurring SaaS billing?',
        answer:
          'Yes. Use payment links, invoices, and multi-mode checkout for renewals, upgrades, and one-time charges. Manage everything from Onichannel.',
      },
      {
        question: 'How do SaaS companies pay affiliates?',
        answer:
          'Use bulk payouts to send commissions to affiliates and partners with status tracking and reconciliation.',
      },
      {
        question: 'Where do I get started?',
        answer:
          'Open your workspace at https://erp.rupeeflow.co and enable collections for your SaaS product.',
      },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-Commerce',
    shortLabel: 'E-Commerce',
    navIcon: '/solutions/ecommerce.svg',
    eyebrow: 'Solutions for E-Commerce',
    headline: 'Checkout, settlements & vendor payouts for online stores',
    subheadline:
      'Convert more carts with UPI-first payments, settle faster, and pay sellers or logistics partners without spreadsheet chaos.',
    metaTitle:
      'E-Commerce Payment Gateway India | Checkout, Settlements & Vendor Payouts — RupeeFlow',
    metaDescription:
      'Boost ecommerce conversions with RupeeFlow payment links, UPI collections, QR checkout, and vendor payouts. Manage store cash flow on Onichannel.',
    keywords: [
      'ecommerce payment gateway India',
      'UPI checkout for online stores',
      'vendor payouts ecommerce',
      'payment links for Shopify',
      'online store settlements India',
      'RupeeFlow ecommerce solutions',
      'B2B manufacturing ecommerce wholesale payments',
    ],
    audience:
      'D2C brands, marketplaces, and online retailers scaling collections and seller payouts across India.',
    serviceType: 'E-commerce payment gateway and vendor payouts',
    industrySegments: ['E-Commerce', 'D2C', 'B2B Manufacturing wholesale'],
    challenges: [
      {
        title: 'Cart abandonment at payment',
        description:
          'Offer UPI, cards, QR, and payment links so customers can pay the way they prefer.',
      },
      {
        title: 'Slow settlements',
        description:
          'Improve cash flow with faster settlement visibility and cleaner reconciliation.',
      },
      {
        title: 'Seller & logistics payouts',
        description:
          'Pay marketplace sellers, influencers, and delivery partners in bulk with audit trails.',
      },
    ],
    capabilities: [
      {
        title: 'High-conversion checkout',
        description:
          'Payment gateway, payment links, QR codes, and buttons that fit any storefront.',
      },
      {
        title: 'UPI collections',
        description:
          'Collect via UPI Intent, collect requests, and QR for mobile-first shoppers.',
      },
      {
        title: 'Vendor & seller payouts',
        description:
          'Automate disbursements to sellers, warehouses, and delivery partners.',
      },
      {
        title: 'Order-level reconciliation',
        description:
          'Track payment status against orders and export finance-ready reports.',
      },
    ],
    outcomes: [
      { value: 'UPI-first', label: 'Checkout experience' },
      { value: 'Bulk', label: 'Seller payouts' },
      { value: 'Live', label: 'Payment status tracking' },
    ],
    steps: [
      {
        title: 'Connect your store on Onichannel',
        description:
          'Create an Onichannel account at https://erp.rupeeflow.co and configure collection modes.',
      },
      {
        title: 'Enable checkout & payment links',
        description:
          'Share links, QR, or gateway checkout across website, WhatsApp, and social.',
      },
      {
        title: 'Automate vendor payouts',
        description:
          'Run seller and logistics payouts with clear settlement reports.',
      },
    ],
    faqs: [
      {
        question: 'Does RupeeFlow support UPI for ecommerce?',
        answer:
          'Yes. Collect via UPI, QR, payment links, and gateway checkout optimized for Indian shoppers.',
      },
      {
        question: 'Can I pay sellers from the same platform?',
        answer:
          'Yes. Use bulk payouts to disburse seller and logistics payments with tracking and reconciliation.',
      },
      {
        question: 'How do I start accepting payments?',
        answer:
          'Sign in at https://erp.rupeeflow.co, enable collections, and share your first payment link.',
      },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    shortLabel: 'Education',
    navIcon: '/solutions/education.svg',
    eyebrow: 'Solutions for Education',
    headline:
      'Fee collections, reminders & disbursements for education institutes',
    subheadline:
      'Collect tuition and course fees digitally, send automated reminders, and disburse scholarships or teacher payouts from one place.',
    metaTitle:
      'Education Fee Collection Software India | Tuition Payments & Payouts — RupeeFlow',
    metaDescription:
      'Digitize school, college, and edtech fee collections with RupeeFlow. Payment links, UPI, reminders, and staff/scholarship payouts via Onichannel.',
    keywords: [
      'education fee collection India',
      'school fee payment gateway',
      'college tuition payment links',
      'edtech payment solutions',
      'scholarship disbursement India',
      'RupeeFlow education solutions',
    ],
    audience:
      'Schools, colleges, coaching institutes, and edtech platforms that need reliable fee collection and payouts.',
    serviceType: 'Education fee collection and disbursement platform',
    industrySegments: ['Education', 'Edtech', 'Institutes'],
    challenges: [
      {
        title: 'Late and partial fee payments',
        description:
          'Send payment links and reminders so parents and students can pay on time without queues.',
      },
      {
        title: 'Cash-heavy campus operations',
        description:
          'Move fee counters to UPI, cards, and digital receipts with clear audit history.',
      },
      {
        title: 'Teacher & scholarship payouts',
        description:
          'Disburse salaries, stipends, and scholarships in bulk with transparent status updates.',
      },
    ],
    capabilities: [
      {
        title: 'Digital fee collection',
        description:
          'Collect tuition, admission, and course fees via links, QR, and payment gateway.',
      },
      {
        title: 'Payment reminders',
        description:
          'Reduce dues with structured reminders and trackable payment status.',
      },
      {
        title: 'Staff & scholarship payouts',
        description:
          'Pay teachers, trainers, and scholarship beneficiaries in scheduled batches.',
      },
      {
        title: 'Finance-ready reports',
        description:
          'Export collection and disbursement reports for accounts and compliance teams.',
      },
    ],
    outcomes: [
      { value: 'Faster', label: 'Fee recovery cycles' },
      { value: 'Digital', label: 'Receipts & audit trail' },
      { value: 'Bulk', label: 'Scholarship payouts' },
    ],
    steps: [
      {
        title: 'Set up your institute on Onichannel',
        description:
          'Create your Onichannel workspace at https://erp.rupeeflow.co and define fee products.',
      },
      {
        title: 'Share fee payment links',
        description:
          'Send links or QR codes to parents and students across WhatsApp, email, or portal.',
      },
      {
        title: 'Disburse salaries & scholarships',
        description:
          'Run payouts and download reconciliation reports for finance.',
      },
    ],
    faqs: [
      {
        question: 'Can schools collect fees with payment links?',
        answer:
          'Yes. Create fee-specific payment links or QR codes and share them with parents and students instantly.',
      },
      {
        question: 'Can we pay teachers and scholarship recipients?',
        answer:
          'Yes. Use bulk payouts for salaries, stipends, and scholarships with clear tracking.',
      },
      {
        question: 'Where do institutes sign up?',
        answer:
          'Get started at https://erp.rupeeflow.co and enable fee collections for your campus or edtech product.',
      },
    ],
  },
  {
    slug: 'bfsi',
    name: 'BFSI',
    shortLabel: 'BFSI',
    navIcon: '/solutions/bfsi.svg',
    eyebrow: 'Solutions for BFSI',
    headline: 'Collections, payouts & reconciliation for BFSI institutions',
    subheadline:
      'Power premium collections, partner disbursements, and high-volume payouts with secure infrastructure built for banks, NBFCs, and insurers.',
    metaTitle:
      'BFSI Payment Solutions India | Collections, Payouts & Reconciliation — RupeeFlow',
    metaDescription:
      'RupeeFlow helps banks, NBFCs, and insurers run secure collections, bulk payouts, and reconciliation workflows. Operate from Onichannel.',
    keywords: [
      'BFSI payment solutions India',
      'NBFC collections platform',
      'bank payout APIs India',
      'insurance premium collection',
      'BFSI reconciliation software',
      'RupeeFlow BFSI solutions',
    ],
    audience:
      'Banks, NBFCs, insurers, and fintech partners that need reliable collections and disbursement rails.',
    serviceType: 'BFSI collections and payouts platform',
    industrySegments: ['BFSI', 'NBFC', 'Insurance', 'Banking'],
    challenges: [
      {
        title: 'High-volume collections',
        description:
          'Collect premiums, EMIs, and fees across UPI, links, and gateway channels at scale.',
      },
      {
        title: 'Partner disbursements',
        description:
          'Pay agents, branches, and ecosystem partners with batch controls and status visibility.',
      },
      {
        title: 'Reconciliation complexity',
        description:
          'Reduce ops load with automated matching, exports, and payment status tracking.',
      },
    ],
    capabilities: [
      {
        title: 'Secure collections stack',
        description:
          'Payment gateway, UPI collections, and payment links for customer-facing journeys.',
      },
      {
        title: 'Enterprise payouts',
        description:
          'Run bulk disbursements with NEFT, RTGS, IMPS, and UPI support.',
      },
      {
        title: 'Ops-grade reconciliation',
        description:
          'Track statuses, retries, and settlement reports for finance and risk teams.',
      },
      {
        title: 'Partner-ready workflows',
        description:
          'Support agent networks and institutional partners from one ERP workspace.',
      },
    ],
    outcomes: [
      { value: 'Secure', label: 'Collection infrastructure' },
      { value: 'Scale', label: 'Bulk disbursements' },
      { value: 'Clear', label: 'Reconciliation reports' },
    ],
    steps: [
      {
        title: 'Onboard on Onichannel',
        description:
          'Create your Onichannel workspace at https://erp.rupeeflow.co.',
      },
      {
        title: 'Configure collection & payout rails',
        description:
          'Enable the payment modes and disbursement flows your products need.',
      },
      {
        title: 'Operate with live reports',
        description:
          'Monitor collections, payouts, and reconciliation from one dashboard.',
      },
    ],
    faqs: [
      {
        question: 'Is RupeeFlow suitable for NBFCs and insurers?',
        answer:
          'Yes. BFSI teams use RupeeFlow for premium/EMI collections, partner payouts, and reconciliation workflows.',
      },
      {
        question: 'Can we run high-volume payouts?',
        answer:
          'Yes. Bulk payouts support large beneficiary batches with status tracking across major Indian rails.',
      },
      {
        question: 'How do BFSI teams get started?',
        answer:
          'Start at https://erp.rupeeflow.co and configure your collections and payout modules.',
      },
    ],
  },
  {
    slug: 'freelance',
    name: 'Freelance',
    shortLabel: 'Freelance',
    navIcon: '/solutions/freelance.svg',
    eyebrow: 'Solutions for Freelancers',
    headline: 'Get paid faster and pay collaborators without banking friction',
    subheadline:
      'Send professional payment links, track invoices, and pay contractors or teammates instantly — built for freelancers and independent businesses.',
    metaTitle:
      'Freelance Payment Solutions India | Payment Links, Invoices & Payouts — RupeeFlow',
    metaDescription:
      'Freelancers and independent businesses use RupeeFlow to collect via payment links, manage invoices, and pay collaborators. Start free on Onichannel.',
    keywords: [
      'freelance payment links India',
      'invoice payments for freelancers',
      'UPI payment link for freelancers',
      'contractor payouts India',
      'freelancer billing software',
      'RupeeFlow freelance solutions',
    ],
    audience:
      'Freelancers, consultants, creators, and small agencies who need simple collections and collaborator payouts.',
    serviceType: 'Freelance payment links and payouts',
    industrySegments: ['Freelance', 'Consultants', 'Creators'],
    challenges: [
      {
        title: 'Waiting on client payments',
        description:
          'Share a payment link or invoice and get paid via UPI, cards, or net banking.',
      },
      {
        title: 'Unprofessional billing experience',
        description:
          'Send clean digital invoices and receipts that build client trust.',
      },
      {
        title: 'Paying subcontractors manually',
        description:
          'Disburse collaborator payouts quickly without juggling multiple banking apps.',
      },
    ],
    capabilities: [
      {
        title: 'Instant payment links',
        description:
          'Create and share links for projects, retainers, and milestone payments.',
      },
      {
        title: 'Simple invoicing',
        description:
          'Generate invoices, track dues, and follow up with reminders.',
      },
      {
        title: 'Collaborator payouts',
        description:
          'Pay editors, designers, and subcontractors from the same workspace.',
      },
      {
        title: 'Clear payment history',
        description:
          'Keep a clean record of collections and payouts for tax and accounting.',
      },
    ],
    outcomes: [
      { value: 'Faster', label: 'Client collections' },
      { value: 'Simple', label: 'Invoice tracking' },
      { value: 'Instant', label: 'Collaborator payouts' },
    ],
    steps: [
      {
        title: 'Open Onichannel',
        description:
          'Create your Onichannel workspace at https://erp.rupeeflow.co in minutes.',
      },
      {
        title: 'Share your first payment link',
        description:
          'Send a link or invoice to your client and collect via UPI or cards.',
      },
      {
        title: 'Pay your collaborators',
        description:
          'Disburse payouts and keep every transaction organized in one place.',
      },
    ],
    faqs: [
      {
        question: 'Can freelancers accept UPI with RupeeFlow?',
        answer:
          'Yes. Create payment links or invoices and let clients pay through UPI, cards, and other supported modes.',
      },
      {
        question: 'Can I pay people who work with me?',
        answer:
          'Yes. Use payouts to send money to collaborators and subcontractors with a clear payment history.',
      },
      {
        question: 'How do I start?',
        answer:
          'Go to https://erp.rupeeflow.co, create your account, and share your first payment link.',
      },
    ],
  },
  {
    slug: 'b2b-manufacturing',
    name: 'B2B Manufacturing',
    shortLabel: 'B2B Manufacturing',
    navIcon: '/solutions/b2b-manufacturing.svg',
    eyebrow: 'Solutions for B2B Manufacturing',
    headline:
      'B2B manufacturing payments across cafe, restaurant, retail & beverage supply chains',
    subheadline:
      'Collect dealer invoices, pay raw-material vendors, and reconcile plant-to-distributor cash flow — one ERP for manufacturers serving cafes, restaurants, retail, and beverages.',
    metaTitle:
      'B2B Manufacturing Payment Solutions India | Dealer Collections & Vendor Payouts — RupeeFlow',
    metaDescription:
      'RupeeFlow powers B2B manufacturing payments across all segments: cafe, restaurants, retail, and beverages. Automate dealer collections, vendor payouts, and reconciliation on Onichannel.',
    keywords: [
      'B2B manufacturing payments India',
      'manufacturer dealer collection software',
      'B2B invoice payment gateway',
      'vendor payouts for manufacturers',
      'cafe supply manufacturer payments',
      'restaurant equipment manufacturer payouts',
      'retail manufacturing collections',
      'beverage manufacturing payment solutions',
      'FMCG B2B collections India',
      'RupeeFlow B2B manufacturing',
    ],
    audience:
      'Manufacturers, distributors, and B2B suppliers serving cafe, restaurant, retail, and beverage channels across India.',
    serviceType: 'B2B manufacturing collections and vendor payouts',
    industrySegments: [...B2B_MANUFACTURING_SEGMENTS],
    challenges: [
      {
        title: 'Dealer & distributor dues',
        description:
          'Collect against invoices from cafes, restaurants, retail chains, and beverage distributors with payment links and reminders.',
      },
      {
        title: 'Raw-material vendor payouts',
        description:
          'Pay suppliers and logistics partners in bulk while keeping plant-level reconciliation clean.',
      },
      {
        title: 'Multi-segment cash visibility',
        description:
          'Track collections and payouts across manufacturing segments — foodservice, retail, and beverage — in one dashboard.',
      },
    ],
    capabilities: [
      {
        title: 'B2B invoice collections',
        description:
          'Share payment links and UPI collect requests against invoices for dealers in every manufacturing segment.',
      },
      {
        title: 'Vendor & transporter payouts',
        description:
          'Disburse raw-material, packaging, and logistics payouts via UPI, IMPS, NEFT, and RTGS.',
      },
      {
        title: 'Segment-wise reconciliation',
        description:
          'Separate cafe, restaurant, retail, and beverage channel cash flows without spreadsheet chaos.',
      },
      {
        title: 'Distributor network ops',
        description:
          'Manage collections and payouts for multi-city manufacturing and distribution networks from Onichannel.',
      },
    ],
    outcomes: [
      { value: 'All segments', label: 'Cafe · Restaurant · Retail · Beverage' },
      { value: 'B2B', label: 'Invoice-led collections' },
      { value: 'Bulk', label: 'Vendor & logistics payouts' },
    ],
    steps: [
      {
        title: 'Create your manufacturing workspace',
        description:
          'Sign up on Onichannel at https://erp.rupeeflow.co and map dealers across cafe, restaurant, retail, and beverage channels.',
      },
      {
        title: 'Enable invoice collections',
        description:
          'Send payment links against B2B invoices and track dues by segment.',
      },
      {
        title: 'Automate vendor payouts',
        description:
          'Run supplier and transporter payouts with finance-ready reconciliation.',
      },
    ],
    faqs: [
      {
        question: 'Does RupeeFlow cover B2B manufacturing across all segments?',
        answer:
          'Yes. RupeeFlow supports B2B manufacturing collections and payouts for cafe supply, restaurants, retail goods, and beverage manufacturing from one ERP.',
      },
      {
        question: 'Can manufacturers collect from dealers digitally?',
        answer:
          'Yes. Use invoices, payment links, and UPI collections to recover dealer dues faster with clear status tracking.',
      },
      {
        question: 'Where do manufacturers get started?',
        answer:
          'Open your workspace at https://erp.rupeeflow.co and enable B2B collections for your manufacturing segments.',
      },
    ],
  },
  {
    slug: 'cafe',
    name: 'Cafe',
    shortLabel: 'Cafe',
    navIcon: '/solutions/cafe.svg',
    eyebrow: 'Solutions for Cafes',
    headline:
      'Cafe payments, vendor payouts & B2B manufacturing supply collections',
    subheadline:
      'Accept UPI and QR at the counter, pay coffee & packaging suppliers, and connect cafe chains with B2B manufacturing partners on one platform.',
    metaTitle:
      'Cafe Payment Solutions India | UPI QR, Supplier Payouts & B2B Manufacturing — RupeeFlow',
    metaDescription:
      'RupeeFlow helps cafes collect via UPI/QR, pay suppliers, and work with B2B manufacturing partners for coffee, packaging, and F&B supply. Start on Onichannel.',
    keywords: [
      'cafe payment gateway India',
      'cafe UPI QR payments',
      'coffee shop payment solutions',
      'cafe supplier payouts',
      'cafe B2B manufacturing payments',
      'F&B cafe collections India',
      'RupeeFlow cafe solutions',
    ],
    audience:
      'Cafe owners, multi-outlet cafe brands, and B2B manufacturers supplying cafes with coffee, packaging, and ingredients.',
    serviceType: 'Cafe payments and supplier payouts',
    industrySegments: ['Cafe', 'Coffee shops', 'B2B Manufacturing for cafes'],
    challenges: [
      {
        title: 'Counter collections',
        description:
          'Accept UPI, QR, cards, and payment links for walk-in and online cafe orders.',
      },
      {
        title: 'Daily supplier payouts',
        description:
          'Pay milk, bakery, packaging, and roasting partners without end-of-day cash stress.',
      },
      {
        title: 'B2B manufacturing supply dues',
        description:
          'Cafe chains and manufacturers settle wholesale invoices for beans, cups, and equipment digitally.',
      },
    ],
    capabilities: [
      {
        title: 'QR & UPI at counter',
        description:
          'Collect faster with QR codes, UPI, and payment links for dine-in and takeaway.',
      },
      {
        title: 'Supplier payouts',
        description:
          'Disburse payments to cafe suppliers and local vendors in bulk.',
      },
      {
        title: 'B2B manufacturing link',
        description:
          'Connect cafe outlets with manufacturing suppliers for packaging and ingredient invoice collections.',
      },
      {
        title: 'Outlet-level reports',
        description:
          'Track collections and payouts across single or multi-outlet cafe brands.',
      },
    ],
    outcomes: [
      { value: 'UPI/QR', label: 'Counter collections' },
      { value: 'Same-day', label: 'Supplier payouts' },
      { value: 'B2B', label: 'Manufacturing supply settlements' },
    ],
    steps: [
      {
        title: 'Set up cafe collections on ERP',
        description:
          'Create your Onichannel cafe workspace at https://erp.rupeeflow.co and enable UPI/QR.',
      },
      {
        title: 'Add suppliers & manufacturers',
        description:
          'Pay cafe vendors and settle B2B manufacturing invoices from one place.',
      },
      {
        title: 'Reconcile outlet cash flow',
        description:
          'Export daily collection and payout reports for every outlet.',
      },
    ],
    faqs: [
      {
        question: 'Can cafes accept UPI and QR with RupeeFlow?',
        answer:
          'Yes. Enable QR, UPI, and payment links for counter and online cafe orders.',
      },
      {
        question: 'Does this support B2B manufacturing for cafe supplies?',
        answer:
          'Yes. Cafe brands and manufacturers can settle wholesale invoices for coffee, packaging, and equipment on RupeeFlow.',
      },
      {
        question: 'How do cafes start?',
        answer:
          'Sign up at https://erp.rupeeflow.co and turn on cafe collections.',
      },
    ],
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    shortLabel: 'Restaurants',
    navIcon: '/solutions/restaurants.svg',
    eyebrow: 'Solutions for Restaurants',
    headline:
      'Restaurant collections, kitchen vendor payouts & B2B manufacturing supply payments',
    subheadline:
      'Run UPI-first dining payments, settle delivery and kitchen vendors, and connect restaurants with B2B manufacturers for equipment, packaging, and ingredients.',
    metaTitle:
      'Restaurant Payment Solutions India | UPI, Vendor Payouts & B2B Manufacturing — RupeeFlow',
    metaDescription:
      'RupeeFlow helps restaurants collect via UPI/QR/payment links, pay kitchen vendors, and settle B2B manufacturing invoices for packaging and equipment. Start on Onichannel.',
    keywords: [
      'restaurant payment gateway India',
      'restaurant UPI QR payments',
      'hotel restaurant payment solutions',
      'restaurant vendor payouts',
      'restaurant B2B manufacturing payments',
      'F&B restaurant collections India',
      'RupeeFlow restaurant solutions',
    ],
    audience:
      'Restaurants, cloud kitchens, QSRs, and B2B manufacturers supplying kitchen equipment, packaging, and ingredients.',
    serviceType: 'Restaurant payments and vendor payouts',
    industrySegments: [
      'Restaurants',
      'QSR',
      'Cloud kitchens',
      'B2B Manufacturing for restaurants',
    ],
    challenges: [
      {
        title: 'Table & delivery collections',
        description:
          'Accept UPI, QR, cards, and payment links for dine-in, takeaway, and delivery.',
      },
      {
        title: 'Kitchen vendor payouts',
        description:
          'Pay produce, meat, packaging, and logistics partners on schedule.',
      },
      {
        title: 'B2B manufacturing invoices',
        description:
          'Settle equipment, disposable packaging, and ingredient manufacturing invoices digitally.',
      },
    ],
    capabilities: [
      {
        title: 'Dining checkout',
        description:
          'Payment gateway, QR, and links for restaurants and cloud kitchens.',
      },
      {
        title: 'Kitchen & logistics payouts',
        description:
          'Bulk pay vendors and delivery partners with status tracking.',
      },
      {
        title: 'B2B manufacturing settlements',
        description:
          'Pay restaurant-focused manufacturers for packaging, equipment, and processed ingredients.',
      },
      {
        title: 'Branch reconciliation',
        description: 'Track collections and payouts across restaurant outlets.',
      },
    ],
    outcomes: [
      { value: 'UPI-first', label: 'Dining collections' },
      { value: 'Bulk', label: 'Kitchen vendor payouts' },
      { value: 'B2B', label: 'Manufacturing supply payments' },
    ],
    steps: [
      {
        title: 'Enable restaurant collections',
        description:
          'Create your Onichannel restaurant workspace at https://erp.rupeeflow.co.',
      },
      {
        title: 'Connect vendors & manufacturers',
        description:
          'Add kitchen suppliers and B2B manufacturing partners for payouts.',
      },
      {
        title: 'Run daily reconciliation',
        description:
          'Monitor outlet collections and vendor settlements in one dashboard.',
      },
    ],
    faqs: [
      {
        question: 'Can restaurants collect with UPI and QR?',
        answer:
          'Yes. Use QR, UPI, cards, and payment links for dine-in and delivery orders.',
      },
      {
        question: 'Can we pay B2B manufacturing suppliers?',
        answer:
          'Yes. Settle packaging, equipment, and ingredient manufacturing invoices through RupeeFlow payouts.',
      },
      {
        question: 'How do restaurants start?',
        answer:
          'Go to https://erp.rupeeflow.co and enable restaurant collections.',
      },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail',
    shortLabel: 'Retail',
    navIcon: '/solutions/retail.svg',
    eyebrow: 'Solutions for Retail',
    headline:
      'Retail store collections, distributor payouts & B2B manufacturing wholesale payments',
    subheadline:
      'Collect at store with UPI/QR, pay distributors, and connect retail brands with B2B manufacturers for wholesale inventory settlements.',
    metaTitle:
      'Retail Payment Solutions India | Store UPI, Distributor Payouts & B2B Manufacturing — RupeeFlow',
    metaDescription:
      'RupeeFlow helps retail stores and chains collect via UPI/QR, pay distributors, and settle B2B manufacturing wholesale invoices. Manage retail cash flow on Onichannel.',
    keywords: [
      'retail payment gateway India',
      'retail store UPI QR payments',
      'kirana and retail collections',
      'retail distributor payouts',
      'retail B2B manufacturing wholesale payments',
      'FMCG retail payment solutions',
      'RupeeFlow retail solutions',
    ],
    audience:
      'Retail stores, modern trade, kirana networks, and B2B manufacturers supplying retail goods across India.',
    serviceType: 'Retail payments and distributor payouts',
    industrySegments: [
      'Retail',
      'Kirana',
      'Modern trade',
      'B2B Manufacturing for retail',
    ],
    challenges: [
      {
        title: 'In-store collections',
        description:
          'Accept UPI, QR, cards, and payment links across single or multi-store retail.',
      },
      {
        title: 'Distributor settlements',
        description:
          'Pay distributors and logistics partners with clear batch tracking.',
      },
      {
        title: 'B2B manufacturing wholesale dues',
        description:
          'Settle manufacturing invoices for FMCG, packaging, and private-label retail supply digitally.',
      },
    ],
    capabilities: [
      {
        title: 'Store checkout rails',
        description:
          'QR, UPI, payment links, and gateway checkout for retail counters.',
      },
      {
        title: 'Distributor payouts',
        description:
          'Bulk disburse to distributors, wholesalers, and delivery fleets.',
      },
      {
        title: 'B2B manufacturing wholesale',
        description:
          'Connect retail brands with manufacturers for invoice collections and supply payouts.',
      },
      {
        title: 'Multi-store reports',
        description:
          'Reconcile collections and payouts by store, city, or brand.',
      },
    ],
    outcomes: [
      { value: 'Store-ready', label: 'UPI & QR collections' },
      { value: 'Network', label: 'Distributor payouts' },
      { value: 'B2B', label: 'Manufacturing wholesale settlements' },
    ],
    steps: [
      {
        title: 'Launch retail collections',
        description:
          'Create your Onichannel retail workspace at https://erp.rupeeflow.co.',
      },
      {
        title: 'Add distributors & manufacturers',
        description:
          'Enable payouts and B2B manufacturing invoice settlements.',
      },
      {
        title: 'Track store cash flow',
        description: 'Use live reports across outlets and supply partners.',
      },
    ],
    faqs: [
      {
        question: 'Is RupeeFlow suitable for retail stores and chains?',
        answer:
          'Yes. Collect via UPI/QR/links in-store and pay distributors from the same ERP workspace.',
      },
      {
        question: 'Does retail include B2B manufacturing payments?',
        answer:
          'Yes. Retail brands and manufacturers can settle wholesale invoices for goods and packaging on RupeeFlow.',
      },
      {
        question: 'How do retailers start?',
        answer:
          'Sign up at https://erp.rupeeflow.co and enable retail collections.',
      },
    ],
  },
  {
    slug: 'beverages',
    name: 'Beverages',
    shortLabel: 'Beverages',
    navIcon: '/solutions/beverages.svg',
    eyebrow: 'Solutions for Beverages',
    headline:
      'Beverage brand collections, distributor payouts & B2B manufacturing plant payments',
    subheadline:
      'Collect from distributors and outlets, pay bottling and packaging partners, and run B2B manufacturing cash flow for beverage plants on one ERP.',
    metaTitle:
      'Beverage Payment Solutions India | Distributor Collections & B2B Manufacturing — RupeeFlow',
    metaDescription:
      'RupeeFlow helps beverage brands collect from distributors, pay packaging/bottling partners, and manage B2B manufacturing plant payouts. Start on Onichannel.',
    keywords: [
      'beverage payment solutions India',
      'beverage distributor collections',
      'soft drink manufacturer payments',
      'beverage B2B manufacturing payouts',
      'bottling plant vendor payments',
      'FMCG beverage collections India',
      'RupeeFlow beverage solutions',
    ],
    audience:
      'Beverage brands, bottling plants, distributors, and B2B manufacturers in soft drinks, juices, dairy drinks, and packaged beverages.',
    serviceType: 'Beverage collections and manufacturing payouts',
    industrySegments: [
      'Beverages',
      'Bottling plants',
      'Beverage distributors',
      'B2B Manufacturing for beverages',
    ],
    challenges: [
      {
        title: 'Distributor collections',
        description:
          'Recover dues from beverage distributors and retail outlets with invoices and payment links.',
      },
      {
        title: 'Plant & packaging payouts',
        description:
          'Pay bottling, packaging, flavor, and logistics partners in scheduled batches.',
      },
      {
        title: 'B2B manufacturing plant cash flow',
        description:
          'Give beverage manufacturers clear visibility across production payouts and channel collections.',
      },
    ],
    capabilities: [
      {
        title: 'Channel collections',
        description:
          'Collect from distributors, cafes, restaurants, and retail partners digitally.',
      },
      {
        title: 'Manufacturing payouts',
        description:
          'Bulk pay packaging, bottling, and raw-material vendors for beverage plants.',
      },
      {
        title: 'B2B manufacturing control',
        description:
          'Operate beverage manufacturing collections and payouts with segment-wise reconciliation.',
      },
      {
        title: 'Route-to-market reports',
        description: 'Track cash movement from plant to distributor to outlet.',
      },
    ],
    outcomes: [
      { value: 'Plant-to-outlet', label: 'Cash visibility' },
      { value: 'Bulk', label: 'Bottling & packaging payouts' },
      { value: 'B2B', label: 'Manufacturing collections' },
    ],
    steps: [
      {
        title: 'Set up beverage operations on ERP',
        description:
          'Create your Onichannel workspace at https://erp.rupeeflow.co.',
      },
      {
        title: 'Enable distributor collections',
        description:
          'Send invoices and payment links across beverage channels.',
      },
      {
        title: 'Automate manufacturing payouts',
        description:
          'Pay bottling and packaging partners with reconciled reports.',
      },
    ],
    faqs: [
      {
        question: 'Can beverage manufacturers use RupeeFlow?',
        answer:
          'Yes. Beverage B2B manufacturing teams use RupeeFlow for distributor collections and plant vendor payouts.',
      },
      {
        question:
          'Does this cover cafe, restaurant, and retail beverage channels?',
        answer:
          'Yes. Collect from and pay across cafe, restaurant, and retail beverage routes from one platform.',
      },
      {
        question: 'How do beverage brands start?',
        answer:
          'Open https://erp.rupeeflow.co and enable beverage collections and payouts.',
      },
    ],
  },
]

export function getIndustrySolution(slug: string) {
  return industrySolutions.find(item => item.slug === slug)
}

export const SOLUTION_SCHEMA_KNOWS_ABOUT = [
  'B2B Manufacturing payments India',
  'Cafe payment solutions',
  'Restaurant payment solutions',
  'Retail payment solutions',
  'Beverage manufacturing payments',
  'SaaS billing India',
  'E-commerce payment gateway India',
  'Education fee collection',
  'BFSI collections and payouts',
  'Freelance payment links',
  ...B2B_MANUFACTURING_SEGMENTS,
] as const
