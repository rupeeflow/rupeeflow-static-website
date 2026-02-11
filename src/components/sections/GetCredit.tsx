'use client';
import Button from '@/components/ui/Button';

import Image from 'next/image';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';


const creditCards = [
  {
    title: 'Merchant Cash Advance',
    desc: '10k–5L based on daily UPI collections. 3 minute approval, auto-repay from sales.',
    icon: '/credit/merchant-cash-advance.svg',
  },
  {
    title: 'Invoice Financing',
    desc: '1L–50L for unpaid B2B invoices. Get 80% upfront, 24 hour approval.',
    icon: '/credit/invoicing.svg'
  },
  {
    title: 'NRI Emergency Loans',
    desc: '50K–10L for family in India. Apply in 12 languages, pay only when used.',
    icon: '/credit/nri-emergency-loans.svg',
  },
  {
    title: 'Personal Credit Line',
    desc: '5k–50K revolving credit, voice-enabled. Apply in 12 languages.',
    icon: '/credit/personal-credit-line.svg',
  },
];


export default function GetCredit() {
  return (
    <section className="relative bg-black pt-15 pb-24 overflow-hidden ">

      <Container className="relative">


        {/* ================= TOP VISUAL BLOCK ================= */}
        <div className="relative h-[200px] mb-16">

          {/* GET CREDIT Pill */}
          <div className="absolute left-0 top-40 w-[320px] h-[60px] ">
            <div className="absolute inset-0 rounded-[18px] rounded-tr-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
            <span className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-[20px] font-semibold">
            
              GET CREDIT
            </span>
          </div>

          {/* Floating Boxes */}
          <div className="absolute right-[260px] top-[20px] z-10">
            <div className="absolute top-[15px] left-[10px] w-[210px] h-[105px] border-2 border-emerald-400 rounded-[20px] bg-[#181A1A]" />
            <div className="absolute top-[140px] left-[80px] w-[110px] h-[55px] border-2 border-emerald-400 rounded-[14px] bg-[#181A1A]" />
          </div>

          {/* Man */}
          <Image
            src="/home/menc.png"
            alt="man"
            width={365}
            height={365}
            priority
            className="absolute right-[71px] -top-[46px] z-30 pointer-events-none"
          />

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-12">

          {creditCards.map((card, i) => (
            <Card key={i} className="h-[240px] flex flex-col">

              <Image
  src={card.icon}
  alt=""
  width={56}
  height={56}
  className="absolute top-6 right-6"
/>


              <h3 className="text-white text-[28px] font-semibold leading-tight">
                {card.title}
              </h3>

              <p className="text-gray-300 text-[15px] leading-relaxed mt-2 flex-grow max-w-[520px]">
                {card.desc}
              </p>

              <Button className="absolute bottom-6 right-6">
  Apply now →
</Button>
            </Card>
          ))}

        </div>

      </Container>

    </section>
  );
}
