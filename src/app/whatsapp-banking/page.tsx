import { Metadata } from 'next'
import {
  WhatsAppBankingHero,
  WhatsAppBankingHowItWorks,
  WhatsAppBankingFeatures,
  WhatsAppBankingDemo,
  WhatsAppBankingSecurity,
  WhatsAppBankingCTA
} from '@/components/sections/whatsapp-banking'
import WhatsAppBankingInteractive from '@/components/sections/whatsapp-banking/WhatsAppBankingInteractive'

export const metadata: Metadata = {
  title: 'WhatsApp Banking - Bank in Hindi & 11 Languages | RupeeFlow',
  description: 'India\'s first WhatsApp bank No app No forms No waiting Start in 30 seconds Send money, pay bills, get credit - just type in Hindi',
}

export default function WhatsAppBankingPage() {
  return (
    <div className="w-full">
      <WhatsAppBankingHero />
      <WhatsAppBankingHowItWorks />
      <WhatsAppBankingInteractive />
      <WhatsAppBankingFeatures />
      <WhatsAppBankingDemo />
      <WhatsAppBankingSecurity />
      <WhatsAppBankingCTA />
    </div>
  )
}