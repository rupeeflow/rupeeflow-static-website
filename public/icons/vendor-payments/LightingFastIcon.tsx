import * as React from "react";
const LightingFastIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3510_809)">
      <path
        d="M4 12C4 5.37258 9.37258 0 16 0H39.9963C46.6237 0 51.9963 5.37258 51.9963 12V35.9963C51.9963 42.6237 46.6237 47.9963 39.9963 47.9963H16C9.37258 47.9963 4 42.6237 4 35.9963V12Z"
        fill="#30F3BC"
      />
      <path
        d="M27.1855 35.998H25.8105L27.1855 26.6855H22.498C21.8314 26.6855 21.6647 26.3939 21.998 25.8105C22.123 25.6022 22.1439 25.5397 22.0605 25.623C24.1855 21.9147 26.7689 17.373 29.8105 11.998H31.1855L29.8105 21.3105H34.498C35.0814 21.3105 35.2689 21.6022 35.0605 22.1855L27.1855 35.998Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3510_809"
        x={0}
        y={0}
        width={55.9961}
        height={55.9961}
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
          result="effect1_dropShadow_3510_809"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3510_809"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default LightingFastIcon;
