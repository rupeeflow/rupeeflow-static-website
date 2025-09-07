


import React from 'react'

interface SquareImgProps {
  width?: number
  height?: number
  className?: string
}

export const SquareImgsvg: React.FC<SquareImgProps> = ({
  width = 347,
  height = 219,
  className = ''
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none" className={className}>
    <rect x="-1" y="8.63184" width="13.6215" height="13.6215" rx="3" transform="rotate(-45 -1 8.63184)" fill="url(#paint0_linear_199_36)"/>
    <defs>
      <linearGradient id="paint0_linear_199_36" x1="-1.37946" y1="21.1287" x2="14.2576" y2="15.6172" gradientUnits="userSpaceOnUse">
        <stop stop-color="#53BEC2"/>
        <stop offset="1" stop-color="#00EF64"/>
      </linearGradient>
    </defs>
  </svg>
  )
}
