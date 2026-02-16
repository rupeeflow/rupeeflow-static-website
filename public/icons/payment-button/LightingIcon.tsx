import * as React from "react";
const LightingIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3358_1204)">
      <path
        d="M4 12C4 5.37258 9.37258 0 16 0H29C35.6274 0 41 5.37258 41 12V25C41 31.6274 35.6274 37 29 37H16C9.37258 37 4 31.6274 4 25V12Z"
        fill="white"
      />
      <path
        d="M16 1.5H29C34.799 1.5 39.5 6.20101 39.5 12V25C39.5 30.799 34.799 35.5 29 35.5H16C10.201 35.5 5.5 30.799 5.5 25V12C5.5 6.20101 10.201 1.5 16 1.5Z"
        stroke="#029789"
        strokeWidth={3}
      />
      <path
        d="M21.6875 30.5H20.3125L21.6875 21.1875H17C16.3333 21.1875 16.1667 20.8958 16.5 20.3125C16.625 20.1042 16.6458 20.0417 16.5625 20.125C18.6875 16.4167 21.2708 11.875 24.3125 6.5H25.6875L24.3125 15.8125H29C29.5833 15.8125 29.7708 16.1042 29.5625 16.6875L21.6875 30.5Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3358_1204"
        x={0}
        y={0}
        width={45}
        height={45}
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
          result="effect1_dropShadow_3358_1204"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3358_1204"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default LightingIcon;
