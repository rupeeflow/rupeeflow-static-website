'use client';

import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-b from-[#0a2f23] via-black to-black flex items-center justify-center overflow-hidden">
     <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_60%)] pointer-events-none" />

{/* LEFT ICONS */}
<img
  src="/home/rupee.svg"
  className="absolute left-[240px] top-[55%] w-[70px] opacity-90"
/>

<img
  src="/payments/upi-collections.svg"
  className="absolute left-[290px] top-[65%] w-[80px] opacity-90"
/>

{/* RIGHT ICONS */}
<img
  src="/home/wallet.svg"
  className="absolute right-[240px] top-[55%] w-[70px] opacity-90"
/>

<img
  src="/home/globe.svg"
  className="absolute right-[290px] top-[65%] w-[70px] opacity-90"
/>


      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

        {/* Pills */}
        <div className="flex justify-center gap-3 mb-1 mt-40 flex-wrap">
          {['Payment Gateway', 'Credits', 'Cards'].map(item => (
            <span
              key={item}
              className="border border-emerald-400/40 rounded-full px-4 py-1 text-xs text-emerald-300"
            >
              {item}
            </span>
          ))}
        </div>
        

        {/* Heading */}
      
  <h1 className="text-3xl md:text-6xl  text-white light-gradient font-weight-900 ">
    India’s <span className="text-emerald-400">Complete Financial </span>
    <br></br>
    <span className="text-emerald-400 ">Platform </span>
       for Businesses
  </h1>




        <p className="mt-4 text-gray-300">
          
  Accept payments, Make payouts. Get instant credit – All In One App
</p>


{/* Decorative Wave */}
{/* Decorative Wave */}


<div className=" w-[1200px]flex justify-center mb-10 ">
  <img
    src="/wave1.png"
    alt="decorative wave"
    className="w-full max-w-[1800px] opacity-50"
  />
</div>

    <defs>
      <linearGradient id="waveGradient" x1="0" y1="0" x2="1200" y2="0">
        <stop offset="0%" stopColor="#0f3f30" />
        <stop offset="50%" stopColor="#2AB871" />
        <stop offset="100%" stopColor="#0f3f30" />
      </linearGradient>
    </defs>

    <path
      d="M0 70
         C 200 20, 400 120, 600 70
         S 1000 20, 1200 70"
      stroke="url(#waveGradient)"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
    />
  




    


        {/* Buttons */}
       
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="#" className="px-6 py-3 rounded-full border border-emerald-400 text-white hover:bg-emerald-500/20">
            Start Getting Paid
          </Link>

          <Link href="#" className="px-6 py-3 rounded-full border border-emerald-400 text-white hover:bg-emerald-500/20">
            Make Bulk Payouts
          </Link>

          <Link href="#" className="px-6 py-3 rounded-full border border-emerald-400 text-white hover:bg-emerald-500/20">
            Get instant 5L Credit
          </Link>
        </div>
        
        

        


        {/* Stats */}
       {/* Stats */}
<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="auto-hover border border-emerald-400 rounded-xl p-6 transition-all duration-500">
    <h3 className="text-3xl text-white font-bold">100K+</h3>
    <p className="text-gray-400 mt-1">Businesses Onboard</p>
  </div>

  <div className="auto-hover border border-emerald-400 rounded-xl p-6 transition-all duration-500 [animation-delay:0.4s]">
    <h3 className="text-3xl text-white font-bold">150 Cr+</h3>
    <p className="text-gray-400 mt-1">Credit Disbursed</p>
  </div>

  <div className="auto-hover border border-emerald-400 rounded-xl p-6 transition-all duration-500 [animation-delay:0.8s]">
    <h3 className="text-3xl text-white font-bold">50+</h3>
    <p className="text-gray-400 mt-1">Partnerships</p>
  </div>

</div>

        
      </div>
    </section>
  );
}

function Stat({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="border border-white/20 rounded-xl p-6">
      <h3 className="text-3xl text-white font-bold">{title}</h3>
      <p className="text-gray-400 mt-1">{sub}</p>
    </div>
  );
}