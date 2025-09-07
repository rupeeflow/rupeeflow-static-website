import { SpeechLogoSVG } from "./icon/SpeechLogoSVG";

export default function RegionalLanguage(){
    return(
        <div className="min-h-screen bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#53BEC2] to-[#00EF64] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#53BEC2] to-[#00EF64] rounded-full opacity-15 blur-3xl"></div>
            
            <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Don&t Loose Your Flow, Use
                </h1>
                
                <h2 className="text-5xl lg:text-7xl font-bold mb-12 leading-tight">
                    <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                        RupeeFlow
                    </span>
                </h2>
                
                <div className="flex items-center justify-center mb-8 relative">
                    <div className="flex items-end gap-1 mr-4">
                        <div className="w-1 bg-white h-8 rounded-full"></div>
                        <div className="w-1 bg-white h-12 rounded-full"></div>
                        <div className="w-1 bg-white h-6 rounded-full"></div>
                        <div className="w-1 bg-white h-10 rounded-full"></div>
                        <div className="w-1 bg-white h-4 rounded-full"></div>
                    </div>
                    
                    <div className="flex justify-center">
                        <SpeechLogoSVG width={120} height={120} className="text-white" />
                    </div>
                    
                    <div className="flex items-end gap-1 ml-4">
                        <div className="w-1 bg-white h-4 rounded-full"></div>
                        <div className="w-1 bg-white h-10 rounded-full"></div>
                        <div className="w-1 bg-white h-6 rounded-full"></div>
                        <div className="w-1 bg-white h-12 rounded-full"></div>
                        <div className="w-1 bg-white h-8 rounded-full"></div>
                    </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                        Your Voice, Your Language, Your Payments
                    </span>
                </h3>
                
                <p className="text-lg lg:text-xl text-white max-w-2xl leading-relaxed">
                    Supports multiple Indian regional languages for true inclusivity
                </p>
            </div>
        </div>
    )
}