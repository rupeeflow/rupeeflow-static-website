import FAQAccordion from '@/components/ui/FAQAccordion';
import type { FAQ } from '@/types/page-components';

interface FAQProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQ({ faqs, title = 'Frequently Asked Questions' }: FAQProps) {
  return <FAQAccordion faqs={faqs} title={title} />;
}
