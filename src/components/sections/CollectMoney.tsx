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
    <section className="relative bg-black pt-10 pb-16 overflow-hidden">
      <Container className="relative">

        {/* Hero */}
        <div className="relative text-center mb-32">

          <h1 className="text-white font-semibold leading-[1.15] tracking-[-0.02em]
                 text-2xl md:text-4xl max-w-5xl mx-auto">
    
    India’s First Platform with{" "}
    <span className="text-emerald-400">
      End-to-End Payments
    </span>{" "}
    &

    <br className="hidden md:block" />

    <span className="text-emerald-400">Lending</span>{" "}
    together
  </h1>
  <p className="mt-6 text-gray-300 text-lg md:text-xl">
    Everything Your Business Needs In One Place
  </p>

          {/* Floating Boxes */}
          {/* <div className="absolute right-[260px] top-[160px] z-10">
            <div className="absolute top-[5px] left-[10px] w-[210px] h-[105px] border-2 border-emerald-400 rounded-[20px] bg-[#181A1A]" />
            <div className="absolute top-[140px] left-[80px] w-[110px] h-[55px] border-2 border-emerald-400 rounded-[14px] bg-[#181A1A]" />
          </div> */}

          {/* Woman */}
          <Image
            src="/home/men.png"
            alt="woman"
            width={416}
            height={416}
            priority
            className="absolute right-[105px] top-[87px] z-30 pointer-events-none"
          />
        </div>

        {/* Collect Money Pill */}
        <div className="relative w-[320px] h-[60px] mb-10">
          <div className="absolute inset-0 rounded-[18px] rounded-tr-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
          <span className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-[20px] font-semibold tracking-wide">
            COLLECT MONEY
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8">

          {cards.map((card, i) => (

            <Card
              key={i}
              className="relative h-[220px] flex flex-col"
            >

              <Image
                src={card.icon}
                alt=""
                width={56}
                height={56}
                className="absolute top-6 right-6"
              />

              <h3 className="text-white text-2xl font-bold">
                {card.title}
              </h3>

              <p className="text-gray-100 text-sm mt-5 leading-relaxed max-w-[80%]">
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
