import * as React from "react";
const FitsIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3358_1248)">
      <path
        d="M4 12C4 5.37258 9.37258 0 16 0H29C35.6274 0 41 5.37258 41 12V25C41 31.6274 35.6274 37 29 37H16C9.37258 37 4 31.6274 4 25V12Z"
        fill="#30F3BC"
      />
      <path
        d="M32.4844 23.5156V16.4844H28.5V23.5156H32.4844ZM33.5156 14.5156C33.7969 14.5156 34.0312 14.6094 34.2188 14.7969C34.4062 14.9844 34.5 15.2188 34.5 15.5V25.4844C34.5 25.7656 34.4062 26.0156 34.2188 26.2344C34.0312 26.4219 33.7969 26.5156 33.5156 26.5156H27.5156C27.2344 26.5156 26.9844 26.4219 26.7656 26.2344C26.5781 26.0156 26.4844 25.7656 26.4844 25.4844V15.5C26.4844 15.2188 26.5781 14.9844 26.7656 14.7969C26.9844 14.6094 27.2344 14.5156 27.5156 14.5156H33.5156ZM14.4844 12.5V23.5156H24.5156V26.5156H10.5V23.5156H12.5156V12.5C12.5156 11.9688 12.7031 11.5 13.0781 11.0938C13.4844 10.6875 13.9531 10.4844 14.4844 10.4844H32.4844V12.5H14.4844Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3358_1248"
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
          result="effect1_dropShadow_3358_1248"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3358_1248"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default FitsIcon;
