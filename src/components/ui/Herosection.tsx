import { GoogleStoreImgSVG } from './icon/GooglePlayStore'
import { RupeeflowLogo } from './icon/RupeeflowLogo'
import { UpitransferImgSVG } from './icon/Upitransfer'

//need to fix

import { BillManagamentLogo } from './icon/BillManagementSVG'
import { SpeechLogoSVG } from './icon/SpeechLogoSVG'
import { SecureAndTrustLogo } from './icon/SecureTrustSVG'
import { WifiLogoSVG } from './icon/WifiLogoSVG'
import { SquareImgsvg } from './icon/SquareImgSVG'
import { CrossCheckSVG } from './icon/CrossCheckSVG'
import { UPIImgSVG } from './icon/UPIImgLogo'
import { BBPSImgSVG } from './icon/BBPSImgSVG'
import { NPCIImgSVG } from './icon/NPCIImgSVG'

//need to fix

export default function HeroSection() {
  return (
    <section
      data-section
      data-theme="light"
      className="w-full bg-black relative overflow-hidden"
      id="hero"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
          <div className="space-y-8">
            {/* Main headline */}
            <div className="space-y-4 relative">
              <h1 className="text-2xl lg:text-4xl fontheading text-white leading-tight ">
                From Online Cities to Offline Villages,
                <span className="text-2xl lg:text-4xl font-bold leading-tight text-white">
                  <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                    {' '}
                    RupeeFlow
                  </span>{' '}
                  makes Payment Effortless
                </span>
              </h1>
            </div>

            <p className="text-lg lg:text-md text-white/90 fontbody leading-relaxed text-justify max-w-2xl">
              From UPI bill payments in villages with no internet to seamless
              expense splits in the city, RupeeFlow ensures your money always
              moves when and where you need it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative">
              <button className="p-[2px] relative group z-10">
                <div className="flex items-center justify-center gap-3 px-6 py-4 bg-black rounded-lg relative group-hover:bg-transparent transition-all duration-300">
                  <GoogleStoreImgSVG width={24} height={24} />
                  <span className="text-white font-semibold group-hover:text-black">
                    DOWNLOAD THE APP
                  </span>
                </div>
              </button>

              <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#011A1A] via-[#034C32] to-[#039C8A] text-white font-semibold rounded-lg hover:from-[#034C32] hover:via-[#039C8A] hover:to-[#011A1A] transition-all duration-300 group shadow-lg z-10">
                <RupeeflowLogo height={24} width={24} />
                EXPLORE SOLUTIONS
              </button>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <UpitransferImgSVG
                height={800}
                width={800}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] 
                bg-gradient-to-br from-[#53BEC2] to-[#00EF64] to-100% 
                rounded-full opacity-90 blur-[100px]"
      ></div>

      <div
        className="absolute bottom-1/3 right-1/3 w-[28rem] h-[28rem] 
                bg-gradient-to-tr from-[#00EF64] to-[#53BEC2] 
                rounded-full opacity-40 blur-[140px]"
      ></div>

      <div
        className="absolute top-1/2 right-1/4 w-[36rem] h-[36rem] 
                bg-gradient-to-bl from-[#53BEC2] to-[#00EF64] 
                rounded-full opacity-25 blur-[180px]"
      ></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The Future of UPI, Built for You
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Connecting Voices
            </span>
          </h2>
          <p className="text-base text-white/80 max-w-3xl mx-auto">
            Key features which sets us apart from the crowd. Smarter bills to
            voice payments.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Smart Money Flow */}
          <div className="bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] p-6 rounded-2xl border border-[#53BEC2]/20 hover:border-[#53BEC2]/40 transition-all duration-300 group">
            <div className="flex justify-center space-x-4 px-2 py-2 bg-gradient-to-r from-[#044141] to-[#13DE68] items-center mb-4 rounded-2xl">
              <SquareImgsvg width={10} height={10} />
              <h3 className="text-sm font-semibold text-white">
                Smart Money Flow
              </h3>
            </div>

            <div className="mb-6 flex justify-center">
              <BillManagamentLogo
                width={80}
                height={80}
                className="text-white"
              />
            </div>

            <p className="text-white/90 mb-6 text-center font-semibold">
              AI-powered bill manager and reminders
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-5 h-5 bg-[#00EF64] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CrossCheckSVG
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <p className="text-white/80 text-sm">
                  Never miss a bill with smart predictions.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <CrossCheckSVG width={32} height={32} className="text-white" />
                <p className="text-white/80 text-sm">
                  Auto-categorize expenses and track spending easily.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Pay Any Time, Anywhere */}
          <div className="bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] p-6 rounded-2xl border border-[#53BEC2]/20 hover:border-[#53BEC2]/40 transition-all duration-300 group">
            <div className="flex justify-start space-x-4 px-2 py-2 bg-gradient-to-r from-[#044141] to-[#13DE68] items-center mb-4 rounded-2xl">
              <SquareImgsvg width={10} height={10} />
              <h3 className="text-sm font-semibold text-white">
                Pay Any Time, Anywhere
              </h3>
            </div>

            <div className="mb-6 flex justify-center">
              <WifiLogoSVG width={80} height={80} className="text-white" />
            </div>

            <p className="text-white/90 mb-6 text-center font-semibold">
              Online + Offline payments in one app
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#00EF64] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CrossCheckSVG
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <p className="text-white/80 text-sm">
                  Works in cities and villages, even without internet.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#00EF64] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CrossCheckSVG
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <p className="text-white/80 text-sm">
                  Smart UPI Lite ensures your money moves when you need it.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Speak Your Language */}
          <div className="bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] p-6 rounded-2xl border border-[#53BEC2]/20 hover:border-[#53BEC2]/40 transition-all duration-300 group">
            <div className="flex justify-start space-x-4 px-2 py-2 bg-gradient-to-r from-[#044141] to-[#13DE68] items-center mb-4 rounded-2xl">
              <SquareImgsvg width={10} height={10} />
              <h3 className="text-sm font-semibold text-white">
                Speak Your Language
              </h3>
            </div>

            <div className="mb-6 flex justify-center">
              <SpeechLogoSVG width={80} height={80} className="text-white" />
            </div>

            <p className="text-white/90 mb-6 text-center font-semibold">
              Voice payments in regional languages
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#00EF64] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CrossCheckSVG
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <p className="text-white/80 text-sm">
                  Pay bills or send money with simple voice commands.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#00EF64] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CrossCheckSVG
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <p className="text-white/80 text-sm">
                  Supports multiple Indian languages for true inclusivity.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Built for Trust & Growth */}
          <div className="bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] p-6 rounded-2xl border border-[#53BEC2]/20 hover:border-[#53BEC2]/40 transition-all duration-300 group">
            <div className="flex justify-start space-x-4 px-2 py-2 bg-gradient-to-r from-[#044141] to-[#13DE68] items-center mb-4 rounded-2xl">
              <SquareImgsvg width={10} height={10} />
              <h3 className="text-sm font-semibold text-white">
                Built for Trust & Growth
              </h3>
            </div>

            <div className="mb-6 flex justify-center">
              <SecureAndTrustLogo
                width={80}
                height={80}
                className="text-white"
              />
            </div>

            <p className="text-white/90 mb-6 text-center font-semibold">
              Secure, transparent, and MSME-friendly
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#00EF64] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CrossCheckSVG
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <p className="text-white/80 text-sm">
                  Bank-grade security with UPI compliance.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-5 h-5 bg-[#00EF64] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CrossCheckSVG
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <p className="text-white/80 text-sm">
                  Solutions tailored for individuals and small businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
