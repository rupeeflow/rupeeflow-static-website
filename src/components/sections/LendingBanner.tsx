import Image from 'next/image'

export default function LendingBanner() {
  return (
    <section className="relative  w-full bg-black overflow-hidden min-h-[690px] md:min-h-[790px]">

      {/* Background Image */}
      <Image
        src="/home/landing-bannerr.png"
        alt="Smart lending"
        fill
        className="object-cover "
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-10 py-28">

        {/* BLACK GLASS BOX */}
        <div className="bg-black/60 backdrop-blur-xl rounded-[32px] p-6 max-w-[820px] mt-53 ">

          <h2 className="text-white text-5xl font-semibold leading-tight ">
            Get upto 50L credit instantly <br />
            with our{' '}
            <span className="text-emerald-400">smart lending</span> plans
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Whether you are a NRI, SMB or a vendor
          </p>

          {/* Button */}
          <button className="mt-10 relative overflow-hidden px-10 py-4 rounded-full font-semibold text-black group">

            {/* White slide */}
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

            {/* Green base */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] group-hover:opacity-0 transition-opacity duration-300" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-2">
              <span className="w-3 h-3 bg-white rounded-full" />
              Apply Now
            </span>

          </button>

        </div>
      </div>

    </section>
  )
}
