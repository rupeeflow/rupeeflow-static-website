
import React from 'react'

interface RightArrowLogoProps {
  width?: number
  height?: number
  className?: string
}

export const RightArrowSVG: React.FC<RightArrowLogoProps> = ({
  width = 347,
  height = 219,
  className = ''
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15 28" fill="none" className={className}>
  <path d="M15 14L2.83784 28L0 24.7333L9.32432 14L0 3.26667L2.83784 -1.24046e-07L15 14Z" fill="url(#paint0_linear_168_123)"/>
  <defs>
    <linearGradient id="paint0_linear_168_123" x1="10.5748" y1="28" x2="-8.143" y2="9.69242" gradientUnits="userSpaceOnUse">
      <stop stop-color="#044141"/>
      <stop offset="1" stop-color="#13DE72"/>
    </linearGradient>
  </defs>
</svg>
  )
}
