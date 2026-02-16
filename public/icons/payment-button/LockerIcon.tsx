import * as React from "react";
const LockerIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8"
      stroke="#222222"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M15 7C17.8284 7 19.2424 7.00023 20.1211 7.87891C20.9998 8.75759 21 10.1716 21 13V14C21 17.7712 20.9997 19.6566 19.8281 20.8281C18.6566 21.9997 16.7712 22 13 22H11C7.22876 22 5.34345 21.9997 4.17188 20.8281C3.0003 19.6566 3 17.7712 3 14V13C3 10.1716 3.00023 8.75759 3.87891 7.87891C4.75759 7.00023 6.17157 7 9 7H15ZM12 11C10.3431 11 9 12.3431 9 14C9 15.3057 9.83548 16.413 11 16.8252V19H13V16.8252C14.1645 16.413 15 15.3057 15 14C15 12.3431 13.6569 11 12 11ZM12 13C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13Z"
      fill="url(#paint0_linear_3571_770)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3571_770"
        x1={0.115385}
        y1={14.5472}
        x2={22.7649}
        y2={13.8794}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#054C38" />
        <stop offset={1} stopColor="#2AB871" />
      </linearGradient>
    </defs>
  </svg>
);
export default LockerIcon;
