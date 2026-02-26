import Image from "next/image";

export default function PartnershipBanner() {
  return (
    <section className="relative w-full py-4 sm:py-6">
      <div className="relative w-full max-w-full sm:max-w-[1920px] mx-auto h-[500px] sm:h-[600px] md:h-[700px] lg:h-[760px] px-3 sm:px-6">

        {/* Background Image */}
        <Image
          src="/home/partnership-banner.png"
          alt="Partnership"
          fill
          priority
          className="object-cover rounded-xl"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end w-full pb-6 sm:pb-10 md:pb-16 px-3 sm:px-6">

          {/* BLACK GLASS BOX */}
          <div className="bg-black/40 sm:bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-full sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1190px]">

            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-weight-500 mb-3 sm:mb-4">
              Want to do a Partnership?
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
              Join 50+ brands who are partnered with us
            </p>

            {/* Button */}
            <button className="relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold flex items-center gap-2 sm:gap-3 text-black group text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start">

              {/* White slide */}
              <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

              {/* Green base */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] group-hover:opacity-0 transition-opacity duration-300" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 transition-all duration-300 group-hover:-translate-x-2">
                Connect With Us →
              </span>

            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
