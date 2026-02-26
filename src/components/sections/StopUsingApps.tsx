'use client'

import Image from "next/image"
import { Zap, Copy, CreditCard, ShieldCheck } from "lucide-react"

export default function StopUsingApps() {
  return (
    <section className="bg-[#071311] py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="w-full max-w-full sm:max-w-7xl mx-auto px-3 sm:px-6 grid lg:grid-cols-2 items-center gap-8 md:gap-12">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="text-emerald-400">Stop</span> Using 5 Different Apps
          </h2>

          <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-md">
            One platform for payments, payouts & business credit.
          </p>

          {/* FEATURE BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10 max-w-lg">
            
            {/* BOX 1 */}
            <div className="featureBox">
              <div className="iconWrap">
                <Zap size={18} />
              </div>
              <h4>Quick Setup</h4>
              <p>Start collecting payments in minutes.</p>
            </div>

            {/* BOX 2 */}
            <div className="featureBox">
              <div className="iconWrap">
                <Copy size={18} />
              </div>
              <h4>Copy & Paste</h4>
              <p>Add payment button with one line of code.</p>
            </div>

            {/* BOX 3 */}
            <div className="featureBox">
              <div className="iconWrap">
                <CreditCard size={18} />
              </div>
              <h4>Accept Payments</h4>
              <p>Support UPI, cards & recurring billing.</p>
            </div>

            {/* BOX 4 */}
            <div className="featureBox">
              <div className="iconWrap">
                <ShieldCheck size={18} />
              </div>
              <h4>Secure & Trusted</h4>
              <p>Bank-grade security & protected data.</p>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL AREA */}
        <div className="relative h-[400px] sm:h-[480px] md:h-[520px] lg:h-[560px] order-1 lg:order-2">

          {/* PERSON */}
          <div className="absolute right-0 sm:right-[1px] bottom-0 z-20">
            <Image
              src="/different/differentmen.png"
              alt="business owner"
              width={280}
              height={400}
              className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-auto"
              priority
            />
          </div>

          {/* TOP CARD LEFT - Hidden on mobile */}
          <div className="zone topLeft hidden md:block">
            <img src="/different/collections.png" className="card w-[150px] md:w-[180px] lg:w-[210px]" alt="Collections card" />
          </div>

          {/* TOP CARD RIGHT */}
          <div className="zone topRight">
            <img src="/different/gateway.png" className="card w-[140px] sm:w-[160px] md:w-[180px] lg:w-[210px]" alt="Gateway card" />
          </div>

          {/* LEFT CARD */}
          <div className="zone leftZone">
            <img src="/different/business.png" className="card w-[160px] sm:w-[180px] md:w-[210px] lg:w-[250px]" alt="Business card" />
          </div>

          {/* BOTTOM CARD - Hidden on small mobile */}
          <div className="zone bottomZone hidden sm:block">
            <img src="/different/vendor.png" className="card w-[160px] sm:w-[180px] md:w-[200px] lg:w-[240px]" alt="Vendor card" />
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .featureBox {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 14px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        @media (min-width: 640px) {
          .featureBox {
            border-radius: 14px;
            padding: 16px;
          }
        }

        .featureBox:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(16,185,129,0.4);
          background: rgba(255,255,255,0.08);
          box-shadow: 0 8px 25px rgba(16,185,129,0.15);
        }

        .featureBox h4 {
          color: #fff;
          font-size: 14px;
          margin-top: 8px;
          font-weight: 600;
        }

        @media (min-width: 640px) {
          .featureBox h4 {
            font-size: 15px;
          }
        }

        .featureBox p {
          color: #9ca3af;
          font-size: 12px;
          margin-top: 4px;
          line-height: 1.4;
        }

        @media (min-width: 640px) {
          .featureBox p {
            font-size: 13px;
          }
        }

        .iconWrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg,#10b981,#34d399);
          color: #022c22;
          box-shadow: 0 6px 18px rgba(16,185,129,0.35);
        }

        @media (min-width: 640px) {
          .iconWrap {
            width: 34px;
            height: 34px;
          }
        }

        .card {
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 15px 40px rgba(0,0,0,0.45);
          background: #0e1f1b;
        }

        @media (min-width: 640px) {
          .card {
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.45);
          }
        }

        @media (min-width: 768px) {
          .card {
            border-radius: 14px;
          }
        }

        .zone {
          position: absolute;
          z-index: 10;
        }

        /* Mobile positioning */
        .topLeft {
          top: 20px;
          right: 200px;
        }

        .topRight {
          top: 10px;
          right: 20px;
        }

        .leftZone {
          left: 10px;
          top: 120px;
        }

        .bottomZone {
          right: 140px;
          bottom: 20px;
        }

        /* Tablet positioning */
        @media (min-width: 640px) {
          .topLeft {
            top: 25px;
            right: 240px;
          }

          .topRight {
            top: 0;
            right: 40px;
          }

          .leftZone {
            left: 40px;
            top: 140px;
          }

          .bottomZone {
            right: 180px;
            bottom: 30px;
          }
        }

        /* Desktop positioning */
        @media (min-width: 768px) {
          .topLeft {
            top: 30px;
            right: 300px;
          }

          .topRight {
            top: -60px;
            right: 60px;
          }

          .leftZone {
            left: 60px;
            top: 150px;
          }

          .bottomZone {
            right: 220px;
            bottom: 20px;
          }
        }

        @media (min-width: 1024px) {
          .topLeft {
            top: 30px;
            right: 360px;
          }

          .topRight {
            top: -100px;
            right: 80px;
          }

          .leftZone {
            left: 80px;
            top: 160px;
          }

          .bottomZone {
            right: 260px;
            bottom: 0;
          }
        }

        /* Animations - reduced on mobile */
        @media (min-width: 768px) {
          .topLeft {
            animation: slideLeftRight 12s ease-in-out infinite;
          }

          .topRight {
            animation: slideRightLeft 14s ease-in-out infinite;
          }

          .leftZone {
            animation: floatUp 12s ease-in-out infinite;
          }

          .bottomZone {
            animation: floatDown 13s ease-in-out infinite;
          }
        }

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
