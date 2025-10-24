import { RupeeFlowMobileImgsvg } from './icon/RupeeFlowMobileSVG'
import { UPIImgSVG } from './icon/UPIImgLogo'
import { NPCIImgSVG } from './icon/NPCIImgSVG'

export default function FuturePayments() {
  return (
    <section
      data-section
      data-theme="dark"
      className="flex items-center min-h-screen bg-white overflow-hidden "
    >
      <div className="flex mx-auto px-6 items-center">
        <div className="flex portrait:flex-col landscape:flex-row gap-12 items-center min-h-screen">
          <div className="flex justify-center lg:justify-start">
            <RupeeFlowMobileImgsvg width={800} height={800} />
          </div>

          {/* Right Section - Text and Logos */}
          <div className="flex flex-col items-center space-y-8">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl fontheading2 text-black leading-tight">
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
            <p className="text-lg text-black  max-w-lg">
              RupeeFlow makes everyday payments smarter, safer, and faster.
              Clean, intuitive design with powerful fintech features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
