"use client"

import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import { CreditCard, Cpu, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import HeroSection from '@/app/upi-cashpoint/components/HeroSection'
import FeaturesStrip from '@/app/upi-cashpoint/components/FeaturesStrip'
import HowItWorks from '@/app/upi-cashpoint/components/HowItWorks'
import Integrations from '@/app/upi-cashpoint/components/Integrations'
import Testimonials from '@/app/upi-cashpoint/components/Testimonials'
import UseCases from '@/app/upi-cashpoint/components/UseCases'

export default function UpiCashpointClient() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16">
      <Container className="py-12">
        <HeroSection />
      </Container>

      {/* Live features strip */}
      <div className="py-12">
        <Container>
          <FeaturesStrip />
        </Container>
      </div>

      <HowItWorks />
      <UseCases />
      <Integrations />
      <Testimonials />
    </main>
  )
}
