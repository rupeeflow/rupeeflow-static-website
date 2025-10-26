import { ArrowImgsvg } from '../ui/icon/ArrowIconSVG'
import { CrossCheckSVG } from '../ui/icon/CrossCheckSVG'
import { RightArrowSVG } from '../ui/icon/RightArrowSVG'

export default function BillPayments() {
  return (
    <section
      data-section
      data-theme="dark"
      className="min-h-screen relative overflow-hidden"
    >
      {/* Fade circle spot using second image colors */}
      <div className="absolute top-1/6 left-1/16 w-64 h-64 bg-gradient-to-br from-[#044141] to-[#13DE72] rounded-full opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Section - Dark Theme */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Built for
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Individuals,
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Businesses and
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                NRIs
              </h1>
            </div>

            <p className="text-xl text-black/70 font-medium">
              Adopted by 1000+ users
            </p>

            <button className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#044141] to-[#13DE72] text-white font-bold text-lg rounded-xl hover:from-[#13DE72] hover:to-[#044141] transition-all duration-300 group">
              <span>SEE ALL THE FEATURES</span>
              <ArrowImgsvg width={20} height={20} className="text-white" />
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#F6F6F6] border border-gray-200 rounded-2xl p-8 max-w-md w-full shadow-xl">
              <h2 className="text-2xl font-bold text-black mb-8 leading-tight">
                Smart Bill Payments & Rewards
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <CrossCheckSVG width={24} height={24} />
                  <p className="text-black text-base leading-relaxed">
                    AI-powered reminders, split bills easily.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <CrossCheckSVG width={24} height={24} />
                  <p className="text-black text-base leading-relaxed">
                    Eco-rewards for sustainable payments.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <CrossCheckSVG width={24} height={24} />
                  <p className="text-black text-base leading-relaxed">
                    Voice powered easy payments.
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-3 px-6 py-3 border-2 bg-gradient-to-r border-[#044141] text-[#113a24] font-bold text-base rounded-xl hover:bg-[#13DE72] hover:text-white transition-all duration-300 group">
                <span>LEARN MORE</span>
                <RightArrowSVG height={24} width={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
