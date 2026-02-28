import ComingSoon from '@/components/sections/ComingSoon'

export default function ComingSoonPage() {
  return (
    <ComingSoon
      title="Something Exciting"
      subtitle="We're building the next generation of fintech products. Stay tuned for an exciting new launch."
      progress={70}
      features={[
        'Next-gen payment infrastructure',
        'AI-powered analytics & insights',
        'Embedded finance solutions',
      ]}
    />
  )
}
