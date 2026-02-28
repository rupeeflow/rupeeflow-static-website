import ComingSoon from '@/components/sections/ComingSoon'

export default function VoicePaymentsPage() {
  return (
    <ComingSoon
      title="Voice Payments"
      subtitle="Pay anyone, anywhere — just by speaking. Our AI-powered voice payment engine supports 12+ Indian languages with 99.5% accuracy."
      progress={55}
      features={[
        'Hindi, Tamil, Telugu & 9 more languages',
        'Works offline & on low-end devices',
        'Fraud detection via voice biometrics',
      ]}
    />
  )
}
