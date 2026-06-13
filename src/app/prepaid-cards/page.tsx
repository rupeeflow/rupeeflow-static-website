import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Check,
  Wallet,
  ShieldCheck,
  Users,
  Settings,
  BarChart3,
} from 'lucide-react'
import { prepaidFAQs } from '@/data/prepaidCardFaqs'
import CardFAQ from '@/components/sections/CardFAQ'

export default function PrepaidCardsPage() {
  return (
    <>
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-[var(--foreground)] leading-tight">
              Prepaid{' '}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Cards
              </span>
            </h1>

            <p className="mt-6 text-[var(--muted)] text-lg leading-relaxed">
              Enable secure, pre-funded spending with complete control over
              budgets, eliminating overspending risks while simplifying expense
              management.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: Wallet,
                  text: 'Pre-load funds for controlled spending',
                },
                {
                  icon: ShieldCheck,
                  text: 'Eliminate credit risk & overspending',
                },
                {
                  icon: Users,
                  text: 'Ideal for employees, vendors & incentives',
                },
                { icon: Settings, text: 'Set limits & usage rules instantly' },
                { icon: BarChart3, text: 'Track spending in real time' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/15">
                      <Icon size={18} className="text-emerald-400" />
                    </div>
                    <span className="text-[var(--muted)]">{item.text}</span>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10">
              <MainCTA label="Get Prepaid Cards" destination="/contact" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/prepaid-card-hero.png"
              alt="Prepaid card preview"
              width={700}
              height={500}
              className="object-cover w-full h-full"
              priority
            />

            {/* floating overlays */}
            <motion.div
              className="absolute top-6 left-6 w-32 h-20 rounded-lg shadow-lg overflow-hidden bg-[var(--card)]/80 border border-[var(--border)] flex items-center justify-center"
              initial={{ x: -10, y: 8, opacity: 0 }}
              animate={{ x: 0, y: -6, opacity: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            >
              <Image src="/images/prepaid/overlay-1.png" alt="card overlay" width={120} height={72} className="object-contain" />
            </motion.div>

            <motion.div
              className="absolute bottom-6 right-6 w-36 h-24 rounded-lg shadow-md overflow-hidden bg-[var(--card)]/90 border border-[var(--border)] flex items-center justify-center"
              initial={{ x: 8, y: 12, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.3 }}
            >
              <Image src="/images/prepaid/overlay-2.png" alt="spend insights" width={140} height={92} className="object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* WHY CHOOSE */}
      <div className="py-20 bg-gradient-to-b from-[var(--card)] to-[var(--background)]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-[var(--foreground)]">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Prepaid Cards
            </span>
            ?
          </h2>

          <p className="mt-3 text-xl text-[var(--muted)]">
            Control spending, prevent misuse, and manage budgets with zero
            credit exposure.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Budget Control',
              desc: 'Predefine spending amounts and eliminate overspending risks.',
            },
            {
              title: 'Risk-Free Spending',
              desc: 'Avoid credit exposure while ensuring secure transactions.',
            },
            {
              title: 'Instant Issuance',
              desc: 'Create and distribute cards instantly to employees or vendors.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-[var(--border)] bg-[var(--card)]
              hover:-translate-y-1 transition
              hover:border-emerald-400/40
              hover:shadow-[0_0_25px_rgba(42,184,113,0.12)]"
            >
              <h3 className="text-[var(--foreground)] font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-[var(--muted)] mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURE SECTIONS */}
      <div className="py-24 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="max-w-6xl mx-auto px-6 space-y-28">
          {[
            {
              title: 'Controlled Budget Distribution',
              desc: 'Allocate prepaid funds across teams and projects with precision.',
              points: [
                'Department budgets',
                'Project allocation',
                'Spend caps',
              ],
              image: 'Budget Distribution Preview',
            },
            {
              title: 'Secure & Safe Transactions',
              desc: 'Ensure funds are used only for approved purposes.',
              points: [
                'Merchant restrictions',
                'Usage controls',
                'Secure payments',
              ],
              image: 'Secure Payment Preview',
            },
            {
              title: 'Instant Card Issuance',
              desc: 'Create and distribute prepaid cards in seconds.',
              points: [
                'Virtual & physical cards',
                'Instant activation',
                'Bulk issuance',
              ],
              image: 'Card Issuance Preview',
            },
            {
              title: 'Real-Time Spend Visibility',
              desc: 'Monitor transactions and optimize budgets instantly.',
              points: [
                'Live dashboards',
                'Expense alerts',
                'Downloadable reports',
              ],
              image: 'Spend Insights Preview',
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-14 items-center">
              <motion.div
                className={`${i % 2 ? 'md:order-2' : ''} bg-[var(--card)] border border-[var(--border)] rounded-2xl aspect-video flex items-center justify-center text-gray-500`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 * i }}
              >
                <div className="w-full h-full flex items-center justify-center p-6">
                  <Image src={`/images/prepaid/feature-${i + 1}.png`} alt={item.title} width={520} height={300} className="object-contain" />
                </div>
              </motion.div>

              <motion.div className={`${i % 2 ? 'md:order-1' : ''}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.14 * i }}>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
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

                <div className="mt-6">
                  <MainCTA
                    label="Learn More"
                    destination="#"
                    size="w-40 h-10"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="py-14 border-y border-[var(--border)] text-center">
        <p className="text-lg font-medium bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          Trusted by finance teams for secure, controlled prepaid spending.
        </p>
      </div>

      <CardFAQ faqs={prepaidFAQs} />

      {/* FINAL CTA */}
      <div className="py-28 text-center">
        <h3 className="text-4xl text-[var(--foreground)] font-semibold">
          Simplify prepaid spending today
        </h3>
        <p className="text-gray-400 mt-4">
          Control budgets, reduce risk, and empower teams with secure prepaid
          cards.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Get Prepaid Cards" destination="/contact" />
        </div>
      </div>
    </>
  )
}
