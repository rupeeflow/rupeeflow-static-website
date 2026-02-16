import * as React from "react";
const FilesIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={70}
    viewBox="0 0 68 70"
    fill="none"
    {...props}
  >
    <rect width={57} height={65} transform="translate(7 1)" fill="white" />
    <path d="M28.375 47.042V30.792L23.625 36.2087" fill="white" />
    <path
      d="M28.375 47.042V30.792L23.625 36.2087"
      stroke="#171717"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.375 30.792L33.125 36.2087"
      stroke="#171717"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g filter="url(#filter0_d_3530_796)">
      <path
        d="M59.25 28.0837V41.6253C59.25 55.167 54.5 60.5837 42.625 60.5837H28.375C16.5 60.5837 11.75 55.167 11.75 41.6253V25.3753C11.75 11.8337 16.5 6.41699 28.375 6.41699H40.25"
        fill="#029789"
      />
    </g>
    <path
      d="M59.25 28.0837H49.75C42.625 28.0837 40.25 25.3753 40.25 17.2503V6.41699L59.25 28.0837Z"
      fill="white"
      stroke="#029789"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={22} y={33} width={23} height={6} rx={1} fill="white" />
    <rect x={22} y={45} width={26} height={6} rx={1} fill="white" />
    <defs>
      <filter
        id="filter0_d_3530_796"
        x={7.75}
        y={6.41699}
        width={55.5}
        height={62.167}
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
          result="effect1_dropShadow_3530_796"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3530_796"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default FilesIcon;
