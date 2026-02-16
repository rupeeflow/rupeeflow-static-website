'use client'

import Image from 'next/image'

const methods = [
  { title: 'UPI', icon: '/payments/upi-collections.svg', sub: 'PhonePe, GPay, Paytm' },
  { title: 'Net Banking', icon: '/business/business-current-account.svg', sub: '50+ banks' },
  { title: 'Wallets', icon: '/payments/wallet.svg', sub: 'Paytm, Amazon Pay' },
  { title: 'Debit Cards', icon: '/payments/payment-gateway.svg', sub: 'All banks' },
  { title: 'Credit Cards', icon: '/payments/credit.svg', sub: 'Visa, Mastercard' },
  { title: 'BNPL', icon: '/payments/bnpl.svg', sub: 'Buy Now Pay Later' },
]

export default function AcceptMethods() {
  return (
    <section className="bg-white py-58 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-weight-100 text-gray-900 font-semibold">
          Accept Every Payment Method
        </h2>

        <p className="text-gray-500 mt-3 text-2xl">
          No matter what app, platform or card you use
        </p>

        
        {/* cards */}
        
<div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-6">
  {methods.map(item => (
    <div
      key={item.title}
      className="
        group
        bg-white
        border border-gray-200
        rounded-5xl
        px-7 py-6
        text-left
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-emerald-400
        hover:shadow-[0_12px_30px_rgba(16,185,129,0.35)]
      "
    >

      <Image src={item.icon} alt="" width={46} height={46} />

      <h4 className="mt-5 text-[18px] font-semibold text-gray-900">
        {item.title}
      </h4>

      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
        {item.sub}
      </p>
    </div>
  ))}
</div>

      </div>

      {/* floating payment summary */}
      <div className="hidden md:block absolute right-[8%] top-[280px]">
        <Image
          src="/payment-summary.png"
          alt="summary"
          width={240}
          height={360}
          className="shadow-xl rounded-8xl "
        />
      </div>

      <div className="hidden md:block absolute right-[12%] bottom-[290px]">
        <Image
          src="/payment-method.png"
          alt="method"
          width={260}
          height={160}
          className="shadow-xl rounded-xl"
        />
      </div>
    </section>
  )
}
