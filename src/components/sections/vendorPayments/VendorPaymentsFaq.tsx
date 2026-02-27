import FAQAccordion from '@/components/ui/FAQAccordion'

const faqs = [
  {
    question: 'What payment methods does Rupeeflow support for vendor payouts?',
    answer:
      'Rupeeflow supports multiple payout channels including NEFT, RTGS, IMPS, UPI, and bank transfers. You can choose the appropriate method based on your urgency and transaction size requirements.',
  },
  {
    question: 'How fast are vendor payments processed?',
    answer:
      'IMPS payments are processed in under 2 seconds. NEFT transfers are settled within banking hours (typically 30 minutes to 2 hours), and RTGS is available for real-time high-value transfers during business hours.',
  },
  {
    question: 'Can I process bulk vendor payments at once?',
    answer:
      'Yes, Rupeeflow allows you to upload payment details in bulk via CSV or API and process thousands of vendor payments simultaneously. Our maker-checker workflow ensures every batch is verified before execution.',
  },
  {
    question: 'How does automatic reconciliation work?',
    answer:
      'Rupeeflow automatically matches outgoing vendor payments with corresponding invoices and purchase orders. The system flags discrepancies in real time, generates settlement reports, and helps you close your books faster.',
  },
  {
    question: 'Is Rupeeflow secure for vendor payments?',
    answer:
      'Absolutely. Rupeeflow is PCI DSS Level 1 compliant with 256-bit encryption, multi-factor authentication, IP whitelisting, and AI-powered fraud detection. Every transaction goes through our multi-layer security framework.',
  },
  {
    question: 'Can I integrate Rupeeflow with my ERP or accounting software?',
    answer:
      'Yes, Rupeeflow provides RESTful APIs and pre-built connectors for popular platforms like Zoho, Tally, SAP, and QuickBooks. Our developer documentation makes integration straightforward for your tech team.',
  },
]

export default function VendorPaymentsFaq() {
  return <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />
}
