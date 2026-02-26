'use client'

import Image from 'next/image'
import Container from '@/components/ui/Container'

const cards = [
  {
    title: 'Bulk Payouts',
    desc: 'Pay 100+ vendors/employees in one click. CSV upload or API. No daily limits.',
    icon: '/payouts/bulk-payouts.svg',
  },
  {
    title: 'Vendor Payments',
    desc: 'Automated supplier payments with approval. Multi-level workflows, auto-reconciliation',
    icon: '/payouts/vendor-payments.svg',
  },
  {
    title: 'Salary Disbursements',
    desc: 'Process monthly salaries via UPI/NEFT. Bulk upload, instant processing',
    icon: '/payouts/salary-disbursements.svg',
  },
  {
    title: 'Bill Payments',
    desc: 'Pay electricity, water, telecom, GST bills. Set reminders, schedule recurring.',
    icon: '/payouts/bill-payments.svg',
  },
]

export default function MakePayments() {
  return (
    <section className="relative bg-black pt-10 md:pt-19 pb-10 md:pb-16 overflow-hidden">
      <Container className="relative">
        {/* ================= HERO AREA ================= */}
        <div className="relative h-[70px] sm:h-[80px] md:h-[110px] mb-10 sm:mb-16 md:mb-28 px-4 md:px-0">
          {/* Pill RIGHT */}
          <div className="absolute right-0 md:right-[10px] top-[40px] sm:top-[60px] md:top-[110px] w-[260px] sm:w-[320px] h-[46px] sm:h-[60px] z-10">
            <div className="absolute inset-0 rounded-[18px] rounded-tl-[260px] sm:rounded-tl-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
            <span className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 text-white text-[14px] sm:text-[20px] font-semibold">
              MAKE PAYMENTS
            </span>
          </div>

          {/* Man LEFT - Hidden on mobile */}
          <Image
            src="/home/mann.png"
            alt="man"
            width={306}
            height={306}
            priority
            className="hidden md:block absolute left-[41px] -top-[89px] z-0 pointer-events-none"
          />
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-12 relative z-50 px-4 md:px-0">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative min-h-[200px] md:h-[240px] flex flex-col backdrop-blur-sm rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(83,190,194,0.3)] hover:-translate-y-1"
              style={{ background: '#122427BF' }}
            >
              {/* White border that becomes gradient on hover */}
              <div className="absolute inset-0 rounded-2xl p-[2px] transition-all duration-300 ease-in-out bg-gradient-to-r from-white/20 via-white/20 to-white/20 group-hover:from-[#53BEC2] group-hover:via-[#00EF64] group-hover:to-[#53BEC2]">
                <div
                  className="h-full w-full rounded-2xl transition-all duration-300 ease-in-out"
                  style={{ background: '#122427BF' }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <Image
                  src={card.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                <h3 className="text-white text-lg md:text-xl font-semibold pr-12 transition-colors duration-300 ease-in-out group-hover:text-[#30f3bc]">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 leading-relaxed pr-2 md:max-w-[85%] transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                  {card.desc}
                </p>

                <div className="mt-auto pt-4">
                  <button className="rounded-full px-5 md:px-6 py-2 text-xs md:text-sm font-medium flex items-center gap-2 bg-gradient-to-r from-[#054C38] to-[#2AB871] text-white transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#53BEC2] group-hover:to-[#00EF64] group-hover:text-black">
                    <span className="flex items-center gap-2">
                      Learn more →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
