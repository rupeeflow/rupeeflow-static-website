import * as React from "react";
const WebIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3510_919)">
      <rect
        x={4}
        width={50}
        height={50}
        rx={20}
        fill="#30F3BC"
        shapeRendering="crispEdges"
      />
      <circle cx={28.5} cy={26} r={8} stroke="#235065" />
      <ellipse cx={28.5} cy={26} rx={3} ry={8} stroke="#235065" />
      <path d="M20.5 26H36.5" stroke="#235065" strokeLinecap="round" />
    </g>
    <defs>
      <filter
        id="filter0_d_3510_919"
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
          result="effect1_dropShadow_3510_919"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3510_919"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default WebIcon;
