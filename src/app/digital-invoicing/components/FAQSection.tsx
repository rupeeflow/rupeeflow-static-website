'use client';
//test

import FAQ from '@/components/FAQ';

const faqs = [
  {
    question: 'What is e-invoicing and why is it mandatory?',
    answer:
      'E-invoicing is a system where B2B invoices are electronically authenticated by GSTN for tax purposes. It is mandatory for businesses with turnover above specified thresholds to ensure GST compliance and reduce tax evasion.',
  },
  {
    question: 'How does the IRP integration work?',
    answer:
      'Our system automatically submits invoices to the Invoice Registration Portal (IRP) for authentication. Once approved, you receive an IRN (Invoice Reference Number) and digitally signed e-invoice instantly.',
  },
  {
    question: 'Can I customize invoice templates?',
    answer:
      'Yes! You can create fully customized invoice templates with your company branding, logo, and layout while maintaining GST compliance requirements.',
  },
  {
    question: 'What happens if the IRP is down?',
    answer:
      'Our system automatically queues invoices and retries submission when the IRP is back online. You can also generate regular invoices and submit them later for e-invoice authentication.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. All data is encrypted end-to-end, and we follow bank-grade security protocols. We are ISO 27001 certified and comply with all data protection regulations.',
  },
  {
    question: 'Can I generate invoices in bulk?',
    answer:
      'Yes! You can upload invoice data via Excel/CSV or integrate with your ERP system to generate thousands of invoices in minutes with automatic e-invoice generation.',
  },
  {
    question: 'Do you support e-way bills?',
    answer:
      'Yes, our system automatically generates e-way bills when required based on invoice value and distance. The e-way bill is linked to the e-invoice for seamless compliance.',
  },
  {
    question: 'What about credit notes and debit notes?',
    answer:
      'Our system fully supports e-invoicing for credit notes, debit notes, and amendments. All adjustments are properly tracked and reported for GST compliance.',
  },
];

export default function FAQSection() {
  return <FAQ faqs={faqs} />;
}
