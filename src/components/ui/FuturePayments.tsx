import Image from 'next/image'

export default function FuturePayments() {
  return (
    <section
      data-section
      data-theme="dark"
      className="flex w-full h-full items-center min-h-screen bg-white overflow-hidden mb-10 md:mb-0 "
    >
      <div className="flex mx-auto px-6 items-center">
        <div className="flex portrait:flex-col landscape:flex-row gap-5 lg:gap-30 items-center px-2 lg:px-20">
          <div className="flex portrait:w-full portrait:h-[70vh] landscape:h-[110vh] landscape:w-[50%]relative">
            <Image
              src="/images/rupeeflow-phone.png"
              alt="RupeeFlow Mobile"
              height={800}
              width={400}
              className="object-contain h-full w-auto"
            />
          </div>

          {/* Right Section - Text and Logos */}
          <div className="flex flex-col items-center space-y-8 portrait:w-full  landscape:w-[50%]">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl fontheading2 text-black leading-tight">
              The Future of UPI, Now in Your Hands
            </h1>

            {/* Payment Logos */}
            <div className="flex gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/partners/upi.png"
                  alt="UPI Logo"
                  width={150}
                  height={60}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/partners/npci.png"
                  alt="NPCI Logo"
                  width={150}
                  height={60}
                  className="object-contain w-full h-auto"
                />
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
