import Image from 'next/image'
import tooth_smile from "../../../public/tooth_smile.png";
import React from 'react'

export const AnimatedTooth = () => {
    return (
        <div className="relative w-60  sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] flex items-center justify-center h-full">
            
            {/* Animated water ripple circles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full rounded-full border-4 border-[#0A6C5E] opacity-20 animate-circle-bounce1" />
            </div>
            <div className="absolute inset-[10%] pointer-events-none">
                <div className="w-full h-full rounded-full border-4 border-[#69F2E6] opacity-20 animate-circle-bounce2" />
            </div>

            {/* Floating emojis/shapes */}
            <span className="absolute left-6 top-8 text-3xl animate-tooth-bounce pointer-events-none z-20">🦷</span>
            <span className="absolute right-8 top-16 text-2xl animate-tooth-bounce pointer-events-none z-20">✨</span>
            <span className="absolute left-12 bottom-10 text-2xl animate-tooth-bounce pointer-events-none z-20">💧</span>
            <span className="absolute left-1/2 top-4 text-xl animate-tooth-bounce pointer-events-none z-20">⭐</span>

            {/* Tooth image with gentle bounce */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 animate-tooth-bounce z-10">
                <Image
                    fill
                    src={tooth_smile}
                    alt="Smiling tooth mascot"
                    className="object-contain"
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                />
            </div>
            <div className="absolute bottom-0 rounded-full  animate-scale border-0  bg-orange-500/20 w-20 h-20" />
            <div className="inset-0 rounded-full  animate-scale2 border-0  bg-orange-500/20 w-20 h-20" />
        </div>
    )
}