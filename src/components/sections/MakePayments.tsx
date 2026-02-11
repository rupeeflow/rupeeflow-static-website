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
    <section className="relative bg-black pt-19 pb-16 overflow-hidden ">

      <Container className="relative">


        {/* ================= HERO AREA ================= */}
        {/* ================= HERO AREA ================= */}
<div className="relative h-[110px] mb-28">

  {/* Pill RIGHT */}
  <div className="absolute right-[10px] top-[110px] w-[320px] h-[60px] ">
    <div className="absolute inset-0 rounded-[18px] rounded-tl-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
    <span className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-[20px] font-semibold">
      MAKE PAYMENTS
    </span>
  </div>

  {/* Floating boxes LEFT */}
  <div className="absolute left-[260px] top-[160px] z-10">

      <div className="absolute -top-[185px] -left-[5px] w-[210px] h-[105px] border-2 border-emerald-400 rounded-[20px] bg-[#181A1A]" />

            <div className="absolute -top-[55px] left-[40px] w-[110px] h-[55px] border-2 border-emerald-400 rounded-[14px] bg-[#181A1A]" />
          </div>

  {/* Man LEFT */}
  <Image
    src="/home/man.png"
    alt="man"
    width={196}
    height={196}
    priority
    className="absolute left-[141px] -top-[70px] z-30 pointer-events-none "
  />

</div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-12">

          {cards.map((card, i) => (
            <Card key={i} className="h-[240px] flex flex-col">

              <Image
  src={card.icon}
  alt=""
  width={56}
  height={56}
  className="absolute top-6 right-6"
/>


              <h3 className="text-white text-2xl leading-[115%] font-bold font-[Nunito] mb-3">
                {card.title}
              </h3>

              <p className="text-gray-300 text-[18px] leading-[170%] max-w-[525px] font-[DM Sans]">
                {card.desc}
              </p>

              <Button className="absolute bottom-6 right-6">
  Learn more →
</Button>
            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}
