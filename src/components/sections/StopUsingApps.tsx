'use client'

import Image from "next/image"

export default function StopUsingApps() {
  return (
    <section className="bg-[#071311] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
            <span className="text-emerald-400">Stop</span> Using 5 Different Apps
          </h2>

          <p className="text-gray-400 mt-4 max-w-md">
            One platform for payments, payouts & business credit.
          </p>
        </div>

        {/* RIGHT VISUAL AREA */}
        <div className="relative h-[560px]">

          {/* PERSON */}
          <div className="absolute right-2 bottom-0 z-20">
            <Image
              src="/different/differentmen.png"
              alt="business owner"
              width={360}
              height={460}
              priority
            />
          </div>

          {/* TOP CARD LEFT */}
          <div className="zone topLeft">
            <img
              src="/different/collections.png"
              className="card w-[210px]"
              alt=""
            />
          </div>

          {/* TOP CARD RIGHT */}
          <div className="zone topRight">
            <img
              src="/different/gateway.png"
              className="card w-[210px]"
              alt=""
            />
          </div>

          {/* LEFT CARD */}
          <div className="zone leftZone">
            <img
              src="/different/business.png"
              className="card w-[250px]"
              alt=""
            />
          </div>

          {/* BOTTOM CARD */}
          <div className="zone bottomZone">
            <img
              src="/different/vendor.png"
              className="card w-[240px]"
              alt=""
            />
          </div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .card {
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
          background: #0e1f1b;
        }

        .zone {
          position: absolute;
          z-index: 10;
        }

        /* TOP LEFT CARD */
        .topLeft {
          top: 30;
          right: 360px;
          animation: slideLeftRight 12s ease-in-out infinite;
        }

        /* TOP RIGHT CARD */
        .topRight {
          top: -100px;
          right: 80px;
          animation: slideRightLeft 14s ease-in-out infinite;
        }

        /* LEFT CARD */
        .leftZone {
          left: 110;
          top: 160px;
          animation: floatUp 12s ease-in-out infinite;
        }

        /* BOTTOM CARD */
        .bottomZone {
          right: 260px;
          bottom: 0;
          animation: floatDown 13s ease-in-out infinite;
        }

        /* MOTION KEYFRAMES */

        @keyframes slideLeftRight {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(-45px); }
        }

        @keyframes slideRightLeft {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(45px); }
        }

        @keyframes floatUp {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-35px); }
        }

        @keyframes floatDown {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(35px); }
        }
      `}</style>
    </section>
  )
}