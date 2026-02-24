'use client';
import Link from "next/link";

import Image from 'next/image'

const businessCards = [
  {
    title: 'MSME / SMBs',
    items: [ 'Payment Gateway', 'Bulk Payouts', 'Invoice Financing', 'Business Current Account', ],
    image: '/business/msme.svg',
    active: true,
    link: '/solutions/msme',
  },
  {
    title: 'Kirana Store / Small Merchant',
    items: ['Kirana POS', 'Merchant Cash', 'Bill Payments', 'Voice Payments'],
    image: '/business/kirana.svg',
    link: '/solutions/kirana',
  },
  {
    title: 'NRI / Overseas Indian',
    items: [ 'Cross-border Remittance', 'NRI Emergency Loans', 'Direct bill Payments to India', 'Multi-currency support', ],
    image: '/business/nri.svg',
    link: '/solutions/nri',
  },
  {
    title: 'Developer / Platform',
    items: [ 'Payment Gateway APIs', 'Payouts APIs', 'Verification APIs', 'Banking-as-a-Service', ],
    image: '/business/developer.svg',
    link: '/solutions/developer',
  },
];

export default function ChooseBusinessType() {
  return (
   <section className="relative bg-white py-8 overflow-hidden">

  {/* BIG WAVE */}
  <Image
    src="/wave.png"
    alt="wave"
    width={1500}
    height={200}
    className="absolute top-[160px] left-0 w-[1500px] z-[1] pointer-events-none"
  />

  {/* CONTENT */}
  <div className="relative z-[10] max-w-[1200px] mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Choose Your Business Type
          </h2>
          <p className="text-gray-600">
            Which option best describe your business?
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-10">

          {businessCards.map((card, i) => (
            
    <div
  key={i}
  className={`relative rounded-[22px] border p-10 min-h-[260px]
  ${
    card.active
      ? 'border-emerald-500 border-2 bg-white'
      : 'border-gray-300 bg-white/70 backdrop-blur-[12px]'
  }`}
>

  <h3 className="text-2xl font-semibold mb-6">
    {card.title}
  </h3>

  <ul className="space-y-3 text-gray-700">
    {card.items.map((item, j) => (
      <li key={j}>{item}</li>
    ))}
  </ul>

  {/* 👇 ADD THIS IMAGE RIGHT HERE */}
  <Image
    src={card.image}
    alt={card.title}
    width={180}
    height={180}
    className="absolute right-8 top-1/2 -translate-y-1/2 w-[180px] pointer-events-none"
  />

<Link
  href={card.link}
  className="absolute bottom-4 right-8 z-20
             px-6 py-2 rounded-full
             bg-gradient-to-r from-[#054C38] to-[#2AB871]
             text-white text-sm flex items-center gap-2
             transition-all duration-300
             hover:scale-105 hover:shadow-lg
             hover:shadow-black-500/30
             active:scale-95
             hover:text-pink/450"
>
  See Complete Solution →
</Link>
</div>

          ))}

        </div>

      </div>
    </section>
  );
}
