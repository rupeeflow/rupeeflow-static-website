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
    <section className="relative bg-black pt-8 sm:pt-12 md:pt-18 pb-12 sm:pb-16 md:pb-24 overflow-hidden">
     

      <Container className="relative">


        {/* ================= TOP VISUAL ================= */}
       <div className="relative h-auto sm:h-[190px] mb-6 sm:mb-8">

          {/* Man LEFT - Hidden on mobile */}
          <Image
            src="/home/businessmen.png"
            alt="man"
            width={495}
            height={495}
            priority
            className="hidden lg:block absolute left-[91px] -top-[35px] z-30 pointer-events-none"
          />

          {/* BUSINESS BANKING Pill RIGHT */}
          <div className="relative sm:absolute right-0 top-0 sm:top-28 w-full max-w-[360px] h-[50px] sm:h-[60px] mb-6 sm:mb-0 ml-auto">
            <div className="absolute inset-0 rounded-[18px] rounded-tl-[360px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
            <span className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 text-white text-base sm:text-[20px] font-semibold">
              BUSINESS BANKING
            </span>
          </div>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-x-10">

          {bankingCards.map((card, i) => (
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
              <button className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-[#054C38] to-[#2AB871] text-white text-xs sm:text-sm">
                {card.cta}
              </button>
          </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}
