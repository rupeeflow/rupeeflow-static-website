import * as React from "react";
const DonateButtonIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    viewBox="0 0 72 72"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3345_675)">
      <path
        d="M4 31.9975C4 14.3258 18.3258 0 35.9975 0C53.6693 0 67.9951 14.3258 67.9951 31.9975C67.9951 49.6693 53.6693 63.9951 35.9975 63.9951C18.3258 63.9951 4 49.6693 4 31.9975Z"
        fill="#30F3BC"
      />
      <path
        d="M35.9976 43.6572L34.1812 42.0166C32.1108 40.1416 30.6069 38.7549 29.6694 37.8564C28.7319 36.958 27.6772 35.8447 26.5054 34.5166C25.3726 33.1885 24.5913 31.9971 24.1616 30.9424C23.7319 29.8486 23.5171 28.7354 23.5171 27.6025C23.5171 25.6885 24.1616 24.0674 25.4507 22.7393C26.7788 21.4111 28.4194 20.7471 30.3726 20.7471C32.6382 20.7471 34.5132 21.626 35.9976 23.3838C37.4819 21.626 39.3569 20.7471 41.6226 20.7471C43.5757 20.7471 45.1968 21.4111 46.4858 22.7393C47.814 24.0674 48.478 25.6885 48.478 27.6025C48.478 29.126 47.9702 30.708 46.9546 32.3486C45.939 33.9893 44.8257 35.415 43.6147 36.626C42.4429 37.8369 40.5093 39.6533 37.814 42.0752L35.9976 43.6572Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3345_675"
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
          result="effect1_dropShadow_3345_675"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3345_675"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default DonateButtonIcon;
