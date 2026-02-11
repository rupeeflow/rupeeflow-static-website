import {
  HeroSection,
  AcceptMethods,
  DeveloperIntegration,
  FeesComparison,
  PerfectFor,
  Plugins,
} from '../../components/sections/paymentGateway'


export default function PaymentGatewayPage() {
  return (
    <main>
      <HeroSection />
      <AcceptMethods />
      <DeveloperIntegration />
      <FeesComparison />
      <PerfectFor />
      <Plugins />
    </main>
  )
}
