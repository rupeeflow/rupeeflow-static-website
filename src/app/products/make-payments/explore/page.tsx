'use client';

import HeroSection from '@/app/bill-payments/components/HeroSection';
import FAQSection from '@/app/bill-payments/components/FAQSection';
import { CreditCard } from 'lucide-react';
import ExplorePaymentsHeroMockup from './components/ExplorePaymentsHeroMockup';
import PaymentMethodsGrid from './components/PaymentMethodsGrid';
import ComparisonSection from './components/ComparisonSection';
import IntegrationShowcase from './components/IntegrationShowcase';
import UseCasesSection from './components/UseCasesSection';
import { explorePaymentsFAQs } from './data/faqs';

export default function ExploreMorePaymentsPage() {
  return (
    <main>
      <HeroSection
        badge={{
          text: 'Complete Payment Solutions',
          icon: CreditCard,
        }}
        heading="Explore All"
        headingAccent="Payment Methods"
        description="Discover our comprehensive suite of payment solutions. From simple payment links to complex bulk payouts, we have everything you need to manage payments efficiently."
        primaryCTA={{
          text: 'Get Started',
          href: '/contact',
          variant: 'primary' as const,
        }}
        secondaryCTA={{
          text: 'View Documentation',
          href: '/docs',
          variant: 'secondary' as const,
        }}
        stats={[
          { value: '8+', label: 'Payment methods' },
          { value: '50+', label: 'Integrations' },
          { value: '24/7', label: 'Support' },
        ]}
        mockupComponent={ExplorePaymentsHeroMockup}
      />
      
      <PaymentMethodsGrid />
      <ComparisonSection />
      <IntegrationShowcase />
      <UseCasesSection />
      <FAQSection faqs={explorePaymentsFAQs} />
    </main>
  );
}
