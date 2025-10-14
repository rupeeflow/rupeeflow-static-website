import React from 'react'
import BigCard from './BigCard'

const data = [
  {
    title: 'Smart Bill Payments & Rewards',
    points: [
      'AI-powered reminders, split bills easily.',
      'Eco-rewards for sustainable payments.',
      'Voice powered easy payments.',
    ],
  },
  {
    title: 'Bulk Payments & Reconciliation',
    points: [
      'Pay invoices in bulk via UPI.',
      'Auto-reconcile with Tally/ERP.',
      'Access instant credit lines.',
    ],
  },
  {
    title: 'Cross-Border UPI for NRIs',
    points: [
      'Pay Indian bills directly from abroad.',
      'Real-time forex conversion.',
      'Family account management.',
    ],
  },
]

const BuiltForSection = () => {
  return (
    <div className="flex w-full py-20 flex-col bg-black items-center justify-center relative">
      <h1 className="text-5xl font-bold text-white text-center ml-4 sm:ml-8 lg:ml-12 mb-2">
        Built for Individuals, Businesses and NRIs
      </h1>
      <p className="text-center  w-[90%] px-30  text-xl text-gray-400 h-10 mt-10 mb-20">
        Adopted by 100k+ individuals and businesses
      </p>
      <div className="flex flex-col gap-30 w-full items-center justify-center px-8">
        {data.map((obj, idx) => (
          <BigCard key={idx} title={obj.title} points={obj.points} />
        ))}
      </div>
    </div>
  )
}

export default BuiltForSection
