import FAQAccordion from '@/components/ui/FAQAccordion'

const faqs = [
  {
    question: 'What makes RupeeFlow different from other payment gateways in India?',
    answer:
      'RupeeFlow stands out with India\'s first voice-powered payment system, supporting 12+ regional languages. We offer instant settlements, 99.9% uptime guarantee, and zero setup fees. Our AI-powered fraud detection and customizable workflows make us the preferred choice for 50,000+ Indian businesses.',
  },
  {
    question: 'How quickly can I start accepting payments with RupeeFlow?',
    answer:
      'You can start accepting payments within 5 minutes! Simply sign up, complete KYC (takes 2-3 minutes), and integrate using our ready-to-use Payment Links or copy-paste code. No technical knowledge required. For developers, we offer REST APIs and SDKs for seamless integration.',
  },
  {
    question: 'What are RupeeFlow\'s pricing and transaction fees?',
    answer:
      'RupeeFlow offers transparent pricing with zero setup fees, no monthly charges, and no hidden costs. UPI transactions start at just 0.5%, card payments at 1.99%, and net banking at 1.5%. Volume-based discounts available for businesses processing ₹10L+ monthly. Contact sales for custom enterprise pricing.',
  },
  {
    question: 'How secure are payments processed through RupeeFlow?',
    answer:
      'RupeeFlow is PCI DSS Level 1 certified, RBI compliant, and uses 256-bit SSL encryption. We implement 3D Secure authentication, tokenization, and real-time fraud detection powered by machine learning. All transactions are monitored 24/7, and we offer 100% money-back guarantee for unauthorized transactions.',
  },
  {
    question: 'Can RupeeFlow handle international payments and multiple currencies?',
    answer:
      'Yes! RupeeFlow supports international payments from 100+ countries in 15+ currencies including USD, EUR, GBP, and AED. We offer competitive forex rates, automatic currency conversion, and seamless integration with Indian bank accounts. Perfect for exporters, freelancers, and SaaS companies.',
  },
  {
    question: 'What kind of customer support does RupeeFlow provide?',
    answer:
      'RupeeFlow provides 24/7/365 support via phone, email, WhatsApp, and live chat in English, Hindi, and 8 regional languages. Dedicated account managers for enterprise clients, average response time under 2 minutes, and 98% customer satisfaction rate. We also offer comprehensive documentation and video tutorials.',
  },
  {
    question: 'Does RupeeFlow offer recurring payment and subscription management?',
    answer:
      'Absolutely! RupeeFlow excels at recurring payments with automated billing, subscription management, and failed payment recovery. Support for variable amounts, trial periods, prorated billing, and dunning management. Perfect for SaaS, memberships, insurance premiums, and EMI collections with 95% success rate.',
  },
  {
    question: 'How does RupeeFlow help with business analytics and reporting?',
    answer:
      'RupeeFlow provides real-time analytics dashboard with 50+ insights, customizable reports, and data export capabilities. Track payment trends, customer behavior, revenue forecasts, and conversion rates. Advanced features include cohort analysis, churn prediction, and integration with accounting software like Tally, QuickBooks, and Zoho Books.',
  },
]

export default function FaqSection() {
  return (
    <FAQAccordion 
      faqs={faqs} 
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about RupeeFlow's payment solutions"
    />
  )
}
