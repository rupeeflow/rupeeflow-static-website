import React from 'react'
import { ChevronRight } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description?: string
  points: string[]
}

const BigCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  points,
}) => {
  return (
    <div className="bg-gray-50 w-[88%]  sticky top-[12%] rounded-3xl shadow-md flex flex-col md:flex-row items-center md:items-start py-2 px-4 sm:px-6 md:px-8 gap-8 ">
      {/* Left side (image / placeholder) */}
      <div className="w-full bg-[#D2D2D2] h-[190px] sm:h-[200px] md:h-[300px] lg:h-[400px]  md:w-[52%]   mt-4 sm:mt-8 lg:mt-12  mb-4 sm:mb-8 lg:mb-12 rounded-xl"></div>

      {/* Right side (text + list + button) */}
      <div className="flex flex-col w-[70%]  gap-6 text-center md:text-left mt-10 sm:mt-12 lg:mt-18 sm:px-6 md:px-10  ">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-weight-700 text-black font-[var(--font-nunito)] font-semibold ">
          {title}
        </h2>

        {description && (
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            {description}
          </p>
        )}

        <ul className="space-y-5  font-[var(--font-dm-sans)]  font-bold.  ml-3 sm:ml-7 lg:ml-12  mt-2 sm:mt-5 lg:mt-9 ">
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
        <div className="flex justify-center md:justify-start">
          <button className="flex items-center gap-2 border-2 border-green-800 text-green-800 ml-29 sm:ml-39 lg:ml-48 px-[10px] py-[5px] mt-5 font-bold rounded-xl hover:bg-green-50 transition mt-2 sm:mt-5 lg:mt-9">
            LEARN MORE
            <ChevronRight className="text-green-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BigCard
