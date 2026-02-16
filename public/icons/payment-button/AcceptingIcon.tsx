import * as React from "react";
const AcceptingIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3358_1226)">
      <path
        d="M4 12C4 5.37258 9.37258 0 16 0H29C35.6274 0 41 5.37258 41 12V25C41 31.6274 35.6274 37 29 37H16C9.37258 37 4 31.6274 4 25V12Z"
        fill="url(#paint0_linear_3358_1226)"
      />
      <path
        d="M29.4844 20.5156C29.4844 21.0469 29.2812 21.5156 28.875 21.9219C28.5 22.2969 28.0469 22.4844 27.5156 22.4844H13.5C12.9375 22.4844 12.4531 22.2969 12.0469 21.9219C11.6719 21.5156 11.4844 21.0469 11.4844 20.5156V12.5C11.4844 11.9375 11.6719 11.4688 12.0469 11.0938C12.4531 10.6875 12.9375 10.4844 13.5 10.4844H27.5156C28.0469 10.4844 28.5 10.6875 28.875 11.0938C29.2812 11.4688 29.4844 11.9375 29.4844 12.5V20.5156ZM20.4844 19.4844C21.0469 19.4844 21.5469 19.3594 21.9844 19.1094C22.4531 18.8281 22.8125 18.4688 23.0625 18.0312C23.3438 17.5625 23.4844 17.0469 23.4844 16.4844C23.4844 15.9531 23.3438 15.4688 23.0625 15.0312C22.8125 14.5625 22.4531 14.1875 21.9844 13.9062C21.5469 13.625 21.0469 13.4844 20.4844 13.4844C19.9531 13.4844 19.4531 13.625 18.9844 13.9062C18.5469 14.1875 18.1875 14.5625 17.9062 15.0312C17.625 15.4688 17.4844 15.9531 17.4844 16.4844C17.4844 17.0469 17.625 17.5625 17.9062 18.0312C18.1875 18.4688 18.5469 18.8281 18.9844 19.1094C19.4531 19.3594 19.9531 19.4844 20.4844 19.4844ZM33.5156 13.4844H31.5V24.5H14.4844V26.5156H31.5C32.0625 26.5156 32.5312 26.3281 32.9062 25.9531C33.3125 25.5469 33.5156 25.0625 33.5156 24.5V13.4844Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3358_1226"
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
          result="effect1_dropShadow_3358_1226"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3358_1226"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3358_1226"
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
export default AcceptingIcon;
