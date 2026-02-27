import { FAQItem } from '@/types/payment-pages';

/**
 * FAQ data for Bill Payments page
 * Requirements: 7.7
 */
export const billPaymentFAQs: FAQItem[] = [
  {
    question: 'Which utility bills can I pay?',
    answer: 'You can pay electricity, water, gas (LPG/PNG), internet/broadband, mobile (postpaid), and DTH/cable TV bills from all major service providers across India.',
  },
  {
    question: 'How does auto-fetch work?',
    answer: 'Auto-fetch automatically retrieves your bill details from service providers using your registered mobile number or customer ID. You just need to verify and pay.',
  },
  {
    question: 'Can I schedule recurring payments?',
    answer: 'Yes, you can set up automatic payments for recurring bills. The system will automatically pay your bills on the due date or a few days before.',
  },
  {
    question: 'What if a payment fails?',
    answer: 'If a payment fails, you will receive an immediate notification. You can retry the payment or use an alternative payment method. Failed payments do not incur any charges.',
  },
  {
    question: 'Are there any charges for bill payments?',
    answer: 'Bill payments through RupeeFlow are free for most billers. Some service providers may charge a convenience fee, which will be clearly displayed before payment.',
  },
  {
    question: 'How do I track my payment history?',
    answer: 'All your bill payments are recorded in your dashboard with complete details including date, amount, biller, and payment status. You can download receipts anytime.',
  },
];
