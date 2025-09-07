
import { SecureSVG } from "./icon/SecureSVG";
import { RoundClockLogo } from "./icon/RoundClockSVG";
import { NoteBookSVG } from "./icon/NotebookSvg";
import { SpeechLogoSVG } from "./icon/SpeechLogoSVG";
import { GoogleStoreImgSVG } from "./icon/GooglePlayStore";

export default function ChooseRupeeFlow(){
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Why People Choose
                            </h1>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                                    RupeeFlow
                                </span>
                            </h2>
                        </div>

                        <p className="text-lg text-[#B3B3B3] leading-relaxed max-w-lg">
                            Stay ahead of the money management and transactions.
                        </p>

                        <button className="p-[2px] relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#53BEC2] to-[#00EF64] rounded-lg" />
                            <div className="flex items-center justify-center gap-3 px-8 py-4 bg-black rounded-lg relative group-hover:bg-transparent transition-all duration-300">
                                <GoogleStoreImgSVG width={24} height={24}/>
                                <span className="text-white font-semibold group-hover:text-black">DOWNLOAD THE APP</span>
                            </div>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] p-6 rounded-2xl border border-[#53BEC2]/20 hover:border-[#53BEC2]/40 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <h3 className="text-lg font-bold text-white">All your bills, paid in seconds.</h3>
                            </div>
                            
                            <div className="mb-4 flex justify-center">
                                <NoteBookSVG width={60} height={60} className="text-white" />
                            </div>
                            
                            <p className="text-white/90 text-sm text-center">
                                Electricity, water, mobile, and more — manage every bill in one place, without the hassle.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] p-6 rounded-2xl border border-[#53BEC2]/20 hover:border-[#53BEC2]/40 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <h3 className="text-lg font-bold text-white">Payments you can trust.</h3>
                            </div>
                            
                            <div className="mb-4 flex justify-center">
                                <SecureSVG width={60} height={60} className="text-white" />
                            </div>
                            
                            <p className="text-white/90 text-sm text-center">
                                End-to-end encryption and UPI compliance keep your money safe, no matter where you are.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] p-6 rounded-2xl border border-[#53BEC2]/20 hover:border-[#53BEC2]/40 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <h3 className="text-lg font-bold text-white">Always on, whenever you need us.</h3>
                            </div>
                            
                            <div className="mb-4 flex justify-center">
                                <RoundClockLogo width={60} height={60} className="text-white" />
                            </div>
                            
                            <p className="text-white/90 text-sm text-center">
                                RupeeFlow never sleeps. Pay, transfer, or get help anytime with round-the-clock support.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#011A1A] via-[#034C32] to-[#039C8A] p-6 rounded-2xl border border-[#53BEC2]/20 hover:border-[#53BEC2]/40 transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <h3 className="text-lg font-bold text-white">Just say it, and it&aposs done.</h3>
                            </div>
                            
                            <div className="mb-4 flex justify-center">
                                <SpeechLogoSVG width={60} height={60} className="text-white" />
                            </div>
                            
                            <p className="text-white/90 text-sm text-center">
                                Make payments in your own language with simple voice commands — no typing, no stress.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}