


import React from 'react'

interface ArrowImgProps {
  width?: number
  height?: number
  className?: string
}

export const ArrowImgsvg: React.FC<ArrowImgProps> = ({
  width = 347,
  height = 219,
  className = ''
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M2 22L22 2M22 2H2M22 2V22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}
