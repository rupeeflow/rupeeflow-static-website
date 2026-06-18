import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import {
  Check,
  Building2,
  Users,
  ShieldCheck,
  Settings,
  BarChart3,
} from 'lucide-react'
import CardFAQ from '@/components/sections/CardFAQ'
import { corporateFAQs } from '@/data/corporateCardFaqs'

export default function CorporateCardsPage() {
  return (
    <>
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-white leading-tight">
              Corporate{' '}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Cards
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Empower your organization with centralized spending controls,
              enhanced security, and complete visibility across departments.
            </p>

            {/* FEATURES */}
            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: Building2,
                  text: 'Centralized expense control across teams',
                },
                {
                  icon: Users,
                  text: 'Assign cards to employees & departments',
                },
                { icon: Settings, text: 'Custom limits & policy enforcement' },
                {
                  icon: ShieldCheck,
                  text: 'Enterprise-grade fraud protection',
                },
                { icon: BarChart3, text: 'Real-time analytics & reporting' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/15">
                      <Icon size={18} className="text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10">
              <MainCTA label="Request Corporate Cards" destination="/contact" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <Image
              src="/corporate-card-hero.png"
              alt="Corporate card management preview"
              width={700}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </Container>

      {/* WHY CHOOSE */}
      <div className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-white">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Corporate Cards
            </span>
            ?
          </h2>

          <p className="mt-3 text-xl text-gray-300">
            Streamline company-wide spending with better control, transparency,
            and security.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Centralized Control',
              desc: 'Manage and monitor company-wide expenses from one dashboard.',
            },
            {
              title: 'Policy Enforcement',
              desc: 'Set spending rules and ensure compliance automatically.',
            },
            {
              title: 'Enterprise Security',
              desc: 'Protect funds with advanced fraud detection & controls.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/10 bg-white
              hover:-translate-y-1 transition
              hover:border-emerald-400/40
              hover:shadow-[0_0_25px_rgba(0,239,100,0.15)]"
            >
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURE SECTIONS */}
      <div className="py-24 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="max-w-6xl mx-auto px-6 space-y-28">
          {[
            {
              title: 'Centralized Expense Management',
              desc: 'Gain complete control over departmental and employee spending.',
              points: [
                'Department budgets',
                'Real-time monitoring',
                'Approval workflows',
              ],
              image: 'Expense Management Preview',
            },
            {
              title: 'Advanced Policy Controls',
              desc: 'Create rules and enforce policies automatically.',
              points: [
                'Spending limits',
                'Merchant restrictions',
                'Compliance controls',
              ],
              image: 'Policy Control Preview',
            },
            {
              title: 'Fraud & Risk Protection',
              desc: 'Protect your organization with enterprise-grade security tools.',
              points: [
                'Real-time alerts',
                'Suspicious activity detection',
                'Secure transactions',
              ],
              image: 'Fraud Protection Preview',
            },
            {
              title: 'Insights & Reporting',
              desc: 'Track trends and optimize spending decisions.',
              points: [
                'Expense analytics',
                'Department reports',
                'Exportable insights',
              ],
              image: 'Analytics Preview',
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-14 items-center">
              {/* IMAGE */}
              <div
                className={`${i % 2 ? 'md:order-2' : ''} bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center text-gray-500`}
              >
                {item.image}
              </div>

              {/* TEXT */}
              <div className={`${i % 2 ? 'md:order-1' : ''}`}>
                <h3 className="text-2xl font-semibold text-white">
                  {item.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                    {item.title.split(' ').slice(-1)}
                  </span>
                </h3>

                <p className="text-gray-400 mt-4">{item.desc}</p>

                <ul className="mt-6 space-y-3">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15">
                        <Check size={14} className="text-emerald-400" />
                      </span>
                      <span className="text-gray-300">{p}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <div className="mt-6">
                  <MainCTA
                    label="Learn More"
                    destination="#"
                    size="w-40 h-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="py-14 border-y border-white/10 text-center">
        <p className="text-lg font-medium bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          Trusted by enterprises for secure and scalable spend management.
        </p>
      </div>

      {/* FAQ SECTION */}
      <CardFAQ faqs={corporateFAQs} />

      {/* FINAL CTA */}
      <div className="py-28 text-center">
        <h3 className="text-4xl text-white font-semibold">
          Simplify corporate spending today
        </h3>
        <p className="text-gray-400 mt-4">
          Empower departments with smart controls and real-time visibility.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Request Corporate Cards" destination="/contact" />
        </div>
      </div>
    </>
  )
}
