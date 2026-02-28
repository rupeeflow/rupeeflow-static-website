import ComingSoon from '@/components/sections/ComingSoon'

export default function DocsPage() {
  return (
    <ComingSoon
      title="API Documentation"
      subtitle="We are structuring the documentation for you. This will give you everything you need to integrate RupeeFlow seamlessly. Be the first to know when it launches."
      progress={40}
      features={[
        'Pay-In & Pay-Out REST APIs',
        'SDKs for Web, iOS & Android',
        'Sandbox environment & live testing',
      ]}
    />
  )
}
