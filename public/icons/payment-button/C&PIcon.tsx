import * as React from "react";
const CopyIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3358_1215)">
      <path
        d="M4 12C4 5.37258 9.37258 0 16 0H29C35.6274 0 41 5.37258 41 12V25C41 31.6274 35.6274 37 29 37H16C9.37258 37 4 31.6274 4 25V12Z"
        fill="url(#paint0_linear_3358_1215)"
      />
      <path
        d="M29.4844 27.5V13.4844H18.5156V27.5H29.4844ZM29.4844 11.5156C30.0156 11.5156 30.4844 11.7188 30.8906 12.125C31.2969 12.5 31.5 12.9531 31.5 13.4844V27.5C31.5 28.0312 31.2969 28.5 30.8906 28.9062C30.4844 29.3125 30.0156 29.5156 29.4844 29.5156H18.5156C17.9844 29.5156 17.5156 29.3125 17.1094 28.9062C16.7031 28.5 16.5 28.0312 16.5 27.5V13.4844C16.5 12.9531 16.7031 12.5 17.1094 12.125C17.5156 11.7188 17.9844 11.5156 18.5156 11.5156H29.4844ZM26.4844 7.48438V9.5H14.4844V23.5156H12.5156V9.5C12.5156 8.96875 12.7031 8.5 13.0781 8.09375C13.4844 7.6875 13.9531 7.48438 14.4844 7.48438H26.4844Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3358_1215"
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
          result="effect1_dropShadow_3358_1215"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3358_1215"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3358_1215"
        x1={22.5}
        y1={0}
        x2={22.5}
        y2={37}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#30F3BC" />
      </linearGradient>
    </defs>
  </svg>
);
export default CopyIcon;
