import { FAQItem } from '@/types/payment-pages';

/**
 * FAQ data for Explore More Payments page
 * Requirements: 7.8, 16.2
 */
export const explorePaymentsFAQs: FAQItem[] = [
  {
    question: 'How do I choose the right payment method for my business?',
    answer: 'The right payment method depends on your business model and customer needs. For e-commerce, use Payment Gateway or Payment Links. For in-store transactions, QR Code Payments work best. For B2B payments, consider Bulk Payouts or Vendor Payments. Contact our team for personalized recommendations.',
  },
  {
    question: 'Can I use multiple payment methods together?',
    answer: 'Yes! You can integrate multiple payment methods into your application. Our unified API makes it easy to accept payments through various channels while managing everything from a single dashboard. Mix and match payment methods based on your business requirements.',
  },
  {
    question: 'How long does integration take?',
    answer: 'Integration time varies by payment method. Payment Links can be set up in minutes without coding. Payment Gateway integration typically takes 1-2 days. Bulk Payouts and Vendor Payments may take 3-5 days depending on compliance requirements. Our developer documentation and support team help speed up the process.',
  },
  {
    question: 'What are the fees for different payment methods?',
    answer: 'Fees vary by payment method and transaction volume. Payment Gateway charges 2% + GST per transaction. Payment Links have similar pricing. Bulk Payouts and Vendor Payments have volume-based pricing. Contact our sales team for custom pricing based on your expected transaction volume.',
  },
  {
    question: 'Do I need separate accounts for each payment method?',
    answer: 'No, you can access all payment methods with a single RupeeFlow account. Once verified, you can enable any payment method from your dashboard. All transactions, settlements, and reports are consolidated in one place for easy management.',
  },
  {
    question: 'Is there a test environment available?',
    answer: 'Yes! We provide a complete sandbox environment for testing all payment methods. You can test integrations, simulate transactions, and verify workflows before going live. Test credentials and documentation are available in your developer dashboard.',
  },
];
