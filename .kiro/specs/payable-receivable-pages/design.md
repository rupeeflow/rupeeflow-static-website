# Design Document: Payable & Receivable Pages

## Overview

This design document specifies the architecture and implementation details for 8 professional fintech pages focused on Payable & Receivable solutions. Each page follows a consistent design system with modern framer-motion animations, interactive calculators, and responsive layouts optimized for conversion.

### Design Principles

1. **Professional Fintech Aesthetic**: Dark hero sections (#020506) with emerald/teal gradient accents
2. **Smooth Animations**: Spring physics-based transitions using framer-motion
3. **Interactive Engagement**: Unique calculators/simulators per page
4. **Consistency**: Reusable patterns from existing pages (merchant-cash-advance, nri-emergency-loans, check-eligibility)
5. **Performance**: GPU-accelerated animations, lazy loading, code splitting
6. **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support

### Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Animation**: Framer Motion 10+
- **Styling**: Tailwind CSS 3+
- **Components**: React 18+ with hooks
- **SEO**: next-seo, structured data (JSON-LD)

## Architecture

### Page Structure Pattern

Each of the 8 pages follows this consistent structure:

```
app/
  [page-route]/
    page.tsx                    # Main page component (client component)
    components/
      HeroSection.tsx           # Dark hero with gradient text
      [Page]Calculator.tsx      # Interactive calculator/simulator
      BenefitsGrid.tsx          # Feature cards with icons
      StatsSection.tsx          # Animated metrics
      HowItWorksSection.tsx     # Process steps
      UseCasesSection.tsx       # Industry examples
      FAQSection.tsx            # Accordion FAQ
      CTASection.tsx            # Final call-to-action
```

### Shared Components

Reusable components stored in `src/components/`:

- `Container.tsx`: Max-width wrapper with responsive padding
- `FAQ.tsx`: Generic FAQ accordion component
- `StructuredData.tsx`: SEO schema components


### Animation System

All animations use framer-motion with consistent patterns:

**Viewport Animations**:
```typescript
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
viewport={{ once: true }}
```

**Stagger Animations**:
```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}
```

**Spring Physics**:
```typescript
const springConfig = { damping: 30, stiffness: 100 }
const x = useSpring(mouseX, springConfig)
```

**Hover Effects**:
```typescript
whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
```

### Routing Structure

```
/collection-reminders       → Payment Reminders page
/digital-invoicing          → E-Invoicing page
/collection-analytics       → Analytics page
/auto-reconciliation        → Auto Reconciliation page
/invoice-management         → Invoice Management page
/vendor-management          → Vendor Management page
/payable-analytics          → Payable Analytics page
/cashflow-analytics         → Cashflow Analytics page
```

## Components and Interfaces

### 1. Hero Section Component

**Purpose**: First impression section with value proposition and primary CTAs

**Interface**:
```typescript
interface HeroSectionProps {
  badge: string                    // e.g., "24hr Automation • 99% Accuracy"
  title: string                    // Main heading
  highlightText: string            // Gradient text portion
  description: string              // Subheading
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
  trustIndicators: string[]        // e.g., ["RBI Compliant", "100% Secure"]
  heroImage: string                // Image path
  floatingElements?: FloatingElement[]
}

interface FloatingElement {
  type: 'notification' | 'badge' | 'icon'
  content: React.ReactNode
  position: { top?: string, left?: string, right?: string, bottom?: string }
  animation: 'float' | 'pulse' | 'slide'
}
```

**Animation Pattern**:
- Content fades in with y-offset (0.8s duration)
- Badge scales in (0.6s delay)
- CTAs fade in (0.4s delay)
- Hero image slides from right (0.3s delay)
- Floating elements stagger in (1.3s+ delays)

**Styling**:
- Background: `bg-[#020506]`
- Gradient text: `from-[#53BEC2] to-[#00EF64]`
- Primary button: `from-emerald-500 to-emerald-600`
- Secondary button: `border-emerald-500/50`


### 2. Calculator/Simulator Components

Each page has a unique interactive component. Here are the specifications:

#### Payment Reminders Calculator

**Purpose**: Calculate potential revenue recovery from automated reminders

**Interface**:
```typescript
interface PaymentRemindersCalculatorProps {}

interface CalculatorState {
  monthlyInvoices: number          // Number of invoices per month
  averageInvoiceValue: number      // Average invoice amount
  currentCollectionRate: number    // Current % collected on time
}

interface CalculatorResult {
  potentialRecovery: number        // Additional revenue from reminders
  timesSaved: number               // Hours saved per month
  collectionImprovement: number    // % improvement in collection rate
}
```

**Logic**:
```
potentialRecovery = monthlyInvoices × averageInvoiceValue × (0.85 - currentCollectionRate/100)
timeSaved = monthlyInvoices × 0.5  // 30 minutes per manual reminder
collectionImprovement = 85 - currentCollectionRate  // Target 85% collection rate
```

#### E-Invoicing Calculator

**Purpose**: Calculate GST compliance savings and efficiency gains

**Interface**:
```typescript
interface EInvoicingCalculatorProps {}

interface CalculatorState {
  monthlyInvoices: number
  averageProcessingTime: number    // Minutes per invoice
  errorRate: number                // Current error %
}

interface CalculatorResult {
  timeSaved: number                // Hours saved per month
  costSavings: number              // ₹ saved on manual processing
  errorReduction: number           // % reduction in errors
  gstCompliance: boolean           // Auto GST compliance status
}
```

**Logic**:
```
timeSaved = (monthlyInvoices × averageProcessingTime × 0.7) / 60
costSavings = timeSaved × 500  // ₹500 per hour labor cost
errorReduction = errorRate × 0.9  // 90% error reduction
gstCompliance = true  // Always compliant with e-invoicing
```

#### Collection Analytics Calculator

**Purpose**: Estimate insights value from analytics dashboard

**Interface**:
```typescript
interface CollectionAnalyticsCalculatorProps {}

interface CalculatorState {
  monthlyRevenue: number
  numberOfCustomers: number
  averageDSO: number               // Days Sales Outstanding
}

interface CalculatorResult {
  dsoImprovement: number           // Days reduced
  cashflowImprovement: number      // ₹ improved cash position
  riskCustomers: number            // Number of at-risk customers identified
  actionableInsights: number       // Number of insights per month
}
```

**Logic**:
```
dsoImprovement = Math.min(averageDSO × 0.25, 15)  // 25% improvement, max 15 days
cashflowImprovement = (monthlyRevenue / 30) × dsoImprovement
riskCustomers = Math.floor(numberOfCustomers × 0.15)
actionableInsights = Math.floor(numberOfCustomers / 10) + 5
```


#### Auto Reconciliation Calculator

**Purpose**: Calculate time and cost savings from automated reconciliation

**Interface**:
```typescript
interface AutoReconciliationCalculatorProps {}

interface CalculatorState {
  monthlyTransactions: number
  manualReconciliationTime: number // Hours per month
  errorRate: number                // Current error %
}

interface CalculatorResult {
  timeSaved: number                // Hours saved per month
  costSavings: number              // ₹ saved per month
  accuracyImprovement: number      // % accuracy improvement
  monthlyROI: number               // Return on investment %
}
```

**Logic**:
```
timeSaved = manualReconciliationTime × 0.85  // 85% time reduction
costSavings = timeSaved × 800  // ₹800 per hour for accounting staff
accuracyImprovement = (100 - errorRate) - errorRate  // Near 100% accuracy
monthlyROI = (costSavings / 5000) × 100  // Assuming ₹5000 monthly cost
```

#### Invoice Management Calculator

**Purpose**: Calculate efficiency gains from centralized invoice management

**Interface**:
```typescript
interface InvoiceManagementCalculatorProps {}

interface CalculatorState {
  monthlyInvoices: number
  averageApprovalTime: number      // Days for approval
  numberOfApprovers: number
}

interface CalculatorResult {
  approvalTimeReduction: number    // Days reduced
  processingSpeedUp: number        // % faster processing
  visibilityScore: number          // Real-time visibility score
  complianceScore: number          // Audit compliance score
}
```

**Logic**:
```
approvalTimeReduction = Math.min(averageApprovalTime × 0.6, 5)  // 60% reduction
processingSpeedUp = (approvalTimeReduction / averageApprovalTime) × 100
visibilityScore = 95  // Real-time dashboard visibility
complianceScore = 98  // Automated audit trail
```

#### Vendor Management Calculator

**Purpose**: Calculate relationship and payment optimization benefits

**Interface**:
```typescript
interface VendorManagementCalculatorProps {}

interface CalculatorState {
  numberOfVendors: number
  monthlyPayments: number
  averagePaymentDelay: number      // Days delayed
}

interface CalculatorResult {
  discountsAvailable: number       // ₹ from early payment discounts
  relationshipScore: number        // Vendor satisfaction score
  paymentAccuracy: number          // % on-time payments
  timesSaved: number               // Hours saved on vendor queries
}
```

**Logic**:
```
discountsAvailable = monthlyPayments × 0.02  // 2% early payment discount
relationshipScore = Math.min(70 + (10 - averagePaymentDelay) × 3, 95)
paymentAccuracy = 95  // Target 95% on-time
timeSaved = numberOfVendors × 0.5  // 30 min per vendor per month
```


#### Payable Analytics Calculator

**Purpose**: Calculate insights value from payable analytics

**Interface**:
```typescript
interface PayableAnalyticsCalculatorProps {}

interface CalculatorState {
  monthlySpend: number
  numberOfVendors: number
  paymentCycles: number            // Payments per month
}

interface CalculatorResult {
  savingsOpportunities: number     // ₹ potential savings identified
  spendVisibility: number          // % spend visibility
  forecastAccuracy: number         // % forecast accuracy
  optimizationScore: number        // Overall optimization score
}
```

**Logic**:
```
savingsOpportunities = monthlySpend × 0.08  // 8% savings potential
spendVisibility = 98  // Near-complete visibility
forecastAccuracy = 92  // 92% forecast accuracy
optimizationScore = Math.min(60 + (numberOfVendors / 10), 95)
```

#### Cashflow Analytics Calculator

**Purpose**: Calculate cashflow forecasting and liquidity benefits

**Interface**:
```typescript
interface CashflowAnalyticsCalculatorProps {}

interface CalculatorState {
  monthlyRevenue: number
  monthlyExpenses: number
  currentCashReserve: number
}

interface CalculatorResult {
  forecastAccuracy: number         // % accuracy
  runwayDays: number               // Days of cash runway
  liquidityScore: number           // Liquidity health score
  riskAlerts: number               // Number of risk alerts
}
```

**Logic**:
```
netCashflow = monthlyRevenue - monthlyExpenses
forecastAccuracy = 94  // 94% forecast accuracy
runwayDays = Math.floor((currentCashReserve / monthlyExpenses) × 30)
liquidityScore = Math.min((currentCashReserve / monthlyExpenses) × 25, 100)
riskAlerts = runwayDays < 30 ? 3 : runwayDays < 60 ? 1 : 0
```

### 3. Benefits Grid Component

**Purpose**: Display key features and benefits in a scannable grid

**Interface**:
```typescript
interface BenefitsGridProps {
  benefits: Benefit[]
}

interface Benefit {
  icon: React.ReactNode | string   // Icon component or path
  title: string
  description: string
  highlight?: string               // Optional metric or highlight
}
```

**Layout**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Gap: 6-8 spacing units

**Animation**:
```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}
```

**Card Styling**:
- Background: `bg-white` with `border-2 border-gray-100`
- Hover: `hover:shadow-xl hover:scale-105`
- Padding: `p-6 md:p-8`
- Border radius: `rounded-2xl`
- Icon container: `w-14 h-14 rounded-xl bg-emerald-50`


### 4. Stats Section Component

**Purpose**: Display impressive metrics with animated counters

**Interface**:
```typescript
interface StatsSectionProps {
  stats: Stat[]
  title?: string
  description?: string
}

interface Stat {
  value: string | number
  label: string
  suffix?: string                  // e.g., "%", "hrs", "L"
  prefix?: string                  // e.g., "₹", "$"
  animateCounter?: boolean         // Enable number animation
}
```

**Counter Animation**:
```typescript
import { useInView } from 'framer-motion'
import { useEffect, useState } from 'react'

function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration
      
      if (progress < 1) {
        setCount(Math.floor(value * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, value, duration])
  
  return <span ref={ref}>{count}</span>
}
```

**Layout**:
- Grid: 2 columns (mobile), 4 columns (desktop)
- Centered alignment
- Large numbers: `text-4xl md:text-5xl font-bold`
- Labels: `text-sm text-gray-600`

### 5. How It Works Section

**Purpose**: Explain the process in simple, sequential steps

**Interface**:
```typescript
interface HowItWorksSectionProps {
  steps: ProcessStep[]
  title?: string
  description?: string
}

interface ProcessStep {
  number: number
  icon: React.ReactNode | string
  title: string
  description: string
}
```

**Visual Design**:
- Step indicator: Large number in emerald circle
- Connecting lines: Dashed lines between steps (desktop only)
- Icons: Emerald-themed icons above each step
- Layout: Horizontal on desktop, vertical on mobile

**Animation**:
```typescript
const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}
```

### 6. Use Cases Section

**Purpose**: Show industry-specific applications and examples

**Interface**:
```typescript
interface UseCasesSectionProps {
  useCases: UseCase[]
  title?: string
}

interface UseCase {
  industry: string
  icon: string
  scenario: string
  solution: string
  results: string[]
}
```

**Card Design**:
- Two-column layout (desktop), single column (mobile)
- Industry icon with gradient background
- Scenario description
- Solution explanation
- Results as bullet points with checkmarks

**Animation**: Stagger cards with 0.15s delay


### 7. FAQ Section Component

**Purpose**: Answer common questions with accordion interface

**Interface**:
```typescript
interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

interface FAQ {
  question: string
  answer: string
}
```

**Accordion Behavior**:
```typescript
const [openIndex, setOpenIndex] = useState<number | null>(null)

const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? null : index)
}
```

**Animation**:
```typescript
<motion.div
  initial={false}
  animate={{
    height: isOpen ? 'auto' : 0,
    opacity: isOpen ? 1 : 0
  }}
  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
>
  {answer}
</motion.div>
```

**Styling**:
- Question: Bold, emerald color when active
- Answer: Gray text, padded content
- Border: Bottom border between items
- Icon: Chevron that rotates when open

### 8. CTA Section Component

**Purpose**: Final conversion section with strong call-to-action

**Interface**:
```typescript
interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  features?: string[]              // Quick feature list
}
```

**Design**:
- Dark background with gradient overlay
- Large, centered text
- Prominent gradient button
- Optional feature list with checkmarks
- Subtle background animation

**Animation**:
```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
```

## Data Models

### Page Configuration

Each page requires a configuration object:

```typescript
interface PageConfig {
  route: string
  title: string
  description: string
  hero: HeroConfig
  calculator: CalculatorConfig
  benefits: Benefit[]
  stats: Stat[]
  howItWorks: ProcessStep[]
  useCases: UseCase[]
  faqs: FAQ[]
  cta: CTAConfig
  seo: SEOConfig
}

interface SEOConfig {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogImage: string
  structuredData: {
    type: string
    properties: Record<string, any>
  }
}
```

### Calculator State Management

All calculators follow this pattern:

```typescript
interface CalculatorState<T> {
  inputs: T
  result: CalculatorResult | null
  isCalculating: boolean
  error: string | null
}

interface CalculatorResult {
  [key: string]: number | string | boolean
}

// Example usage
const [state, setState] = useState<CalculatorState<PaymentRemindersInputs>>({
  inputs: {
    monthlyInvoices: 0,
    averageInvoiceValue: 0,
    currentCollectionRate: 0
  },
  result: null,
  isCalculating: false,
  error: null
})
```


### Animation Variants Library

Reusable animation variants for consistency:

```typescript
// src/lib/animations.ts

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}
```

### Responsive Breakpoints

Tailwind breakpoints used consistently:

```typescript
// Mobile: < 640px (default)
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px

// Common patterns:
// Text: text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// Padding: px-6 md:px-8 lg:px-12
// Gap: gap-6 md:gap-8 lg:gap-12
```

## Page-Specific Content

### 1. Payment Reminders (/collection-reminders)

**Value Proposition**: Automate payment reminders and improve collection rates

**Hero Content**:
- Title: "Automate Payment Reminders & Boost Collections"
- Highlight: "Collection Rates"
- Description: "Send smart, automated reminders via SMS, email, and WhatsApp. Improve collection rates by 35% and reduce DSO by 15 days."
- Badge: "24hr Automation • 99% Delivery Rate"

**Benefits**:
1. Multi-channel reminders (SMS, Email, WhatsApp)
2. Smart scheduling based on payment behavior
3. Customizable reminder templates
4. Real-time delivery tracking
5. Automated escalation workflows
6. Payment link integration

**Stats**:
- 35% improvement in collection rates
- 15 days reduction in DSO
- 99% reminder delivery rate
- 80% time saved on manual follow-ups

**How It Works**:
1. Set up reminder schedules
2. Customize message templates
3. System sends automated reminders
4. Track delivery and responses
5. Collect payments faster

**Use Cases**:
- B2B service companies with net-30 terms
- Subscription businesses with recurring payments
- Freelancers and consultants
- Small businesses with multiple clients


### 2. E-Invoicing (/digital-invoicing)

**Value Proposition**: Generate GST-compliant digital invoices instantly

**Hero Content**:
- Title: "Generate GST-Compliant Digital Invoices"
- Highlight: "E-Invoices"
- Description: "Create, send, and track professional invoices in seconds. Fully GST-compliant with automatic e-invoice generation and IRP integration."
- Badge: "GST Compliant • Instant Generation"

**Benefits**:
1. Automatic GST calculation and compliance
2. E-invoice generation with IRP integration
3. Professional customizable templates
4. Bulk invoice generation
5. Digital signature support
6. Automatic invoice numbering

**Stats**:
- 70% faster invoice generation
- 100% GST compliance
- 90% reduction in errors
- 50% faster payment collection

**How It Works**:
1. Enter invoice details or import data
2. System generates GST-compliant invoice
3. Auto-submit to IRP for e-invoice
4. Send to customer via email/WhatsApp
5. Track invoice status and payments

**Use Cases**:
- B2B businesses requiring GST compliance
- Exporters needing e-invoice for customs
- Service providers with multiple clients
- Manufacturers with dealer networks

### 3. Analytics (/collection-analytics)

**Value Proposition**: Get actionable insights on collection performance

**Hero Content**:
- Title: "Collection Analytics & Insights Dashboard"
- Highlight: "Insights"
- Description: "Real-time analytics on collection performance, customer payment behavior, and cash flow forecasting. Make data-driven decisions."
- Badge: "Real-time Insights • Predictive Analytics"

**Benefits**:
1. Real-time collection dashboard
2. Customer payment behavior analysis
3. DSO tracking and trends
4. Aging analysis and reports
5. Predictive payment forecasting
6. Risk customer identification

**Stats**:
- 25% improvement in DSO
- 95% forecast accuracy
- 40% faster decision making
- 100+ actionable insights per month

**How It Works**:
1. Connect your accounting system
2. System analyzes payment data
3. View real-time dashboards
4. Get predictive insights
5. Take action on recommendations

**Use Cases**:
- CFOs needing cash flow visibility
- Credit managers tracking collections
- Sales teams monitoring customer health
- Finance teams forecasting cash flow

### 4. Auto Reconciliation (/auto-reconciliation)

**Value Proposition**: Automate bank reconciliation and payment matching

**Hero Content**:
- Title: "Automate Bank Reconciliation in Minutes"
- Highlight: "Reconciliation"
- Description: "Match payments automatically with invoices. Eliminate manual reconciliation work and achieve 99.9% accuracy."
- Badge: "99.9% Accuracy • 85% Time Saved"

**Benefits**:
1. Automatic payment matching
2. Multi-bank account support
3. Smart matching algorithms
4. Exception handling workflows
5. Audit trail and reporting
6. Real-time reconciliation status

**Stats**:
- 85% time saved on reconciliation
- 99.9% matching accuracy
- 95% reduction in errors
- 10x faster month-end close

**How It Works**:
1. Connect bank accounts
2. Import bank statements
3. System auto-matches payments
4. Review exceptions
5. Approve and finalize reconciliation

**Use Cases**:
- Accounting teams doing monthly reconciliation
- Businesses with high transaction volumes
- Multi-location businesses
- Companies with multiple bank accounts


### 5. Invoice Management (/invoice-management)

**Value Proposition**: Centralized invoice tracking and approval workflows

**Hero Content**:
- Title: "Centralized Invoice Management System"
- Highlight: "Management"
- Description: "Track all invoices in one place. Automated approval workflows, vendor portals, and real-time visibility into invoice status."
- Badge: "Real-time Tracking • Automated Workflows"

**Benefits**:
1. Centralized invoice repository
2. Multi-level approval workflows
3. Vendor self-service portal
4. Document attachment support
5. Automated notifications
6. Audit trail and compliance

**Stats**:
- 60% faster approval process
- 95% real-time visibility
- 80% reduction in queries
- 98% audit compliance

**How It Works**:
1. Receive invoices (email/upload/vendor portal)
2. System routes for approval
3. Approvers review and approve
4. Schedule payment
5. Track status in real-time

**Use Cases**:
- Companies with multi-level approvals
- Businesses with many vendors
- Organizations needing audit trails
- Teams working remotely

### 6. Vendor Management (/vendor-management)

**Value Proposition**: Optimize vendor relationships and payment terms

**Hero Content**:
- Title: "Vendor Management & Relationship Optimization"
- Highlight: "Relationships"
- Description: "Manage vendor onboarding, payment terms, and relationships. Unlock early payment discounts and improve vendor satisfaction."
- Badge: "2% Discounts • 95% Satisfaction"

**Benefits**:
1. Centralized vendor database
2. Automated vendor onboarding
3. Payment terms management
4. Early payment discount tracking
5. Vendor performance scoring
6. Communication history

**Stats**:
- 2% savings from early payment discounts
- 95% vendor satisfaction score
- 50% faster onboarding
- 90% reduction in payment queries

**How It Works**:
1. Onboard vendors with digital forms
2. Set payment terms and schedules
3. Track vendor performance
4. Identify discount opportunities
5. Maintain vendor relationships

**Use Cases**:
- Procurement teams managing suppliers
- Finance teams optimizing cash flow
- Businesses with many vendors
- Companies seeking cost savings

### 7. Payable Analytics (/payable-analytics)

**Value Proposition**: Insights into spending patterns and optimization opportunities

**Hero Content**:
- Title: "Payable Analytics & Spend Intelligence"
- Highlight: "Intelligence"
- Description: "Analyze spending patterns, identify savings opportunities, and forecast cash needs. Get 98% spend visibility."
- Badge: "98% Visibility • 8% Savings"

**Benefits**:
1. Real-time spend dashboard
2. Category-wise spend analysis
3. Vendor spend concentration
4. Payment timing optimization
5. Budget vs actual tracking
6. Savings opportunity identification

**Stats**:
- 8% potential cost savings identified
- 98% spend visibility
- 92% forecast accuracy
- 40% faster reporting

**How It Works**:
1. Connect accounting system
2. System analyzes payable data
3. View spend dashboards
4. Get optimization recommendations
5. Track savings implementation

**Use Cases**:
- CFOs managing budgets
- Procurement teams optimizing spend
- Finance teams forecasting cash needs
- Controllers analyzing cost structure


### 8. Cashflow Analytics (/cashflow-analytics)

**Value Proposition**: Forecast cash position and manage liquidity

**Hero Content**:
- Title: "Cashflow Forecasting & Liquidity Management"
- Highlight: "Cashflow"
- Description: "Real-time cash position tracking with 94% forecast accuracy. Predict cash needs and avoid liquidity crunches."
- Badge: "94% Accuracy • Real-time Tracking"

**Benefits**:
1. Real-time cash position dashboard
2. 13-week cash flow forecasting
3. Scenario planning tools
4. Liquidity risk alerts
5. Working capital optimization
6. Cash runway calculation

**Stats**:
- 94% forecast accuracy
- 30+ days advance warning
- 25% improvement in working capital
- 100% visibility into cash position

**How It Works**:
1. Connect bank and accounting systems
2. System tracks cash inflows/outflows
3. View real-time cash position
4. Get forecast and alerts
5. Plan for cash needs

**Use Cases**:
- CFOs managing liquidity
- Finance teams forecasting cash
- Growing businesses needing visibility
- Companies with seasonal cash flows

## Error Handling

### Calculator Validation

All calculators implement input validation:

```typescript
interface ValidationRule {
  field: string
  rules: {
    required?: boolean
    min?: number
    max?: number
    pattern?: RegExp
    custom?: (value: any) => boolean
  }
  message: string
}

const validateInput = (value: any, rules: ValidationRule['rules']): string | null => {
  if (rules.required && !value) {
    return 'This field is required'
  }
  
  if (rules.min !== undefined && value < rules.min) {
    return `Minimum value is ${rules.min}`
  }
  
  if (rules.max !== undefined && value > rules.max) {
    return `Maximum value is ${rules.max}`
  }
  
  if (rules.pattern && !rules.pattern.test(value)) {
    return 'Invalid format'
  }
  
  if (rules.custom && !rules.custom(value)) {
    return 'Invalid value'
  }
  
  return null
}
```

### Error States

Visual error handling:

```typescript
interface ErrorState {
  field: string
  message: string
}

// Display error
<div className="text-red-600 text-sm mt-1">
  {error.message}
</div>

// Input with error state
<input
  className={`border-2 ${
    error ? 'border-red-500' : 'border-gray-200'
  } focus:border-emerald-500`}
/>
```

### Loading States

Calculator loading states:

```typescript
{isCalculating ? (
  <div className="flex items-center justify-center py-8">
    <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
  </div>
) : (
  <ResultDisplay result={result} />
)}
```

## Testing Strategy

### Unit Testing

Test individual components and functions:

```typescript
// Calculator logic tests
describe('PaymentRemindersCalculator', () => {
  it('calculates potential recovery correctly', () => {
    const result = calculateRecovery({
      monthlyInvoices: 100,
      averageInvoiceValue: 10000,
      currentCollectionRate: 70
    })
    
    expect(result.potentialRecovery).toBe(150000)
  })
  
  it('handles edge case of 100% collection rate', () => {
    const result = calculateRecovery({
      monthlyInvoices: 100,
      averageInvoiceValue: 10000,
      currentCollectionRate: 100
    })
    
    expect(result.potentialRecovery).toBe(0)
  })
})

// Component rendering tests
describe('HeroSection', () => {
  it('renders with correct props', () => {
    render(<HeroSection {...mockProps} />)
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
  })
  
  it('displays trust indicators', () => {
    render(<HeroSection {...mockProps} />)
    mockProps.trustIndicators.forEach(indicator => {
      expect(screen.getByText(indicator)).toBeInTheDocument()
    })
  })
})
```

### Integration Testing

Test component interactions:

```typescript
describe('Calculator Integration', () => {
  it('updates result when inputs change', async () => {
    render(<PaymentRemindersCalculator />)
    
    const invoiceInput = screen.getByLabelText(/monthly invoices/i)
    fireEvent.change(invoiceInput, { target: { value: '100' } })
    
    const calculateButton = screen.getByText(/calculate/i)
    fireEvent.click(calculateButton)
    
    await waitFor(() => {
      expect(screen.getByText(/potential recovery/i)).toBeInTheDocument()
    })
  })
})
```

### Accessibility Testing

Ensure WCAG compliance:

```typescript
describe('Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<HeroSection {...mockProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
  
  it('supports keyboard navigation', () => {
    render(<FAQSection faqs={mockFaqs} />)
    const firstQuestion = screen.getAllByRole('button')[0]
    
    firstQuestion.focus()
    expect(firstQuestion).toHaveFocus()
    
    fireEvent.keyDown(firstQuestion, { key: 'Enter' })
    expect(screen.getByText(mockFaqs[0].answer)).toBeVisible()
  })
})
```

### Performance Testing

Monitor animation and rendering performance:

```typescript
describe('Performance', () => {
  it('renders large lists efficiently', () => {
    const manyBenefits = Array(100).fill(mockBenefit)
    
    const startTime = performance.now()
    render(<BenefitsGrid benefits={manyBenefits} />)
    const endTime = performance.now()
    
    expect(endTime - startTime).toBeLessThan(100) // 100ms threshold
  })
  
  it('animations do not block main thread', async () => {
    render(<HeroSection {...mockProps} />)
    
    // Simulate scroll to trigger animations
    fireEvent.scroll(window, { target: { scrollY: 100 } })
    
    // Main thread should remain responsive
    const button = screen.getByText(/apply now/i)
    fireEvent.click(button)
    
    expect(button).toBeEnabled()
  })
})
```


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property Reflection

After analyzing all acceptance criteria, I identified several areas where properties can be consolidated:

1. **Color consistency properties** (11.4-11.7) can be combined into a single comprehensive color scheme property
2. **Responsive layout properties** (10.2-10.4) can be combined into a single responsive grid property
3. **Typography properties** (11.1-11.2) can be combined into a single typography consistency property
4. **Animation configuration properties** (3.3-3.8) share common patterns and can be consolidated
5. **Accessibility properties** (14.1-14.8) can be grouped into comprehensive accessibility compliance properties
6. **SEO properties** (13.1-13.6) can be combined into comprehensive SEO compliance property

### Core Properties

#### Property 1: Route Configuration Completeness
*For all* 8 specified routes (/collection-reminders, /digital-invoicing, /collection-analytics, /auto-reconciliation, /invoice-management, /vendor-management, /payable-analytics, /cashflow-analytics), navigating to the route should render the corresponding page component with all required sections.

**Validates: Requirements 1.1, 1.2**

#### Property 2: Client Component Declaration
*For all* 8 page files, the file should contain the 'use client' directive at the top of the file.

**Validates: Requirements 1.3**

#### Property 3: Semantic HTML Structure
*For all* pages, the page should be wrapped in a main element and contain sections in semantic order (hero, calculator, benefits, stats, how-it-works, use-cases, faq, cta).

**Validates: Requirements 1.4, 13.3**

#### Property 4: Structured Data Inclusion
*For all* pages, the page should include both WebPageSchema and FAQSchema structured data components with required fields (title, description, URL for WebPageSchema; questions and answers for FAQSchema).

**Validates: Requirements 1.5, 13.1, 13.2**

#### Property 5: Hero Section Dark Theme
*For all* pages, the hero section should have background color #020506 and include gradient text using the emerald-to-teal color scheme (from-[#53BEC2] to-[#00EF64]).

**Validates: Requirements 2.1, 2.2**

#### Property 6: Hero Section Component Completeness
*For all* hero sections, the section should include: badge component with emerald styling, gradient text heading, description text, two CTA buttons (primary gradient and secondary outlined), trust indicators with checkmark icons, and hero image.

**Validates: Requirements 2.3, 2.4, 2.5, 2.6, 2.8**

#### Property 7: Viewport Animation Pattern
*For all* sections that animate on viewport entry, the section should use framer-motion with initial={{ opacity: 0, y: 40 }}, whileInView={{ opacity: 1, y: 0 }}, and viewport={{ once: true }}.

**Validates: Requirements 2.7, 3.2**

#### Property 8: Animation Library Consistency
*For all* animated elements, the element should use framer-motion components (motion.div, motion.section, etc.) rather than other animation libraries or CSS animations.

**Validates: Requirements 3.1**

#### Property 9: Stagger Animation Configuration
*For all* card grids with stagger animations, the container should have staggerChildren delay between 0.1 and 0.2 seconds.

**Validates: Requirements 3.3**

#### Property 10: Spring Physics Configuration
*For all* spring-based animations, the animation should use damping: 30 and stiffness: 100 for smooth, natural motion.

**Validates: Requirements 3.4**

#### Property 11: Parallax Movement Constraint
*For all* parallax effects, the maximum movement should be limited to 6 pixels in any direction.

**Validates: Requirements 3.5**

#### Property 12: Floating Animation Pattern
*For all* floating notification cards, the element should have continuous y-axis animation with pattern y: [0, -2.5, 0] or similar small range.

**Validates: Requirements 3.6**

#### Property 13: Hover Scale Effect
*For all* interactive cards and buttons, the element should have whileHover prop with scale between 1.02 and 1.05.

**Validates: Requirements 3.7**

#### Property 14: Easing Function Consistency
*For all* smooth transitions, the transition should use easing function [0.22, 1, 0.36, 1] for consistent motion feel.

**Validates: Requirements 3.8**

#### Property 15: Reduced Motion Accessibility
*For all* pages, when prefers-reduced-motion media query is active, animations should be disabled or significantly reduced.

**Validates: Requirements 3.10, 14.7**

#### Property 16: Calculator Uniqueness
*For all* 8 pages, each page should have a different calculator component specific to its purpose (PaymentRemindersCalculator, EInvoicingCalculator, etc.).

**Validates: Requirements 4.1**

#### Property 17: Calculator Reactivity
*For all* calculators, when any input value changes, the result should update in real-time without requiring a separate calculate button click (or immediately after clicking calculate if button is present).

**Validates: Requirements 4.2**

#### Property 18: Calculator Input Validation
*For all* calculator input fields, the field should have validation logic that checks for required values, minimum/maximum bounds, and appropriate data types.

**Validates: Requirements 4.3**

#### Property 19: Calculator Result Animation
*For all* calculator results displaying numbers, the numbers should animate using an animated counter component that counts from 0 to the final value.

**Validates: Requirements 4.4**

#### Property 20: Calculator Color Scheme
*For all* calculator positive results and success indicators, the elements should use emerald color classes (emerald-500, emerald-600, etc.).

**Validates: Requirements 4.5**

#### Property 21: Calculator Responsive Design
*For all* calculators, the layout should be responsive with single column on mobile (< 768px) and multi-column on desktop (>= 768px).

**Validates: Requirements 4.7**

#### Property 22: Benefits Grid Structure
*For all* pages, the benefits grid should contain between 4 and 6 feature cards, each with an icon, heading, and description.

**Validates: Requirements 5.1, 5.2**

#### Property 23: Benefits Grid Animation
*For all* benefits grids, when the section enters the viewport, cards should animate with a stagger effect using staggerChildren.

**Validates: Requirements 5.3**

#### Property 24: Benefits Grid Responsive Layout
*For all* benefits grids, the grid should display 1 column on mobile (< 768px), 2 columns on tablet (768px-1024px), and 3 columns on desktop (>= 1024px).

**Validates: Requirements 5.6, 10.2, 10.3, 10.4**

#### Property 25: Stats Section Structure
*For all* pages, the stats section should display between 3 and 4 key metrics with large numbers and descriptive labels.

**Validates: Requirements 6.1**

#### Property 26: Stats Counter Animation
*For all* stat numbers, when the stats section enters the viewport, numbers should animate counting up from 0 to the final value.

**Validates: Requirements 6.2**

#### Property 27: Stats Styling Consistency
*For all* stat numbers, the numbers should be displayed in large, bold font (text-4xl or larger) with emerald color (emerald-500 or emerald-600).

**Validates: Requirements 6.3**

#### Property 28: Process Section Structure
*For all* pages, the "How It Works" section should contain between 3 and 5 sequential steps, each with a number indicator, icon, heading, and description.

**Validates: Requirements 7.1, 7.2**

#### Property 29: Process Section Animation
*For all* process sections, when the section enters the viewport, steps should animate sequentially with stagger delays.

**Validates: Requirements 7.4**

#### Property 30: Process Section Responsive Layout
*For all* process sections, the layout should be horizontal with connecting lines on desktop (>= 1024px) and vertical without lines on mobile (< 1024px).

**Validates: Requirements 7.3, 7.5**

#### Property 31: FAQ Section Structure
*For all* pages, the FAQ section should contain between 6 and 8 questions with corresponding answers.

**Validates: Requirements 8.1**

#### Property 32: FAQ Accordion Behavior
*For all* FAQ sections, clicking a question should expand its answer with smooth animation, and clicking another question should collapse the previously open answer (single-open accordion).

**Validates: Requirements 8.2, 8.3**

#### Property 33: FAQ Active State Styling
*For all* FAQ items, when a question is active/open, it should display emerald accent colors (emerald-500 or emerald-600).

**Validates: Requirements 8.5**

#### Property 34: CTA Section Placement
*For all* pages, the CTA section should be the last section before the footer.

**Validates: Requirements 9.1**

#### Property 35: CTA Button Styling
*For all* CTA sections, the primary button should have a gradient background from emerald-500 to emerald-600 (or teal-500/600) with hover animation including scale and shadow effects.

**Validates: Requirements 9.2, 9.4**

#### Property 36: Color Scheme Consistency
*For all* pages, text on dark backgrounds should use white (#ffffff) for primary text and gray-300 for secondary text; interactive elements should use emerald-500 for primary and emerald-400 for accents.

**Validates: Requirements 11.4, 11.5, 11.6, 11.7**

#### Property 37: Typography Consistency
*For all* pages, main headings should use the fontheading class and body text should use the fontbody2 class.

**Validates: Requirements 11.1, 11.2**

#### Property 38: Gradient Text Application
*For all* hero headings, key phrases should have gradient text effect using bg-gradient-to-r from-[#53BEC2] to-[#00EF64] with bg-clip-text and text-transparent.

**Validates: Requirements 11.3**

#### Property 39: Responsive Typography
*For all* headings, font sizes should scale responsively using Tailwind breakpoint classes (e.g., text-4xl sm:text-5xl md:text-6xl lg:text-7xl).

**Validates: Requirements 10.5**

#### Property 40: Image Component Usage
*For all* images, the Next.js Image component should be used instead of standard HTML img tags, with width and height attributes specified.

**Validates: Requirements 12.1, 12.3**

#### Property 41: Hero Image Priority
*For all* hero images (above-the-fold), the Image component should have the priority prop set to true for optimized loading.

**Validates: Requirements 12.2**

#### Property 42: Image Lazy Loading
*For all* below-the-fold images, the Image component should use lazy loading (priority prop should be false or omitted).

**Validates: Requirements 12.5**

#### Property 43: Icon Format Consistency
*For all* icons used in the interface, the icons should be SVG elements or components rather than raster images.

**Validates: Requirements 12.6**

#### Property 44: Alt Text Completeness
*For all* images, the Image component should have a descriptive alt attribute that explains the image content.

**Validates: Requirements 13.4**

#### Property 45: Heading Hierarchy
*For all* pages, headings should follow proper hierarchy with one h1, followed by h2s for major sections, and h3s for subsections.

**Validates: Requirements 13.5**

#### Property 46: Unique Meta Tags
*For all* pages, each page should have unique meta title and description tags that accurately describe the page content.

**Validates: Requirements 13.6**

#### Property 47: Color Contrast Compliance
*For all* text elements, normal text should have a contrast ratio of at least 4.5:1 and large text should have a contrast ratio of at least 3:1 against their backgrounds.

**Validates: Requirements 14.1, 14.2**

#### Property 48: ARIA Label Presence
*For all* interactive elements without visible text labels (icon buttons, etc.), the element should have an aria-label or aria-labelledby attribute.

**Validates: Requirements 14.3**

#### Property 49: Keyboard Navigation Support
*For all* interactive elements (buttons, links, inputs, accordions), the element should be keyboard accessible and respond to appropriate keyboard events (Enter, Space, Arrow keys).

**Validates: Requirements 14.4**

#### Property 50: Focus Indicator Visibility
*For all* interactive elements, when focused via keyboard navigation, the element should display a visible focus indicator (outline or ring).

**Validates: Requirements 14.5**

#### Property 51: Touch Target Size
*For all* interactive elements on mobile viewports (< 768px), the element should have a minimum touch target size of 44x44 pixels.

**Validates: Requirements 10.7**

#### Property 52: Page-Specific Content Presence
*For each* of the 8 pages, the page should contain content specific to its topic (payment reminders, e-invoicing, analytics, reconciliation, invoice management, vendor management, payable analytics, or cashflow analytics).

**Validates: Requirements 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8**

#### Property 53: Component Props Type Safety
*For all* React components, the component should have a TypeScript interface defining its props with proper types (no 'any' types unless absolutely necessary).

**Validates: Requirements 18.1, 18.4**

#### Property 54: Calculator Type Safety
*For all* calculator functions, input parameters and return values should have explicit TypeScript types defined.

**Validates: Requirements 18.2**

#### Property 55: GPU-Accelerated Animations
*For all* animations, the animation should use transform and opacity properties rather than layout properties (width, height, top, left) for GPU acceleration.

**Validates: Requirements 19.1, 19.2**

#### Property 56: Intersection Observer Usage
*For all* viewport-triggered animations, the animation should use framer-motion's whileInView with viewport prop or React's intersection observer API.

**Validates: Requirements 19.4**

#### Property 57: Mobile Input Types
*For all* calculator input fields, numeric inputs should use type="number", email inputs should use type="email", and phone inputs should use type="tel" for appropriate mobile keyboards.

**Validates: Requirements 20.2**

#### Property 58: Mobile Zoom Prevention
*For all* input fields on mobile, the input should have font-size of at least 16px to prevent automatic zoom on focus.

**Validates: Requirements 20.3**


## Error Handling

### Input Validation Errors

All calculator inputs should validate user input and display clear error messages:

**Validation Rules**:
- Required fields: Display "This field is required" if empty
- Minimum values: Display "Minimum value is X" if below threshold
- Maximum values: Display "Maximum value is X" if above threshold
- Invalid format: Display "Invalid format" for pattern mismatches

**Error Display**:
```typescript
{error && (
  <div className="text-red-600 text-sm mt-1 flex items-center gap-1">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    {error.message}
  </div>
)}
```

### Loading States

Display loading indicators during calculations or data fetching:

```typescript
{isCalculating ? (
  <div className="flex items-center justify-center py-12">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-emerald-200 rounded-full" />
      <div className="absolute top-0 left-0 w-12 h-12 border-4 b