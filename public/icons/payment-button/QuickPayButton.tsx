import * as React from "react";
const QuickPayButtonIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    viewBox="0 0 72 72"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3345_659)">
      <path
        d="M4 31.9975C4 14.3258 18.3258 0 35.9975 0C53.6693 0 67.9951 14.3258 67.9951 31.9975C67.9951 49.6693 53.6693 63.9951 35.9975 63.9951C18.3258 63.9951 4 49.6693 4 31.9975Z"
        fill="#30F3BC"
      />
      <path
        d="M34.7671 43.2471H33.478L34.7671 34.5166H30.3726C29.7476 34.5166 29.5913 34.2432 29.9038 33.6963C30.021 33.501 30.0405 33.4424 29.9624 33.5205C31.9546 30.0439 34.3765 25.7861 37.228 20.7471H38.5171L37.228 29.4775H41.6226C42.1694 29.4775 42.3452 29.751 42.1499 30.2979L34.7671 43.2471Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3345_659"
        x={0}
        y={0}
        width={71.9951}
        height={71.9951}
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
          result="effect1_dropShadow_3345_659"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3345_659"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default QuickPayButtonIcon;
