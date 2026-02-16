import * as React from "react";
const InvoicingIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={63}
    viewBox="0 0 60 63"
    fill="none"
    {...props}
  >
    <rect width={60} height={60} fill="white" />
    <path d="M22.5 42.5V27.5L17.5 32.5" fill="white" />
    <path
      d="M22.5 42.5V27.5L17.5 32.5"
      stroke="#171717"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 27.5L27.5 32.5"
      stroke="#171717"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g filter="url(#filter0_d_3468_814)">
      <path
        d="M55 25V37.5C55 50 50 55 37.5 55H22.5C10 55 5 50 5 37.5V22.5C5 10 10 5 22.5 5H35"
        fill="#30F3BC"
      />
    </g>
    <path d="M55 25H45C37.5 25 35 22.5 35 15V5L55 25Z" fill="#235065" />
    <defs>
      <filter
        id="filter0_d_3468_814"
        x={1}
        y={5}
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
          result="effect1_dropShadow_3468_814"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3468_814"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default InvoicingIcon;
