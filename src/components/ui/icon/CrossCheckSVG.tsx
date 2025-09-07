

import React from 'react'

interface CrossCheckLogoProps {
  width?: number
  height?: number
  className?: string
}

export const CrossCheckSVG: React.FC<CrossCheckLogoProps> = ({
  width = 347,
  height = 219,
  className = ''
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="12" fill="url(#paint0_linear_199_39)"/>
    <path d="M17.5999 8L13.7499 12L9.8999 16L6.3999 12.3636" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_199_39" x1="0" y1="12" x2="15.6129" y2="27.0042" gradientUnits="userSpaceOnUse">
    <stop stop-color="#044141"/>
    <stop offset="1" stop-color="#13DE68"/>
    </linearGradient>
    </defs>
    </svg>
  )
}
