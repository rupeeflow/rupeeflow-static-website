import { RupeeFlowMobileImgsvg } from './icon/RupeeFlowMobileSVG'
import { UPIImgSVG } from './icon/UPIImgLogo'
import { NPCIImgSVG } from './icon/NPCIImgSVG'

export default function FuturePayments() {
  return (
    <section
      data-section
      data-theme="dark"
      className="min-h-screen bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="flex justify-center lg:justify-start">
            <RupeeFlowMobileImgsvg width={800} height={800} />
          </div>

          {/* Right Section - Text and Logos */}
          <div className="space-y-8">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              The Future of UPI, Now in Your Hands
            </h1>

            {/* Payment Logos */}
            <div className="flex gap-6">
              <div className="flex items-center gap-4">
                <UPIImgSVG width={120} height={60} />
              </div>
              <div className="flex items-center gap-4">
                <NPCIImgSVG width={120} height={60} />
              </div>
            </div>

            {/* Descriptive Text */}
            <p className="text-lg text-black leading-relaxed max-w-lg">
              RupeeFlow makes everyday payments smarter, safer, and faster.
              Clean, intuitive design with powerful fintech features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
