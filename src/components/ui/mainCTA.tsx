import Link from 'next/link'
import { MoveRight } from 'lucide-react'

interface ctaProps {
  label: string
  destination: string
  size?: string
  fontSize?: string
  bullet?: string
  icon?: number
}

const MainCTA: React.FC<ctaProps> = ({
  label,
  destination,
  size = 'w-56 h-10',
  fontSize = 'text-[1.28rem]',
  bullet = 'w-3 h-3',
  icon = 40,
}) => {
  return (
    <Link
      href={destination}
      target="blank"
      className={`${size}  group z-20 flex relative overflow-hidden bg-black-emerald px-2 rounded-[100vw] justify-center items-center  hover:border-white/90 border-2 border-white/10  hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] transition duration-300 ease-in-out `}
    >
      <div
        aria-hidden="true"
        className={` ${bullet} absolute z-0 left-[10%]  rounded-full bg-teal-emerald group-hover:w-[150%] group-hover:h-[150%] group-hover:-translate-x-20 transition-all duration-400 ease-in-out`}
      ></div>{' '}
      <span
        className={`${fontSize} z-5 fontcaps translate-x-1 text-accent-foreground group-hover:text-foreground group-hover:-translate-x-[20%] transition-all duration-300 ease-in-out`}
      >
        {label}
      </span>
      <MoveRight
        size={icon}
        className="absolute right-[8%] -translate-x-10 opacity-0 group-hover:opacity-100 text-accent-foreground group-hover:text-foreground  group-hover:translate-x-0 transition-all duration-350 ease-in-out"
      />
    </Link>
  )
}

export default MainCTA
