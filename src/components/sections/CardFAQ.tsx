import FAQAccordion from '@/components/ui/FAQAccordion';

type FAQ = {
  question: string;
  answer: string;
};

interface CardFAQProps {
  faqs: FAQ[];
}

export default function CardFAQ({ faqs }: CardFAQProps) {
  return <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />;
}