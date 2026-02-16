import * as React from "react";
const CrossCheckIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3510_948)">
      <rect
        x={4}
        width={50}
        height={50}
        rx={20}
        fill="#30F3BC"
        shapeRendering="crispEdges"
      />
      <path
        d="M29 16C33.9706 16 38 20.0294 38 25C38 29.9706 33.9706 34 29 34C24.0294 34 20 29.9706 20 25C20 20.0294 24.0294 16 29 16ZM33.6406 21.2314C33.2164 20.8779 32.585 20.9352 32.2314 21.3594L28.6338 25.6777C28.2873 26.0935 28.0921 26.3233 27.9365 26.4648C27.9347 26.4665 27.9325 26.4681 27.9307 26.4697C27.9287 26.4683 27.9259 26.4673 27.9238 26.4658C27.7561 26.3389 27.541 26.1269 27.1582 25.7441L25.707 24.293C25.3165 23.9024 24.6835 23.9024 24.293 24.293C23.9024 24.6835 23.9024 25.3165 24.293 25.707L25.7441 27.1582C26.0853 27.4993 26.4134 27.8313 26.7178 28.0615C27.0043 28.2781 27.3686 28.4835 27.8232 28.5146L28.0234 28.5166L28.2227 28.4961C28.6726 28.4239 29.0165 28.186 29.2822 27.9443C29.5644 27.6876 29.8612 27.3284 30.1699 26.958L33.7686 22.6406C34.1221 22.2164 34.0648 21.585 33.6406 21.2314Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3510_948"
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
          result="effect1_dropShadow_3510_948"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3510_948"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default CrossCheckIcon;
