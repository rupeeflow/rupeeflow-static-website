import FAQAccordion from '@/components/ui/FAQAccordion'
import { paymentGatewayFAQs } from '@/data/faqs'

export default function FAQSection() {
  return (
    <FAQAccordion
      faqs={paymentGatewayFAQs}
      subtitle="Everything you need to know about RupeeFlow Payment Gateway."
    />
  )
}
