import FAQAccordion from '@/components/ui/FAQAccordion'

const faqs = [
  {
    question: 'How does Rupeeflow handle bulk salary disbursement?',
    answer:
      'Rupeeflow allows you to upload employee salary data via CSV or through our API. Once uploaded, the system validates all entries, routes them through your configured approval workflow, and processes payments in bulk via NEFT, RTGS, IMPS, or UPI.',
  },
  {
    question: 'What payment channels are supported for salary payouts?',
    answer:
      'We support NEFT, RTGS, IMPS, and UPI for salary disbursements. IMPS transfers are processed in under 2 seconds, while NEFT and RTGS follow standard banking timelines. You can choose the channel based on speed and cost preferences.',
  },
  {
    question: 'Can I schedule recurring payroll runs?',
    answer:
      'Yes, Rupeeflow supports scheduled payroll with configurable frequencies — monthly, bi-weekly, or custom dates. Set it up once and the system automatically processes salaries on schedule with the appropriate approval workflow.',
  },
  {
    question: 'How does the maker-checker approval work for salary batches?',
    answer:
      'You can configure multi-level approval hierarchies where a maker creates the salary batch and one or more checkers review and approve before execution. This ensures dual authorization and prevents unauthorized disbursements.',
  },
  {
    question: 'Is Rupeeflow compliant with Indian payroll regulations?',
    answer:
      'Yes, Rupeeflow is fully compliant with RBI guidelines and Indian labor regulations. We support TDS deduction tracking, PF contributions, and generate reports that are compatible with standard tax filing requirements.',
  },
  {
    question: 'Can I integrate Rupeeflow with my existing HRMS or ERP?',
    answer:
      'Absolutely. Rupeeflow provides RESTful APIs and pre-built integrations with popular platforms like Zoho People, greytHR, SAP SuccessFactors, and Tally. Our developer documentation makes integration straightforward.',
  },
]

export default function SalaryFaq() {
  return <FAQAccordion faqs={faqs} title="Frequently Asked Questions" />
}
