import * as React from "react";
const SafeAndSecureIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_3358_1259)">
      <path
        d="M4 12C4 5.37258 9.37258 0 16 0H29C35.6274 0 41 5.37258 41 12V25C41 31.6274 35.6274 37 29 37H16C9.37258 37 4 31.6274 4 25V12Z"
        fill="#30F3BC"
      />
      <path
        d="M20.4844 23.5156L28.5 15.5L27.0938 14.0938L20.4844 20.6562L17.9062 18.0781L16.5 19.4844L20.4844 23.5156ZM22.5 7.48438L31.5 11.5156V17.5156C31.5 20.2969 30.6406 22.8438 28.9219 25.1562C27.2031 27.4375 25.0625 28.8906 22.5 29.5156C19.9375 28.8906 17.7969 27.4375 16.0781 25.1562C14.3594 22.8438 13.5 20.2969 13.5 17.5156V11.5156L22.5 7.48438Z"
        fill="#235065"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3358_1259"
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
          result="effect1_dropShadow_3358_1259"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3358_1259"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SafeAndSecureIcon;
