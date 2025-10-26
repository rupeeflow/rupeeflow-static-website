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
  image = '/defaultaccount.svg',
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex flex-col items-center text-center max-w-5xl mx-auto transition-all duration-300">
      {/* Quote */}
      <p className="text-3xl fontheading2 text-gray-800 mb-6">
        &quot;{quote}&quot;
      </p>

      {/* Avatar */}
      <div className="w-14 h-14 mb-4 relative rounded-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name + Role */}
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}
