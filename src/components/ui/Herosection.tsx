import { GoogleStoreImgSVG } from "./icon/GooglePlayStore";
import { RupeeflowLogo } from "./icon/RupeeflowLogo";
import { UpitransferImgSVG } from "./icon/Upitransfer";

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Green spot/glow effect */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-2xl opacity-20"></div>
            
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
                    {/* Left side - Text content */}
                    <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
                        <div className="space-y-8">
                            {/* Main headline */}
                            <div className="space-y-4 relative">
                                {/* Rounded spot near headline */}
                                <div className="absolute -top-24 -left-16 w-96 h-44 bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] rounded-full opacity-40 blur-2xl"></div>
                                <div className="absolute -top-24 -left-2 w-96 h-44 bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] rounded-full opacity-15 blur-lg"></div>
                                
                                <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight relative z-10">
                                    From Online Cities to Offline Villages,
                                <span className="text-2xl lg:text-4xl font-bold leading-tight text-white">
                                    <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">RupeeFlow</span> makes Payment Effortless
                                </span>
                                </h1>
                            </div>
                            
                            <p className="text-lg lg:text-md text-white/90 leading-relaxed max-w-2xl">
                                From UPI bill payments in villages with no internet to seamless expense splits in the city, 
                                RupeeFlow ensures your money always moves when and where you need it.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative">
                                {/* Rounded spot near buttons */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] rounded-full opacity-40 blur-xl"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] rounded-full opacity-15 blur-2xl"></div>
                                
                                <button className="p-[2px] relative group z-10">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#53BEC2] to-[#00EF64] rounded-lg" />
                                    <div className="flex items-center justify-center gap-3 px-6 py-4 bg-black rounded-lg relative group-hover:bg-transparent transition-all duration-300">
                                        <GoogleStoreImgSVG width={24} height={24}/>
                                        <span className="text-white font-semibold group-hover:text-black">DOWNLOAD THE APP</span>
                                    </div>
                                </button>
                                
                                <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#011A1A] via-[#034C32] to-[#039C8A] text-white font-semibold rounded-lg hover:from-[#034C32] hover:via-[#039C8A] hover:to-[#011A1A] transition-all duration-300 group shadow-lg z-10">
                                    <RupeeflowLogo height={24} width={24}/>
                                    EXPLORE SOLUTIONS
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side - Illustration */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative">
                            <UpitransferImgSVG height={800} width={800} className="max-w-full h-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}