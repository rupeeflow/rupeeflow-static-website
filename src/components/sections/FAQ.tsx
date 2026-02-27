import FAQAccordion from '@/components/ui/FAQAccordion';
import { faqData } from '@/interface/typesInterfaces';

interface faqProps {
  faqs?: faqData[];
}

export default function FaqSection({ faqs = [] }: faqProps) {
  return <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />;
}
