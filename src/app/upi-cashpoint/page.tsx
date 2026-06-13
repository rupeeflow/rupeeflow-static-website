import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import { CreditCard, Cpu, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'UPI Cashpoint - RupeeFlow',
}

export default function UpiCashpointPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16">
      <Container className="py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[var(--text,#3D5C4A)] leading-tight">
              UPI Cashpoint —
              <span className="text-[var(--primary)] ml-2">
                Collect payments anywhere
              </span>
            </h1>

            <p className="mt-6 text-[var(--muted,#6B8A78)] text-lg leading-relaxed">
              Turn any device or counter into a secure UPI collection point.
              Accept UPI in offline and low-connectivity environments with
              instant reconciliation and merchant-friendly settlement options.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] text-[var(--foreground)] flex items-center justify-center animate-glow-pulse">
                  <Cpu size={18} />
                </div>
                <div>
                  <div className="font-semibold">Offline & On-device</div>
                  <div className="text-[var(--muted,#6B8A78)] text-sm">
                    Accept UPI payments without constant internet connectivity.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)] text-[var(--foreground)] flex items-center justify-center animate-glow-pulse">
                  <CreditCard size={18} />
                </div>
                <div>
                  <div className="font-semibold">Seamless Reconciliation</div>
                  <div className="text-[var(--muted,#6B8A78)] text-sm">
                    Auto-match transactions and simplify accounting for
                    on-ground collections.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--secondary)] text-[var(--foreground)] flex items-center justify-center animate-glow-pulse">
                  <Zap size={18} />
                </div>
                <div>
                  <div className="font-semibold">Fast Settlements</div>
                  <div className="text-[var(--muted,#6B8A78)] text-sm">
                    Get funds settled quickly to your account with transparent
                    fees.
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <MainCTA label="Talk to Sales" destination="/contact" />
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg p-6 bg-[var(--card)] animate-fade-in-up">
            <div className="grid grid-cols-2 gap-4">
                <motion.div className="rounded-lg bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] text-[var(--foreground)] p-6 flex flex-col justify-between"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <div>
                    <h3 className="text-lg font-bold">Cashpoint Terminal</h3>
                    <p className="text-sm mt-2">
                      A lightweight app that converts any Android device into a
                      UPI collection terminal.
                    </p>
                  </div>
                  <div className="mt-4 text-sm opacity-90">Live — Connected</div>
                </motion.div>

              <motion.div className="rounded-lg bg-[var(--card)] p-4 flex items-center justify-center"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.1 }}
              >
                <Image
                  src="/payment-summary.png"
                  alt="Cashpoint preview"
                  width={300}
                  height={220}
                  className="object-contain"
                />
              </motion.div>

              <motion.div className="rounded-lg bg-[var(--card)] p-4 flex items-center justify-center"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <Image
                  src="/integration-panels.png"
                  alt="Reconciliation"
                  width={300}
                  height={220}
                  className="object-contain"
                />
              </motion.div>

              <motion.div className="rounded-lg bg-[var(--secondary)] p-6 text-[var(--foreground)] flex flex-col justify-between"
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.15 }}
              >
                <div>
                  <h3 className="text-lg font-bold">Agent App</h3>
                  <p className="text-sm mt-2">
                    Lightweight, secure, and auditable payment collection for
                    field agents.
                  </p>
                </div>
                <div className="mt-4 text-sm opacity-90">
                  Used by businesses
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Live features strip */}
      <div className="py-12">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl animate-fade-in-up">
              <h4 className="font-semibold text-[var(--primary)]">
                Offline Mode
              </h4>
              <p className="text-[var(--muted)] mt-2">
                Store & forward transactions when back online with full audit
                trail.
              </p>
            </div>

            <div className="p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl animate-fade-in-up">
              <h4 className="font-semibold text-[var(--primary)]">
                QR & Intent Support
              </h4>
              <p className="text-[var(--muted)] mt-2">
                Generate dynamic QR codes or UPI intents for quick collections.
              </p>
            </div>

            <div className="p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl animate-fade-in-up">
              <h4 className="font-semibold text-[var(--primary)]">
                Agent Management
              </h4>
              <p className="text-[var(--muted)] mt-2">
                Assign cashpoints, track performance and payouts in the
                dashboard.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
