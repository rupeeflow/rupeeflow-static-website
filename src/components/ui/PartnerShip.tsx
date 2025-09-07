import { BBPSImgSVG } from "./icon/BBPSImgSVG";
import { NPCIImgSVG } from "./icon/NPCIImgSVG";
import { UPIImgSVG } from "./icon/UPIImgLogo";

export default function PartnerShip() {
  return (
    <section className="relative bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 py-28 relative z-40 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          In Partnership with
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-10">
          <div className="flex items-center h-12 md:h-16">
            <UPIImgSVG width={160} height={40} />
          </div>

          <div className="flex items-center h-12 md:h-16">
            <BBPSImgSVG width={160} height={40} />
          </div>

          <div className="flex items-center h-12 md:h-16">
            <NPCIImgSVG width={140} height={40} />
          </div>

          {/* Replace with vector logos if you have SVG versions */}
          {/* <img
            src="/partners/rbi.png"
            alt="RBI"
            className="h-10 md:h-12 object-contain"
          />
          <img
            src="/partners/hdfc.png"
            alt="HDFC Bank"
            className="h-10 md:h-12 object-contain"
          /> */}
        </div>

        <p className="text-gray-700 text-sm md:text-base">
          Backed by trusted institutions and leading technology partners
        </p>
      </div>
    </section>
  );
}
