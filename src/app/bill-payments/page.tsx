'use client';

import HeroSection from './components/HeroSection';
import FeatureShowcase from './components/FeatureShowcase';
import BenefitsGrid from './components/BenefitsGrid';
import StatsSection from './components/StatsSection';
import FAQSection from './components/FAQSection';
import BillPaymentHeroMockup from './components/mockups/BillPaymentHeroMockup';
import { billPaymentFeatures } from './data/features';
import { billPaymentBenefits } from './data/benefits';
import { billPaymentFAQs } from './data/faqs';
import { Zap } from 'lucide-react';

export default function BillPaymentsPage() {
  return (
    <main>
      <HeroSection
        badge={{
          text: 'Automated Bill Payments',
          icon: Zap,
        }}
        heading="Pay All Your Bills in"
        headingAccent="One Place"
        description="Simplify your life with automated utility bill payments. Pay electricity, water, gas, internet, phone, and DTH bills instantly with auto-fetch and scheduled payments."
        primaryCTA={{
          text: 'Start Paying Bills',
          href: '/contact',
          variant: 'primary' as const,
        }}
        secondaryCTA={{
          text: 'See How It Works',
          href: '#features',
          variant: 'secondary' as const,
        }}
        stats={[
          { value: '< 30s', label: 'Payment time' },
          { value: '99.9%', label: 'Success rate' },
          { value: '24/7', label: 'Support' },
        ]}
        mockupComponent={BillPaymentHeroMockup}
      />
      <FeatureShowcase features={billPaymentFeatures} />
      <BenefitsGrid
        title="Pay Bills for"
        titleAccent="All Utilities"
        subtitle="Support for all major utility providers across India"
        benefits={billPaymentBenefits}
      />
      <StatsSection
        stats={[
          { value: '< 30s', label: 'Payment time' },
          { value: '99.9%', label: 'Success rate' },
          { value: '24/7', label: 'Support' },
        ]}
      />
      <FAQSection faqs={billPaymentFAQs} />
    </main>
  );
}