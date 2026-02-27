import FAQAccordion from '@/components/ui/FAQAccordion'

const faqs = [
  {
    question: 'What is the maximum loan amount I can get?',
    answer: 'For education loans, you can get up to ₹25 lakhs. For medical loans, the maximum amount is ₹15 lakhs. The actual amount depends on your income, credit score, and specific requirements.',
  },
  {
    question: 'How long does the approval process take?',
    answer: 'Most applications are approved within 48 hours of document submission. For emergency medical loans, we offer express approval within 2 hours during business hours.',
  },
  {
    question: 'Do I need collateral for these loans?',
    answer: 'No collateral is required for loans up to ₹7.5 lakhs. For higher amounts, we may require collateral or a co-applicant depending on your credit profile.',
  },
  {
    question: 'Can I prepay my loan without penalties?',
    answer: 'Yes, we offer zero prepayment charges on all education and medical loans. You can pay off your loan anytime without any additional fees.',
  },
  {
    question: 'What is the moratorium period for education loans?',
    answer: 'Education loans come with a moratorium period of course duration plus 6 months or 1 year after course completion, whichever is earlier. During this period, you only pay simple interest.',
  },
  {
    question: 'Are there any tax benefits on education loans?',
    answer: 'Yes, education loans are eligible for tax deduction under Section 80E of the Income Tax Act. You can claim deduction on the interest paid for up to 8 years.',
  },
]

export default function FAQSection() {
  return (
    <FAQAccordion 
      faqs={faqs} 
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our loans"
    />
  )
}
