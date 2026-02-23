import * as React from "react";
const DeepTransactionData = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M33.2104 27.8901C32.5742 29.3946 31.5792 30.7203 30.3123 31.7514C29.0454 32.7825 27.5452 33.4875 25.9428 33.8049C24.3405 34.1222 22.6848 34.0422 21.1205 33.5719C19.5563 33.1015 18.131 32.2551 16.9694 31.1067C15.8078 29.9583 14.9452 28.5428 14.457 26.984C13.9689 25.4252 13.87 23.7706 14.169 22.1647C14.468 20.5589 15.1559 19.0507 16.1724 17.7721C17.189 16.4935 18.5033 15.4834 20.0004 14.8301"
      stroke="#235065"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34 24C34 22.6868 33.7413 21.3864 33.2388 20.1732C32.7362 18.9599 31.9997 17.8575 31.0711 16.9289C30.1425 16.0003 29.0401 15.2638 27.8268 14.7612C26.6136 14.2587 25.3132 14 24 14V24H34Z"
      stroke="#235065"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default DeepTransactionData;
