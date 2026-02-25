# Implementation Plan: Payable & Receivable Pages

## Overview

This implementation plan covers the development of 8 professional fintech pages for the Payable & Receivable section. Each page follows a consistent design system with modern framer-motion animations, interactive calculators, and responsive layouts. The pages are: Payment Reminders, E-Invoicing, Collection Analytics, Auto Reconciliation, Invoice Management, Vendor Management, Payable Analytics, and Cashflow Analytics.

The implementation follows an incremental approach: shared components first, then page-by-page implementation with their unique calculators, and finally testing and optimization.

## Tasks

- [x] 1. Set up shared animation utilities and TypeScript types
  - Create `src/lib/animations.ts` with reusable framer-motion variants (fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn, floatingAnimation)
  - Create `src/types/page-components.ts` with TypeScript interfaces for all component props (HeroSectionProps, BenefitProps, StatProps, ProcessStepProps, UseCaseProps, FAQProps, CTAProps)
  - Create `src/types/calculators.ts` with calculator state and result interfaces for all 8 calculators
  - Export spring physics constants (damping: 30, stiffness: 100) and easing function [0.22, 1, 0.36, 1]
  - _Requirements: 3.1, 3.4, 3.8, 18.1, 18.2, 18.5_

- [x] 2. Create shared component library
  - [x] 2.1 Create FAQ accordion component
    - Build `src/components/FAQ.tsx` with accordion behavior (single-open pattern)
    - Implement smooth expand/collapse animations using framer-motion
    - Style with emerald accents for active states
    - Add keyboard navigation support (Enter/Space to toggle)
    - Include ARIA attributes for accessibility
    - _Requirements: 8.1, 8.2, 8.3, 8.5, 14.3, 14.4_

  - [x] 2.2 Create structured data components
    - Build `src/components/StructuredData.tsx` with WebPageSchema and FAQSchema components
    - Accept props for title, description, URL, and FAQ data
    - Generate JSON-LD format for SEO
    - _Requirements: 1.5, 13.1, 13.2_

  - [x] 2.3 Create animated counter component
    - Build `src/components/AnimatedCounter.tsx` using useInView and requestAnimationFrame
    - Implement counting animation from 0 to target value over 2 seconds
    - Support prefix (₹, $) and suffix (%, hrs, L) formatting
    - Trigger animation when element enters viewport
    - _Requirements: 4.4, 6.2_


- [x] 3. Implement Payment Reminders page (/collection-reminders)
  - [x] 3.1 Create HeroSection component
    - Build `src/app/collection-reminders/components/HeroSection.tsx`
    - Implement dark background (#020506) with gradient text (from-[#53BEC2] to-[#00EF64])
    - Add badge: "24hr Automation • 99% Delivery Rate"
    - Include two CTAs: primary gradient button and secondary outlined button
    - Add trust indicators with checkmark icons
    - Implement fade-in animation with y-offset
    - Add floating notification elements with continuous animation
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 15.1_

  - [x] 3.2 Create PaymentRemindersCalculator component
    - Build `src/app/collection-reminders/components/PaymentRemindersCalculator.tsx`
    - Add inputs: monthlyInvoices, averageInvoiceValue, currentCollectionRate
    - Implement calculation logic: potentialRecovery = monthlyInvoices × averageInvoiceValue × (0.85 - currentCollectionRate/100)
    - Calculate timeSaved = monthlyInvoices × 0.5 hours
    - Calculate collectionImprovement = 85 - currentCollectionRate
    - Add input validation (required, min/max bounds)
    - Display results with animated counters
    - Style with emerald color scheme
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.7_

  - [x] 3.3 Create BenefitsGrid component
    - Build `src/app/collection-reminders/components/BenefitsGrid.tsx`
    - Display 6 benefits: Multi-channel reminders, Smart scheduling, Customizable templates, Real-time tracking, Automated escalation, Payment link integration
    - Implement responsive grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
    - Add stagger animation with 0.1s delay between cards
    - Implement hover effects with scale: 1.05
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [x] 3.4 Create StatsSection component
    - Build `src/app/collection-reminders/components/StatsSection.tsx`
    - Display 4 stats: 35% collection improvement, 15 days DSO reduction, 99% delivery rate, 80% time saved
    - Use AnimatedCounter for number animations
    - Style with large emerald numbers
    - Implement staggered fade-in animations
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 3.5 Create HowItWorksSection component
    - Build `src/app/collection-reminders/components/HowItWorksSection.tsx`
    - Display 5 steps: Set up schedules, Customize templates, System sends reminders, Track delivery, Collect payments
    - Add step numbers in emerald circles
    - Connect steps with dashed lines (desktop only)
    - Implement sequential stagger animation
    - Make responsive: horizontal (desktop), vertical (mobile)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [x] 3.6 Create UseCasesSection component
    - Build `src/app/collection-reminders/components/UseCasesSection.tsx`
    - Display 4 use cases: B2B service companies, Subscription businesses, Freelancers, Small businesses
    - Include industry icon, scenario, solution, and results for each
    - Implement two-column layout (desktop), single column (mobile)
    - Add stagger animation with 0.15s delay
    - _Requirements: 15.1_

  - [x] 3.7 Create FAQSection component
    - Build `src/app/collection-reminders/components/FAQSection.tsx`
    - Add 8 relevant FAQs about payment reminders
    - Use shared FAQ accordion component
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 3.8 Create CTASection component
    - Build `src/app/collection-reminders/components/CTASection.tsx`
    - Add dark background with gradient overlay
    - Include prominent gradient button
    - Add supporting text and feature list with checkmarks
    - Implement fade-in animation
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 3.9 Assemble Payment Reminders page
    - Update `src/app/collection-reminders/page.tsx` with 'use client' directive
    - Import and arrange all components in semantic order
    - Add WebPageSchema and FAQSchema structured data
    - Wrap in main element with proper sections
    - Ensure responsive design and accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_


- [x] 4. Implement E-Invoicing page (/digital-invoicing)
  - [x] 4.1 Create HeroSection component
    - Build `src/app/digital-invoicing/components/HeroSection.tsx`
    - Badge: "GST Compliant • Instant Generation"
    - Title: "Generate GST-Compliant Digital Invoices"
    - Highlight: "E-Invoices"
    - Follow same pattern as Payment Reminders hero
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 15.2_

  - [x] 4.2 Create EInvoicingCalculator component
    - Build `src/app/digital-invoicing/components/EInvoicingCalculator.tsx`
    - Add inputs: monthlyInvoices, averageProcessingTime, errorRate
    - Calculate timeSaved = (monthlyInvoices × averageProcessingTime × 0.7) / 60
    - Calculate costSavings = timeSaved × 500
    - Calculate errorReduction = errorRate × 0.9
    - Set gstCompliance = true
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.7_

  - [x] 4.3 Create BenefitsGrid component
    - Build `src/app/digital-invoicing/components/BenefitsGrid.tsx`
    - Display 6 benefits: GST calculation, IRP integration, Customizable templates, Bulk generation, Digital signature, Auto numbering
    - Follow same pattern as Payment Reminders benefits
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [x] 4.4 Create StatsSection component
    - Build `src/app/digital-invoicing/components/StatsSection.tsx`
    - Display 4 stats: 70% faster generation, 100% GST compliance, 90% error reduction, 50% faster collection
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 4.5 Create HowItWorksSection component
    - Build `src/app/digital-invoicing/components/HowItWorksSection.tsx`
    - Display 5 steps: Enter details, Generate invoice, Submit to IRP, Send to customer, Track status
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [x] 4.6 Create UseCasesSection component
    - Build `src/app/digital-invoicing/components/UseCasesSection.tsx`
    - Display 4 use cases: B2B businesses, Exporters, Service providers, Manufacturers
    - _Requirements: 15.2_

  - [x] 4.7 Create FAQSection and CTASection components
    - Build FAQ and CTA components following established patterns
    - _Requirements: 8.1, 8.2, 8.3, 9.1, 9.2, 9.3, 9.4_

  - [x] 4.8 Assemble E-Invoicing page
    - Update `src/app/digital-invoicing/page.tsx` with all components
    - Add structured data and ensure accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 5. Implement Collection Analytics page (/collection-analytics)
  - [x] 5.1 Create HeroSection component
    - Build `src/app/collection-analytics/components/HeroSection.tsx`
    - Badge: "Real-time Insights • Predictive Analytics"
    - Title: "Collection Analytics & Insights Dashboard"
    - Highlight: "Insights"
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 15.3_

  - [x] 5.2 Create CollectionAnalyticsCalculator component
    - Build `src/app/collection-analytics/components/CollectionAnalyticsCalculator.tsx`
    - Add inputs: monthlyRevenue, numberOfCustomers, averageDSO
    - Calculate dsoImprovement = Math.min(averageDSO × 0.25, 15)
    - Calculate cashflowImprovement = (monthlyRevenue / 30) × dsoImprovement
    - Calculate riskCustomers = Math.floor(numberOfCustomers × 0.15)
    - Calculate actionableInsights = Math.floor(numberOfCustomers / 10) + 5
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.7_

  - [x] 5.3 Create BenefitsGrid component
    - Build `src/app/collection-analytics/components/BenefitsGrid.tsx`
    - Display 6 benefits: Real-time dashboard, Payment behavior analysis, DSO tracking, Aging analysis, Predictive forecasting, Risk identification
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [x] 5.4 Create StatsSection component
    - Build `src/app/collection-analytics/components/StatsSection.tsx`
    - Display 4 stats: 25% DSO improvement, 95% forecast accuracy, 40% faster decisions, 100+ insights/month
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 5.5 Create HowItWorksSection component
    - Build `src/app/collection-analytics/components/HowItWorksSection.tsx`
    - Display 5 steps: Connect system, Analyze data, View dashboards, Get insights, Take action
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [x] 5.6 Create UseCasesSection component
    - Build `src/app/collection-analytics/components/UseCasesSection.tsx`
    - Display 4 use cases: CFOs, Credit managers, Sales teams, Finance teams
    - _Requirements: 15.3_

  - [x] 5.7 Create FAQSection and CTASection components
    - Build FAQ and CTA components following established patterns
    - _Requirements: 8.1, 8.2, 8.3, 9.1, 9.2, 9.3, 9.4_

  - [x] 5.8 Assemble Collection Analytics page
    - Update `src/app/collection-analytics/page.tsx` with all components
    - Add structured data and ensure accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_


- [ ] 6. Implement Auto Reconciliation page (/auto-reconciliation)
  - [ ] 6.1 Create HeroSection component
    - Build `src/app/auto-reconciliation/components/HeroSection.tsx`
    - Badge: "99.9% Accuracy • 85% Time Saved"
    - Title: "Automate Bank Reconciliation in Minutes"
    - Highlight: "Reconciliation"
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 15.4_

  - [ ] 6.2 Create AutoReconciliationCalculator component
    - Build `src/app/auto-reconciliation/components/AutoReconciliationCalculator.tsx`
    - Add inputs: monthlyTransactions, manualReconciliationTime, errorRate
    - Calculate timeSaved = manualReconciliationTime × 0.85
    - Calculate costSavings = timeSaved × 800
    - Calculate accuracyImprovement = (100 - errorRate) - errorRate
    - Calculate monthlyROI = (costSavings / 5000) × 100
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.7_

  - [ ] 6.3 Create BenefitsGrid component
    - Build `src/app/auto-reconciliation/components/BenefitsGrid.tsx`
    - Display 6 benefits: Auto payment matching, Multi-bank support, Smart algorithms, Exception handling, Audit trail, Real-time status
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [ ] 6.4 Create StatsSection component
    - Build `src/app/auto-reconciliation/components/StatsSection.tsx`
    - Display 4 stats: 85% time saved, 99.9% accuracy, 95% error reduction, 10x faster close
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ] 6.5 Create HowItWorksSection component
    - Build `src/app/auto-reconciliation/components/HowItWorksSection.tsx`
    - Display 5 steps: Connect banks, Import statements, Auto-match payments, Review exceptions, Finalize
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [ ] 6.6 Create UseCasesSection component
    - Build `src/app/auto-reconciliation/components/UseCasesSection.tsx`
    - Display 4 use cases: Accounting teams, High-volume businesses, Multi-location businesses, Multiple bank accounts
    - _Requirements: 15.4_

  - [ ] 6.7 Create FAQSection and CTASection components
    - Build FAQ and CTA components following established patterns
    - _Requirements: 8.1, 8.2, 8.3, 9.1, 9.2, 9.3, 9.4_

  - [ ] 6.8 Assemble Auto Reconciliation page
    - Update `src/app/auto-reconciliation/page.tsx` with all components
    - Add structured data and ensure accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 7. Checkpoint - Review first 4 pages
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Implement Invoice Management page (/invoice-management)
  - [ ] 8.1 Create HeroSection component
    - Build `src/app/invoice-management/components/HeroSection.tsx`
    - Badge: "Real-time Tracking • Automated Workflows"
    - Title: "Centralized Invoice Management System"
    - Highlight: "Management"
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 15.5_

  - [ ] 8.2 Create InvoiceManagementCalculator component
    - Build `src/app/invoice-management/components/InvoiceManagementCalculator.tsx`
    - Add inputs: monthlyInvoices, averageApprovalTime, numberOfApprovers
    - Calculate approvalTimeReduction = Math.min(averageApprovalTime × 0.6, 5)
    - Calculate processingSpeedUp = (approvalTimeReduction / averageApprovalTime) × 100
    - Set visibilityScore = 95
    - Set complianceScore = 98
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.7_

  - [ ] 8.3 Create BenefitsGrid component
    - Build `src/app/invoice-management/components/BenefitsGrid.tsx`
    - Display 6 benefits: Centralized repository, Multi-level approvals, Vendor portal, Document attachments, Auto notifications, Audit trail
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [ ] 8.4 Create StatsSection component
    - Build `src/app/invoice-management/components/StatsSection.tsx`
    - Display 4 stats: 60% faster approvals, 95% visibility, 80% fewer queries, 98% compliance
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ] 8.5 Create HowItWorksSection component
    - Build `src/app/invoice-management/components/HowItWorksSection.tsx`
    - Display 5 steps: Receive invoices, Route for approval, Review and approve, Schedule payment, Track status
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [ ] 8.6 Create UseCasesSection component
    - Build `src/app/invoice-management/components/UseCasesSection.tsx`
    - Display 4 use cases: Multi-level approvals, Many vendors, Audit trails, Remote teams
    - _Requirements: 15.5_

  - [ ] 8.7 Create FAQSection and CTASection components
    - Build FAQ and CTA components following established patterns
    - _Requirements: 8.1, 8.2, 8.3, 9.1, 9.2, 9.3, 9.4_

  - [ ] 8.8 Assemble Invoice Management page
    - Update `src/app/invoice-management/page.tsx` with all components
    - Add structured data and ensure accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_


- [ ] 9. Implement Vendor Management page (/vendor-management)
  - [ ] 9.1 Create HeroSection component
    - Build `src/app/vendor-management/components/HeroSection.tsx`
    - Badge: "2% Discounts • 95% Satisfaction"
    - Title: "Vendor Management & Relationship Optimization"
    - Highlight: "Relationships"
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 15.6_

  - [ ] 9.2 Create VendorManagementCalculator component
    - Build `src/app/vendor-management/components/VendorManagementCalculator.tsx`
    - Add inputs: numberOfVendors, monthlyPayments, averagePaymentDelay
    - Calculate discountsAvailable = monthlyPayments × 0.02
    - Calculate relationshipScore = Math.min(70 + (10 - averagePaymentDelay) × 3, 95)
    - Set paymentAccuracy = 95
    - Calculate timeSaved = numberOfVendors × 0.5
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.7_

  - [ ] 9.3 Create BenefitsGrid component
    - Build `src/app/vendor-management/components/BenefitsGrid.tsx`
    - Display 6 benefits: Centralized database, Auto onboarding, Payment terms, Discount tracking, Performance scoring, Communication history
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [ ] 9.4 Create StatsSection component
    - Build `src/app/vendor-management/components/StatsSection.tsx`
    - Display 4 stats: 2% savings from discounts, 95% satisfaction, 50% faster onboarding, 90% fewer queries
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ] 9.5 Create HowItWorksSection component
    - Build `src/app/vendor-management/components/HowItWorksSection.tsx`
    - Display 5 steps: Onboard vendors, Set payment terms, Track performance, Identify discounts, Maintain relationships
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [ ] 9.6 Create UseCasesSection component
    - Build `src/app/vendor-management/components/UseCasesSection.tsx`
    - Display 4 use cases: Procurement teams, Finance teams, Many vendors, Cost savings
    - _Requirements: 15.6_

  - [ ] 9.7 Create FAQSection and CTASection components
    - Build FAQ and CTA components following established patterns
    - _Requirements: 8.1, 8.2, 8.3, 9.1, 9.2, 9.3, 9.4_

  - [ ] 9.8 Assemble Vendor Management page
    - Update `src/app/vendor-management/page.tsx` with all components
    - Add structured data and ensure accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 10. Implement Payable Analytics page (/payable-analytics)
  - [ ] 10.1 Create HeroSection component
    - Build `src/app/payable-analytics/components/HeroSection.tsx`
    - Badge: "98% Visibility • 8% Savings"
    - Title: "Payable Analytics & Spend Intelligence"
    - Highlight: "Intelligence"
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 15.7_

  - [ ] 10.2 Create PayableAnalyticsCalculator component
    - Build `src/app/payable-analytics/components/PayableAnalyticsCalculator.tsx`
    - Add inputs: monthlySpend, numberOfVendors, paymentCycles
    - Calculate savingsOpportunities = monthlySpend × 0.08
    - Set spendVisibility = 98
    - Set forecastAccuracy = 92
    - Calculate optimizationScore = Math.min(60 + (numberOfVendors / 10), 95)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.7_

  - [ ] 10.3 Create BenefitsGrid component
    - Build `src/app/payable-analytics/components/BenefitsGrid.tsx`
    - Display 6 benefits: Real-time dashboard, Category analysis, Vendor concentration, Payment optimization, Budget tracking, Savings identification
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [ ] 10.4 Create StatsSection component
    - Build `src/app/payable-analytics/components/StatsSection.tsx`
    - Display 4 stats: 8% savings identified, 98% visibility, 92% forecast accuracy, 40% faster reporting
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ] 10.5 Create HowItWorksSection component
    - Build `src/app/payable-analytics/components/HowItWorksSection.tsx`
    - Display 5 steps: Connect system, Analyze payables, View dashboards, Get recommendations, Track savings
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [ ] 10.6 Create UseCasesSection component
    - Build `src/app/payable-analytics/components/UseCasesSection.tsx`
    - Display 4 use cases: CFOs, Procurement teams, Finance teams, Controllers
    - _Requirements: 15.7_

  - [ ] 10.7 Create FAQSection and CTASection components
    - Build FAQ and CTA components following established patterns
    - _Requirements: 8.1, 8.2, 8.3, 9.1, 9.2, 9.3, 9.4_

  - [ ] 10.8 Assemble Payable Analytics page
    - Update `src/app/payable-analytics/page.tsx` with all components
    - Add structured data and ensure accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_


- [ ] 11. Implement Cashflow Analytics page (/cashflow-analytics)
  - [ ] 11.1 Create HeroSection component
    - Build `src/app/cashflow-analytics/components/HeroSection.tsx`
    - Badge: "94% Accuracy • Real-time Tracking"
    - Title: "Cashflow Forecasting & Liquidity Management"
    - Highlight: "Cashflow"
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 15.8_

  - [ ] 11.2 Create CashflowAnalyticsCalculator component
    - Build `src/app/cashflow-analytics/components/CashflowAnalyticsCalculator.tsx`
    - Add inputs: monthlyRevenue, monthlyExpenses, currentCashReserve
    - Calculate netCashflow = monthlyRevenue - monthlyExpenses
    - Set forecastAccuracy = 94
    - Calculate runwayDays = Math.floor((currentCashReserve / monthlyExpenses) × 30)
    - Calculate liquidityScore = Math.min((currentCashReserve / monthlyExpenses) × 25, 100)
    - Calculate riskAlerts = runwayDays < 30 ? 3 : runwayDays < 60 ? 1 : 0
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.7_

  - [ ] 11.3 Create BenefitsGrid component
    - Build `src/app/cashflow-analytics/components/BenefitsGrid.tsx`
    - Display 6 benefits: Real-time dashboard, 13-week forecasting, Scenario planning, Liquidity alerts, Working capital optimization, Cash runway
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.6_

  - [ ] 11.4 Create StatsSection component
    - Build `src/app/cashflow-analytics/components/StatsSection.tsx`
    - Display 4 stats: 94% forecast accuracy, 30+ days warning, 25% working capital improvement, 100% visibility
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ] 11.5 Create HowItWorksSection component
    - Build `src/app/cashflow-analytics/components/HowItWorksSection.tsx`
    - Display 5 steps: Connect systems, Track cash flows, View position, Get forecasts, Plan for needs
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [ ] 11.6 Create UseCasesSection component
    - Build `src/app/cashflow-analytics/components/UseCasesSection.tsx`
    - Display 4 use cases: CFOs, Finance teams, Growing businesses, Seasonal cash flows
    - _Requirements: 15.8_

  - [ ] 11.7 Create FAQSection and CTASection components
    - Build FAQ and CTA components following established patterns
    - _Requirements: 8.1, 8.2, 8.3, 9.1, 9.2, 9.3, 9.4_

  - [ ] 11.8 Assemble Cashflow Analytics page
    - Update `src/app/cashflow-analytics/page.tsx` with all components
    - Add structured data and ensure accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 12. Checkpoint - Review all 8 pages
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 13. Implement responsive design optimizations
  - [ ] 13.1 Verify mobile layouts for all pages
    - Test all 8 pages on mobile viewport (< 768px)
    - Ensure single-column layouts, proper spacing, and touch targets (44x44px minimum)
    - Verify hero sections stack vertically with image above text
    - Test calculator inputs with mobile keyboards (type="number", type="email", type="tel")
    - Ensure font-size >= 16px on inputs to prevent zoom
    - _Requirements: 10.1, 10.2, 10.6, 10.7, 20.1, 20.2, 20.3_

  - [ ] 13.2 Verify tablet layouts for all pages
    - Test all 8 pages on tablet viewport (768px-1024px)
    - Ensure 2-column grids for benefits and stats
    - Verify proper spacing and readability
    - _Requirements: 10.1, 10.3_

  - [ ] 13.3 Verify desktop layouts for all pages
    - Test all 8 pages on desktop viewport (>= 1024px)
    - Ensure 3-column grids for benefits
    - Verify horizontal process sections with connecting lines
    - Test parallax effects and hover animations
    - _Requirements: 10.1, 10.4_

  - [ ] 13.4 Optimize responsive typography
    - Verify all headings use responsive font sizes (text-4xl sm:text-5xl md:text-6xl lg:text-7xl)
    - Ensure consistent spacing across breakpoints
    - _Requirements: 10.5, 11.8_


- [ ] 14. Implement accessibility enhancements
  - [ ] 14.1 Add ARIA labels and semantic HTML
    - Verify all interactive elements without visible text have aria-label or aria-labelledby
    - Ensure proper semantic HTML (main, section, article, nav)
    - Add role attributes where needed for custom components
    - _Requirements: 13.3, 14.3, 14.8_

  - [ ] 14.2 Implement keyboard navigation
    - Test all interactive elements (buttons, links, inputs, accordions) with keyboard
    - Ensure Tab, Enter, Space, and Arrow keys work appropriately
    - Verify focus indicators are visible (outline or ring)
    - Test FAQ accordion with keyboard (Enter/Space to toggle)
    - _Requirements: 14.4, 14.5_

  - [ ] 14.3 Verify color contrast ratios
    - Test all text elements for 4.5:1 contrast ratio (normal text)
    - Test large text for 3:1 contrast ratio
    - Verify emerald colors on dark backgrounds meet standards
    - Use browser DevTools or contrast checker tools
    - _Requirements: 14.1, 14.2_

  - [ ] 14.4 Implement reduced motion support
    - Add prefers-reduced-motion media query checks
    - Disable or reduce animations when user prefers reduced motion
    - Test with browser settings: prefers-reduced-motion: reduce
    - _Requirements: 3.10, 14.7_

  - [ ] 14.5 Add alt text and text alternatives
    - Verify all images have descriptive alt attributes
    - Ensure icons have text alternatives or aria-labels
    - Test with screen reader (NVDA, JAWS, or VoiceOver)
    - _Requirements: 13.4, 14.6_

- [ ] 15. Optimize images and assets
  - [ ] 15.1 Implement Next.js Image optimization
    - Verify all images use Next.js Image component
    - Set priority prop on hero images (above-the-fold)
    - Specify width and height attributes for all images
    - Implement lazy loading for below-the-fold images
    - _Requirements: 12.1, 12.2, 12.3, 12.5_

  - [ ] 15.2 Optimize image formats and sizes
    - Use WebP format with fallbacks where appropriate
    - Ensure images are properly sized for their display dimensions
    - Compress images without quality loss
    - _Requirements: 12.4_

  - [ ] 15.3 Use SVG for icons
    - Verify all icons are SVG elements or components
    - Ensure SVGs are optimized and minified
    - _Requirements: 12.6_

- [ ] 16. Implement SEO optimizations
  - [ ] 16.1 Add structured data to all pages
    - Verify WebPageSchema on all 8 pages with title, description, URL
    - Verify FAQSchema on all 8 pages with questions and answers
    - Test structured data with Google Rich Results Test
    - _Requirements: 1.5, 13.1, 13.2_

  - [ ] 16.2 Verify heading hierarchy
    - Ensure each page has one h1 (main title)
    - Verify h2s for major sections, h3s for subsections
    - Check heading order is logical and sequential
    - _Requirements: 13.5_

  - [ ] 16.3 Add unique meta tags
    - Create unique meta title for each of the 8 pages
    - Create unique meta description for each page
    - Verify meta tags are descriptive and keyword-rich
    - _Requirements: 13.6_

- [ ] 17. Performance optimization
  - [ ] 17.1 Implement code splitting
    - Verify page components are properly code-split
    - Use dynamic imports for below-the-fold components if needed
    - _Requirements: 16.2_

  - [ ] 17.2 Optimize animations for performance
    - Verify all animations use transform and opacity (GPU-accelerated)
    - Avoid animating layout properties (width, height, top, left)
    - Use will-change sparingly for complex animations
    - Limit simultaneous animations
    - _Requirements: 19.1, 19.2, 19.3, 19.5_

  - [ ] 17.3 Implement lazy loading for sections
    - Use intersection observer for viewport-triggered animations
    - Lazy load below-the-fold sections where appropriate
    - _Requirements: 16.3, 19.4_

  - [ ] 17.4 Run Lighthouse performance audit
    - Test all 8 pages with Lighthouse
    - Aim for performance score above 90
    - Address any performance warnings
    - _Requirements: 16.1_

- [ ] 18. Final testing and quality assurance
  - [ ] 18.1 Cross-browser testing
    - Test all 8 pages on Chrome, Firefox, Safari, Edge
    - Verify animations work consistently across browsers
    - Test calculator functionality on all browsers
    - Check for any browser-specific issues

  - [ ] 18.2 Device testing
    - Test on actual mobile devices (iOS and Android)
    - Test on tablets (iPad, Android tablets)
    - Verify touch interactions work properly
    - Test swipe gestures where implemented
    - _Requirements: 20.4_

  - [ ] 18.3 Verify TypeScript type safety
    - Ensure no TypeScript errors in any component
    - Verify all component props have proper interfaces
    - Check calculator types are correctly defined
    - Avoid 'any' types except where necessary
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5_

  - [ ] 18.4 Test all calculator logic
    - Verify calculations are correct for all 8 calculators
    - Test edge cases (zero values, very large values, negative values)
    - Verify input validation works properly
    - Test error states and loading states
    - _Requirements: 4.2, 4.3, 4.8_

  - [ ] 18.5 Verify animation consistency
    - Check all animations use consistent easing and timing
    - Verify stagger animations have proper delays
    - Test hover effects on all interactive elements
    - Ensure parallax effects are subtle (max 6px movement)
    - _Requirements: 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [ ] 19. Final checkpoint - Complete review
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Each page follows the same component structure for consistency and maintainability
- All calculators implement real-time calculation with input validation
- Animations use framer-motion with consistent spring physics (damping: 30, stiffness: 100)
- Color scheme is consistent across all pages: emerald/teal gradients on dark backgrounds
- All pages are fully responsive with mobile-first approach
- Accessibility is prioritized with WCAG 2.1 AA compliance
- SEO optimization includes structured data and semantic HTML
- Performance is optimized with GPU-accelerated animations and lazy loading
- TypeScript ensures type safety throughout the codebase
