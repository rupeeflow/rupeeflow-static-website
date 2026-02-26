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
    icon: '/credit/invoicing-financing.svg'
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
    <section className="relative bg-black pt-8 sm:pt-12 md:pt-15 pb-12 sm:pb-16 md:pb-24 overflow-hidden">

      <Container className="relative">


        {/* ================= TOP VISUAL BLOCK ================= */}
        <div className="relative h-auto sm:h-[200px] mb-12 sm:mb-16">

          {/* GET CREDIT Pill */}
          <div className="relative sm:absolute left-0 top-0 sm:top-40 w-full max-w-[320px] h-[50px] sm:h-[60px] mb-6 sm:mb-0">
            <div className="absolute inset-0 rounded-[18px] rounded-tr-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
            <span className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 text-white text-base sm:text-[20px] font-semibold">
              GET CREDIT
            </span>
          </div>

          {/* Man - Hidden on mobile */}
          <Image
            src="/home/mencc.png"
            alt="man"
            width={525}
            height={525}
            priority
            className="hidden lg:block absolute right-[71px] -top-[45px] z-30 pointer-events-none"
          />

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-x-10 md:gap-y-12">

          {creditCards.map((card, i) => (
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
                Apply now →
              </Button>
            </Card>
          ))}

        </div>

      </Container>

    </section>
  );
}
