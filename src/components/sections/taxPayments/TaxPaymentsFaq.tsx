import FAQAccordion from '@/components/ui/FAQAccordion'

const faqs = [
  {
    question: 'What types of tax payments can I make through Rupeeflow?',
    answer:
      'Rupeeflow supports GST challan payments including CGST, SGST, IGST, and Cess. You can generate and pay challans for regular returns, advance tax, and any demand notices through our platform.',
  },
  {
    question: 'What payment methods are supported for GST payments?',
    answer:
      'You can pay GST via credit card, debit card, net banking, UPI, NEFT, or RTGS. All payment methods are processed through RBI-authorized payment gateways for maximum security.',
  },
  {
    question: 'How quickly will my GST payment reflect on the GST portal?',
    answer:
      'Online payments through net banking and UPI are reflected almost instantly. Credit/debit card payments may take up to 2-4 hours. NEFT/RTGS payments follow standard banking timelines.',
  },
  {
    question: 'Will I get a CIN (Challan Identification Number) after payment?',
    answer:
      'Yes, you will receive your CIN immediately after a successful payment. You can download the challan receipt from your Rupeeflow dashboard, which serves as proof of payment for your records.',
  },
  {
    question: 'Can I schedule recurring GST payments?',
    answer:
      'Yes, Rupeeflow allows you to set up scheduled payments for your regular GST filing dates. You will also receive automated reminders before due dates to ensure you never miss a deadline.',
  },
  {
    question: 'Is it safe to make tax payments through Rupeeflow?',
    answer:
      'Absolutely. Rupeeflow is PCI DSS Level 1 compliant with 256-bit SSL encryption. All payments are processed through RBI-authorized channels with multi-factor authentication for maximum security.',
  },
]

export default function TaxPaymentsFaq() {
  return <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />
}
