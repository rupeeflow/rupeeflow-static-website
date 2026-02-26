'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';

const cards = [
  {
    title: 'Payment Gateway',
    desc: 'Accept all payment modes — cards, UPI, net banking, wallets. Developer-friendly APIs',
    icon: '/payments/payment-gateway.svg',
  },
  {
    title: 'Payment Links',
    desc: 'Share payment links via WhatsApp/SMS, get paid instantly without website.',
    icon: '/payments/payment-links.svg',
  },
  {
    title: 'UPI Collections',
    desc: 'Accept UPI payments with instant settlement. Voice + Offline enabled',
    icon: '/payments/upi-collections.svg',
  },
  {
    title: 'Cross-Border Collections',
    desc: 'Receive payments from 15+ countries. Real-time forex, instant settlement',
    icon: '/payments/cross-border-payments.svg',
  },
];

export default function CollectMoney() {
  return (
    <section className="relative bg-black pt-8 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      <Container className="relative">

        {/* Hero */}
        <div className="relative text-center mb-12 sm:mb-20 md:mb-32">

          <h1 className="text-white font-semibold leading-[1.15] tracking-[-0.02em]
                 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto px-4">
    
    India's First Platform with{" "}
    <span className="text-emerald-400">
      End-to-End Payments
    </span>{" "}
    &
    <span className="text-emerald-400"> Lending</span>{" "}
    together
  </h1>
  <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl px-4">
    Everything Your Business Needs In One Place
  </p>

          {/* Woman - Hidden on mobile and small tablets */}
          <Image
            src="/home/men.png"
            alt="business person"
            width={416}
            height={416}
            priority
            className="hidden lg:block absolute right-[105px] top-[87px] z-30 pointer-events-none"
          />
        </div>

        {/* Collect Money Pill */}
        <div className="relative w-full max-w-[320px] h-[50px] sm:h-[60px] mb-6 sm:mb-10">
          <div className="absolute inset-0 rounded-[18px] rounded-tr-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
          <span className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 text-white text-base sm:text-[20px] font-semibold tracking-wide">
            COLLECT MONEY
          </span>
        </div>

        {/* Cards - Stack on mobile, 2 columns on tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-x-10 md:gap-y-8">

          {cards.map((card, i) => (

            <Card
              key={i}
              className="relative min-h-[200px] sm:min-h-[220px] flex flex-col p-4 sm:p-6"
            >

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
