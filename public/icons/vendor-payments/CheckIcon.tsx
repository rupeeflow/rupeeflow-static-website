import * as React from "react";
const CheckIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3468_763)">
      <rect x={4} width={50} height={50} rx={4} fill="#30F3BC" />
      <path
        d="M20.6665 23.6845L25.9372 34.2108L37.3332 13.1582"
        stroke="#235065"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3468_763"
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
          result="effect1_dropShadow_3468_763"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3468_763"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default CheckIcon;
