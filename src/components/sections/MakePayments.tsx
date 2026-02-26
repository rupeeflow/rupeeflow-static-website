'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';


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
];

export default function MakePayments() {
  return (
    <section className="relative bg-black pt-8 sm:pt-12 md:pt-16 lg:pt-19 pb-12 sm:pb-16 overflow-hidden">

      <Container className="relative">


        {/* ================= HERO AREA ================= */}
        <div className="relative h-auto sm:h-[110px] mb-12 sm:mb-20 md:mb-28">

  {/* Pill RIGHT */}
  <div className="relative sm:absolute right-0 sm:right-[10px] top-0 sm:top-[110px] w-full max-w-[320px] h-[50px] sm:h-[60px] mb-6 sm:mb-0 ml-auto">
    <div className="absolute inset-0 rounded-[18px] rounded-tl-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
    <span className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 text-white text-base sm:text-[20px] font-semibold">
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
    className="hidden lg:block absolute left-[41px] -top-[89px] z-30 pointer-events-none"
  />

</div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-x-10 md:gap-y-12">

          {cards.map((card, i) => (
            <Card key={i} className="relative min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col p-4 sm:p-6">

              <Image
                src={card.icon}
                alt=""
                width={48}
                height={48}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-14 sm:h-14"
              />


              <h3 className="text-white text-lg sm:text-xl md:text-2xl leading-[115%] font-bold font-[Nunito] mb-2 sm:mb-3 pr-14 sm:pr-16">
                {card.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base md:text-[18px] leading-[170%] max-w-[525px] font-[DM Sans] mb-12 sm:mb-0">
                {card.desc}
              </p>

              <Button className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-xs sm:text-sm">
                Learn more →
              </Button>
            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}
