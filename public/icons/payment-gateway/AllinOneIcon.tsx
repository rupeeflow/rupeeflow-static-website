import * as React from "react";
const AllinOneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <rect width={48} height={48} rx={8} fill="#30F3BC" />
    <path
      d="M25 14L15 26H24L23 34L33 22H24L25 14Z"
      stroke="#235065"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default AllinOneIcon;
