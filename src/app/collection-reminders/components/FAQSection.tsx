'use client';
//test

import FAQ from '@/components/FAQ';

const faqs = [
  {
    question: 'How do automated payment reminders work?',
    answer:
      'Our system automatically sends payment reminders via SMS, email, and WhatsApp based on your configured schedules. You can set up reminders before due dates, on due dates, and for overdue payments with customizable escalation workflows.',
  },
  {
    question: 'Can I customize the reminder messages?',
    answer:
      'Yes! You can create fully customized message templates with your branding, tone, and specific information. Include payment links, invoice details, and personalized content for each customer.',
  },
  {
    question: 'Which channels are supported for sending reminders?',
    answer:
      'We support SMS, Email, and WhatsApp for sending payment reminders. You can choose which channels to use for each customer and set up multi-channel sequences for better reach.',
  },
  {
    question: 'How does smart scheduling work?',
    answer:
      'Our AI analyzes customer payment behavior, preferred communication times, and historical data to optimize when reminders are sent for maximum effectiveness and response rates.',
  },
  {
    question: 'Can I track reminder delivery and responses?',
    answer:
      'Yes! Our real-time dashboard shows delivery status, open rates, click-through rates, and customer responses. You can see which reminders are working and optimize your strategy accordingly.',
  },
  {
    question: 'What happens if a payment is made after a reminder is sent?',
    answer:
      'The system automatically detects payments and stops sending further reminders for that invoice. You can also set up thank-you messages to be sent automatically upon payment receipt.',
  },
  {
    question: 'Is there a limit on the number of reminders I can send?',
    answer:
      'No, there are no limits on the number of reminders. You can send as many reminders as needed based on your payment terms and collection strategy.',
  },
  {
    question: 'How secure is the payment link feature?',
    answer:
      'All payment links are encrypted and secure, compliant with PCI DSS standards. Links expire after a set time period and can only be used once to prevent unauthorized access.',
  },
];

export default function FAQSection() {
  return <FAQ faqs={faqs} />;
}
