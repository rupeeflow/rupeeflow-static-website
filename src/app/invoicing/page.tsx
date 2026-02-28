import ComingSoon from '@/components/sections/ComingSoon'

export default function InvoicingPage() {
  return (
    <ComingSoon
      title="Smart Invoicing"
      subtitle="Create, send, and track professional GST-compliant invoices in seconds. Automate follow-ups and get paid faster."
      progress={45}
      features={[
        'GST-compliant invoice generation',
        'Automated payment reminders',
        'Real-time payment tracking',
      ]}
    />
  )
}
