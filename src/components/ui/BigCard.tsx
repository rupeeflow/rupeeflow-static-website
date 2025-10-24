import React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface FeatureCardProps {
  title: string
  description?: string
  imageUrl: string
  points: string[]
}

const BigCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl = '/images/placeholder.png',
  points,
}) => {
  return (
    <div
      className="flex bg-neutral-100 portrait:flex-col landscape:flex-row sticky top-[12%] lg:top-[18%] 
                  w-full h-[80vh] md:h-[70dvh]   lg:gap-10 bg-gray-100 rounded-4xl 
                  p-2 "
    >
      {/* Left side (image / placeholder) */}
      <div
        className="relative overflow-hidden 
                            w-full  
                             landscape:h-full  portrait:h-[50%] landscape:w-[55%] portrait:w-full
                            bg-gray-300 rounded-3xl"
      >
        <Image
          src={imageUrl}
          alt="Card illustration"
          width={800}
          height={800}
          priority
          className="absolute z-0 object-cover object-center w-full h-full"
        />
      </div>

      {/* Right side (text + list + button) */}
      <div className="flex flex-col portrait:w-full portrait:h-[50%] landscape:w-[50%] landscape:h-full  gap-6 text-center md:text-left py-4 px-3 lg:px-0 lg:py-12 ">
        <h2 className="text-lg sm:text-2xl md:text-5xl lg:text-[4vw] fontheading2 text-black ">
          {title}
        </h2>

        {description && (
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            {description}
          </p>
        )}

        <ul className="space-y-5  font-[var(--font-dm-sans)]  font-bold.  ">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center w-3 h-3 bg-green-100  text-green-700 text-xs ">
                ✅
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex mx-12 justify-end">
          <button className="flex items-center gap-2 border-2 border-green-800 text-green-800 px-[10px] py-[5px]  font-bold rounded-xl hover:bg-green-50 transition">
            LEARN MORE
            <ChevronRight className="text-green-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BigCard
