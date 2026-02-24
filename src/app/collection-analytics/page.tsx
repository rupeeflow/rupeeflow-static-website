'use client';
//test

import HeroSection from './components/HeroSection';
import DashboardPreview from './components/DashboardPreview';
import InsightsGrid from './components/InsightsGrid';
import StatsSection from './components/StatsSection';
import FeaturesShowcase from './components/FeaturesShowcase';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { WebPageSchema, FAQSchema } from '@/components/StructuredData';

const faqs = [
  {
    question: 'What insights can I get from collection analytics?',
    answer:
      'Get comprehensive insights including DSO trends, customer payment behavior, aging analysis, collection efficiency, risk identification, and cash flow forecasting. Our AI-powered analytics identify patterns and provide actionable recommendations.',
  },
  {
    question: 'How does the predictive analytics work?',
    answer:
      'Our machine learning models analyze historical payment data, customer behavior, and market trends to predict payment delays, identify at-risk customers, and forecast cash flow with 95% accuracy.',
  },
  {
    question: 'Can I customize the dashboards?',
    answer:
      'Yes! Create custom dashboards with drag-and-drop widgets, set up personalized KPIs, and configure alerts based on your specific business needs. Save multiple dashboard views for different teams.',
  },
  {
    question: 'How often is the data updated?',
    answer:
      'All analytics are updated in real-time as payments are received and invoices are created. You always have access to the most current data for making informed decisions.',
  },
  {
    question: 'Can I export reports?',
    answer:
      'Yes, export reports in PDF, Excel, or CSV formats. Schedule automated reports to be sent to stakeholders daily, weekly, or monthly via email.',
  },
  {
    question: 'Does it integrate with my accounting software?',
    answer:
      'We integrate with all major accounting platforms including Tally, QuickBooks, Zoho Books, and SAP. Data syncs automatically in real-time.',
  },
  {
    question: 'What is DSO and why does it matter?',
    answer:
      'Days Sales Outstanding (DSO) measures how long it takes to collect payment after a sale. Lower DSO means better cash flow. Our analytics help you identify trends and take action to reduce DSO.',
  },
  {
    question: 'Can multiple team members access the analytics?',
    answer:
      'Yes, set up role-based access for your team. CFOs get strategic insights, credit managers see collection metrics, and sales teams monitor customer health - all with appropriate permissions.',
  },
];

export default function CollectionAnalyticsPage() {
  return (
    <main>
      <WebPageSchema
        title="Collection Analytics & Insights - RupeeFlow"
        description="Real-time collection analytics with predictive insights. Track DSO, identify at-risk customers, and make data-driven decisions with 95% forecast accuracy."
        url="https://rupeeflow.com/collection-analytics"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <DashboardPreview />
      <InsightsGrid />
      <StatsSection />
      <FeaturesShowcase />
      <FAQSection />
      <CTASection />
    </main>
  );
}
