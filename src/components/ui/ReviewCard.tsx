'use client'

import Image from 'next/image'

interface ReviewCardProps {
  quote: string
  name: string
  role: string
  image?: string
}

export default function ReviewCard({
  quote,
  name,
  role,
  image,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex flex-col items-center text-center max-w-md mx-auto transition-all duration-300">
      {/* Quote */}
      <p className="text-lg font-medium text-gray-800 mb-6">"{quote}"</p>

      {/* Avatar */}
      <div className="w-14 h-14 mb-4 relative rounded-full overflow-hidden bg-gray-100">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
            ☺
          </div>
        )}
      </div>

      {/* Name + Role */}
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}
