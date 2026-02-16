import * as React from "react";
const SecurityIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3510_1008)">
      <rect
        x={4}
        width={50}
        height={50}
        rx={20}
        fill="#30F3BC"
        shapeRendering="crispEdges"
      />
      <path
        d="M33 21V20C33 17.7909 31.2091 16 29 16C26.7909 16 25 17.7909 25 20V21"
        stroke="#222222"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M32 20C34.8284 20 36.2424 20.0002 37.1211 20.8789C37.9998 21.7576 38 23.1716 38 26V27C38 30.7712 37.9997 32.6566 36.8281 33.8281C35.6566 34.9997 33.7712 35 30 35H28C24.2288 35 22.3434 34.9997 21.1719 33.8281C20.0003 32.6566 20 30.7712 20 27V26C20 23.1716 20.0002 21.7576 20.8789 20.8789C21.7576 20.0002 23.1716 20 26 20H32ZM29 24C27.3431 24 26 25.3431 26 27C26 28.3057 26.8355 29.413 28 29.8252V32H30V29.8252C31.1645 29.413 32 28.3057 32 27C32 25.3431 30.6569 24 29 24ZM29 26C29.5523 26 30 26.4477 30 27C30 27.5523 29.5523 28 29 28C28.4477 28 28 27.5523 28 27C28 26.4477 28.4477 26 29 26Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3510_1008"
        x={0}
        y={0}
        width={58}
        height={58}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3510_1008"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3510_1008"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SecurityIcon;
