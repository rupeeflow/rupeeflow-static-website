import Image from "next/image";

export default function PartnershipBanner() {
  return (
    <section className="relative w-full py-6">
      <div className="relative max-w-[1920px] mx-auto h-[760px] px-6">

        {/* Background Image */}
        <Image
          src="/home/partnership-banner.png"
          alt="Partnership"
          fill
          priority
          className="object-cover rounded-xl"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end w-full pb-16">

          {/* BLACK GLASS BOX */}
          <div className="bg-black/30 backdrop-blur-sm rounded-[32px] p-12 w-[1190px]  ">

            <h2 className="text-white text-6xl font-weight-500 mb-4 ml-82">
              Want to do a Partnership?
            </h2>

            <p className="text-gray-300 text-xl mb-8 mt-13 ml-82">
              Join 50+ brands who are partnered with us
            </p>

            {/* Button */}
            <button className="relative overflow-hidden px-10 py-4 ml-210 rounded-full font-semibold flex items-center gap-3 text-black group">

              {/* White slide */}
              <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />

              {/* Green base */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] group-hover:opacity-0 transition-opacity duration-300" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 transition-all duration-300 group-hover:-translate-x-2">
                Connect With Us →
              </span>

            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
