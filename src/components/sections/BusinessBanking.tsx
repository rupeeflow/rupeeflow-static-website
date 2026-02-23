'use client';

import Image from 'next/image';
import Card from '../ui/Card';
import Container from '@/components/ui/Container';


const bankingCards = [
  {
    title: 'Business Current Account',
    desc: 'Open Account in 10 min, Zero balance. Free NEFT/RTGS, virtual accounts',
    cta: 'Open Account →',
    icon: '/business/business-current-account.svg',
  },
  {
    title: 'API Banking',
    desc: 'Build financial products on our platform. Collections, Payouts, Credit, Verification APIs.',
    cta: 'Read Docs →',
    icon: '/business/api-banking.svg',
  },
];

export default function BusinessBanking() {
  return (
    <section className="relative bg-black pt-18 pb-24 overflow-hidden ">
     

      <Container className="relative">


        {/* ================= TOP VISUAL ================= */}
       <div className="relative h-[190px] mb-8">


          {/* Floating Boxes LEFT */}
          {/* <div className="absolute left-[220px] top-[20px] z-10">
            <div className="absolute -top-[15px] left-[10px] w-[210px] h-[105px] border-2 border-emerald-400 rounded-[20px] bg-[#181A1A]" />
            <div className="absolute top-[110px] left-[60px] w-[110px] h-[55px] border-2 border-emerald-400 rounded-[14px] bg-[#181A1A]" />
          </div> */}

          {/* Man LEFT */}
          <Image
            src="/home/businessmen.png"
            alt="man"
            width={495}
            height={495}
            priority
            className="absolute left-[91px] -top-[35px] z-30 pointer-events-none"
          />

          {/* BUSINESS BANKING Pill RIGHT */}
          <div className="absolute right-0 top-28 w-[360px] h-[60px]">
            <div className="absolute inset-0 rounded-[18px] rounded-tl-[360px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-[20px] font-semibold">
              BUSINESS BANKING
            </span>
          </div>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-2 gap-x-10">

          {bankingCards.map((card, i) => (
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

              <button className="absolute bottom-6 right-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#054C38] to-[#2AB871] text-white text-sm">
                {card.cta}
              </button>
          </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}
