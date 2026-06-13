import Button from '@/components/ui/Button'
import { MoveRight } from 'lucide-react'

interface CTAProps {
  label: string
  destination: string
  size?: string
  fontSize?: string
  bullet?: string
  icon?: number
  noBullet?: boolean
  imgSrc?: string
  imgAlt?: string
  showArrow?: boolean
}

const MainCTA: React.FC<CTAProps> = ({
  label,
  destination,
  size = 'h-11',
  fontSize = 'text-sm',
  bullet = 'w-3 h-3',
  icon = 18,
  noBullet = false,
  imgSrc = '',
  imgAlt = '',
  showArrow = true,
}) => {
  const isExternal = destination.startsWith('http')

  return (
    <Button href={destination} className={`${size} group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 border border-emerald-800/40 shadow-lg`}>
      {!noBullet && (
        <span
          aria-hidden="true"
          className={`${bullet} absolute left-[6%] rounded-full
          bg-gradient-to-r from-[#00EF64] to-[#53BEC2]
          transition-all duration-500 ease-out
          group-hover:w-[140%] group-hover:h-[140%]
          group-hover:-translate-x-12 opacity-80`}
        />
      )}

      {imgSrc ? (
        <span className="absolute left-4 z-10">
          <img src={imgSrc} alt={imgAlt || label} className="w-8 h-8 object-contain rounded-md" />
        </span>
      ) : null}

      <span
        className={`${fontSize} relative z-10 font-semibold tracking-wide text-white transition-all duration-300 ${imgSrc ? 'pl-10' : ''} group-hover:text-black`}
      >
        {label}
      </span>

      {showArrow && (
        <MoveRight
          size={icon}
          className="absolute right-3 opacity-0 translate-x-4 text-white transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-black"
        />
      )}
    </Button>
  )
}

export default MainCTA
