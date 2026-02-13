import React from 'react'

const CollectPayments = () => {
  return (
    <div>

        <div>
          <h3>Accept Payment in elegant way with RupeeFlow</h3>
          <h5>Automated, secure payment collection designed to keep your cash flow steady and your business growing.</h5>
          <button className='bg-emerald-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-emerald-600 transition-colors'>Let's Connect</button>
          {/* Image will come here to show the follow of payments */}
        </div>
        <div>
          {/* Add Marquee whom we are distributing products */}
        </div>
        <div>
          <div>Image will come here </div>
        {/* Again Image will be come here, above Image text will come */}
        <div>
          Automated payment collection that ensures consistent, on-time cash flow without manual follow-ups.
        </div>
            <div className='grid grid-cols-3 gap-4 mt-6'>
              <div>Transactions Success Rate</div>
              <div>Uptime</div>
              <div>Payment Options</div>
            </div>
          {/* Three boxes should appear which will show transactions SR, uptime, options */}
        </div>
        <div className='flex items-center justify-center bg-gradient-to-bl from-emerald-500 to-emerald-700 text-white py-12 mt-10 rounded-lg'>
          <div className='max-w-2xl text-center'>
            <h1 className='text-3xl font-bold mb-4'>Accept Payments the Way Your Customers Prefer</h1>
          </div>
        </div>
    </div>
  )
}

export default CollectPayments