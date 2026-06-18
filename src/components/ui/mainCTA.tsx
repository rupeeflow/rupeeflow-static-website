import Link from 'next/link'
import { MoveRight } from 'lucide-react'

interface CTAProps {
  label: string
  destination: string
  size?: string
  fontSize?: string
  bullet?: string
  icon?: number
}

const MainCTA: React.FC<CTAProps> = ({
  label,
  destination,
  size = 'h-11',
  fontSize = 'text-sm',
  bullet = 'w-3 h-3',
  icon = 18,
}) => {
  const isExternal = destination.startsWith('http')

  return (
    <Link
      href={destination}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      className={`${size} group relative inline-flex items-center justify-center overflow-hidden
      rounded-full px-7
      bg-white
      border border-white/10
      hover:border-emerald-400/60
      transition-all duration-300 ease-in-out
      hover:shadow-[0_0_22px_rgba(0,239,100,0.25)]`}
    >
      {/* expanding gradient bubble */}
      <span
        aria-hidden="true"
        className={`${bullet} absolute left-[6%] rounded-full
        bg-gradient-to-r from-[#00EF64] to-[#53BEC2]
        transition-all duration-500 ease-out
        group-hover:w-[140%] group-hover:h-[140%]
        group-hover:-translate-x-12`}
      />

      {/* label */}
      <span
        className={`${fontSize} relative z-10 font-semibold tracking-wide
        text-white
        transition-all duration-300
        group-hover:text-black
        group-hover:-translate-x-2`}
      >
        {label}
      </span>

      {/* arrow icon */}
      <MoveRight
        size={icon}
        className="absolute right-3 opacity-0 translate-x-4
        text-white
        transition-all duration-300 ease-out
        group-hover:opacity-100
        group-hover:translate-x-0
        group-hover:text-black"
      />
    </Link>
  )
}

export default MainCTA
