import FAQAccordion from '@/components/ui/FAQAccordion'

const faqs = [
  {
    question: 'How does Rupeeflow simplify rent payments?',
    answer:
      'Rupeeflow automates your entire rent payment process. Set up recurring payments, link your rental agreements, and let the platform handle timely disbursements via NEFT, RTGS, IMPS, or UPI — all from a single dashboard.',
  },
  {
    question: 'What payment methods can I use to pay rent?',
    answer:
      'You can pay rent using UPI, NEFT, RTGS, IMPS, credit cards, debit cards, or digital wallets. Choose the method that best suits your convenience and cash flow requirements.',
  },
  {
    question: 'Can I set up automatic recurring rent payments?',
    answer:
      'Yes, Rupeeflow supports scheduled recurring payments. Set up your rent amount, landlord details, and preferred date once — the system will automatically process payments every month with reminders before each due date.',
  },
  {
    question: 'Is it secure to pay rent through Rupeeflow?',
    answer:
      'Absolutely. Rupeeflow uses bank-grade 256-bit encryption, PCI DSS compliance, and multi-factor authentication. All transactions are processed through RBI-authorized payment channels.',
  },
  {
    question: 'Can I split rent payments with roommates?',
    answer:
      'Yes, Rupeeflow offers split payment options that allow you to divide rent across multiple payers. Each person can pay their share independently, and the platform tracks all contributions.',
  },
  {
    question: 'Will I get receipts for my rent payments?',
    answer:
      'Yes, digital receipts are generated instantly after each successful payment. You can download and share them from your dashboard, making it easy to maintain records for tax purposes.',
  },
]

export default function RentalFaq() {
  return <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />
}
