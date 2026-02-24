'use client'

import Image from "next/image"
import { Zap, Copy, CreditCard, ShieldCheck } from "lucide-react"

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

          {/* FEATURE BOXES */}
          <div className="grid grid-cols-2 gap-5 mt-10 max-w-lg">
            
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
        <div className="relative h-[560px]">

          {/* PERSON */}
          <div className="absolute right-[1px] bottom-0 z-11">
            <Image
              src="/different/differentmen.png"
              alt="business owner"
              width={320}
              height={460}
              priority
            />
          </div>

          {/* TOP CARD LEFT */}
          <div className="zone topLeft">
            <img src="/different/collections.png" className="card w-[210px]" alt="" />
          </div>

          {/* TOP CARD RIGHT */}
          <div className="zone topRight">
            <img src="/different/gateway.png" className="card w-[210px]" alt="" />
          </div>

          {/* LEFT CARD */}
          <div className="zone leftZone">
            <img src="/different/business.png" className="card w-[250px]" alt="" />
          </div>

          {/* BOTTOM CARD */}
          <div className="zone bottomZone">
            <img src="/different/vendor.png" className="card w-[240px]" alt="" />
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .featureBox {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 16px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .featureBox:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(16,185,129,0.4);
          background: rgba(255,255,255,0.08);
          box-shadow: 0 8px 25px rgba(16,185,129,0.15);
        }

        .featureBox h4 {
          color: #fff;
          font-size: 15px;
          margin-top: 8px;
          font-weight: 600;
        }

        .featureBox p {
          color: #9ca3af;
          font-size: 13px;
          margin-top: 4px;
          line-height: 1.4;
        }

        .iconWrap {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg,#10b981,#34d399);
          color: #022c22;
          box-shadow: 0 6px 18px rgba(16,185,129,0.35);
        }

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

        .topLeft {
          top: 30px;
          right: 360px;
          animation: slideLeftRight 12s ease-in-out infinite;
        }

        .topRight {
          top: -100px;
          right: 80px;
          animation: slideRightLeft 14s ease-in-out infinite;
        }

        .leftZone {
          left: 80px;
          top: 160px;
          animation: floatUp 12s ease-in-out infinite;
        }

        .bottomZone {
          right: 260px;
          bottom: 0;
          animation: floatDown 13s ease-in-out infinite;
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