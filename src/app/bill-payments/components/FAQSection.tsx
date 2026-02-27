import FAQAccordion from '@/components/ui/FAQAccordion';
import { FAQItem } from '@/types/payment-pages';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

/**
 * FAQSection Component
 * 
 * Displays frequently asked questions using the standardized FAQAccordion component.
 * 
 * Requirements: 1.6, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 14.7
 */
export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
}: FAQSectionProps) {
  return <FAQAccordion faqs={faqs} title={title} subtitle={subtitle} />;
}
