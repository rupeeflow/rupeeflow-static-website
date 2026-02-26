import Image from 'next/image'

export default function LendingBanner() {
  return (
    <section className="relative w-full bg-black overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[690px] lg:min-h-[790px]">

      {/* Background Image */}
      <Image
        src="/home/landing-bannerr.png"
        alt="Smart lending"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-full sm:max-w-[1200px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-28 flex items-end min-h-[500px] sm:min-h-[600px] md:min-h-[690px] lg:min-h-[790px]">

        {/* BLACK GLASS BOX */}
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[32px] p-4 sm:p-5 md:p-6 max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[820px] mb-0 sm:mb-8 md:mb-0">

          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
            Get upto 50L credit instantly <br className="hidden sm:block" />
            with our{' '}
            <span className="text-emerald-400">smart lending</span> plans
          </h2>

          <p className="mt-3 sm:mt-4 md:mt-6 text-gray-300 text-sm sm:text-base md:text-lg">
            Whether you are a NRI, SMB or a vendor
          </p>

          {/* Button */}
          <button className="mt-6 sm:mt-8 md:mt-10 relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-black group text-sm sm:text-base">

            {/* White slide */}
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

            {/* Green base */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] group-hover:opacity-0 transition-opacity duration-300" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full" />
              Apply Now
            </span>

          </button>

        </div>
      </div>

    </section>
  )
}
