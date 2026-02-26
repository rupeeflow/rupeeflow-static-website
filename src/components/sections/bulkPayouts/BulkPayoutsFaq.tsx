import FAQAccordion from '@/components/ui/FAQAccordion'

const faqs = [
  {
    question: 'What is Rupeeflow Bulk Pay?',
    answer:
      'Rupeeflow Bulk Pay is an enterprise-grade payout solution that allows businesses to process thousands of payments simultaneously. Whether it\'s salary disbursements, vendor payments, or refunds, you can automate and manage all your outgoing payments from a single dashboard.',
  },
  {
    question: 'What payment methods are supported for bulk payouts?',
    answer:
      'Rupeeflow Bulk Pay supports multiple payout methods including NEFT, RTGS, IMPS, UPI, and bank transfers. You can choose the method that best suits your speed and cost requirements for each batch of payouts.',
  },
  {
    question: 'How fast are bulk payouts processed?',
    answer:
      'With Rupeeflow, most payouts are processed within 2 seconds on average via IMPS. NEFT transfers are settled within banking hours, while RTGS is available for high-value real-time transfers during business hours.',
  },
  {
    question: 'Is there a limit on the number of payouts per batch?',
    answer:
      'Rupeeflow supports processing thousands of payouts in a single batch. There are no hard limits on the number of transactions per batch, making it ideal for enterprises with high-volume disbursement needs.',
  },
  {
    question: 'How does the maker-checker approval workflow work?',
    answer:
      'Rupeeflow provides a configurable maker-checker workflow where one user creates the payment batch (maker) and another authorized user reviews and approves it (checker). This ensures dual authorization for every payout, enhancing security and compliance.',
  },
  {
    question: 'Can I integrate Bulk Pay with my existing ERP or accounting software?',
    answer:
      'Yes, Rupeeflow offers RESTful APIs and pre-built integrations with popular ERP, HRMS, and accounting platforms like Zoho, Tally, and SAP. Our developer documentation makes integration straightforward.',
  },
]

export default function BulkPayoutsFaq() {
  return <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />
}
