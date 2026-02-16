import * as React from "react";
import SVGComponent from "./SettingsIcon";
const BulkUploadIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    {...props}
  >
    <rect width={64} height={64} rx={15} fill="#30F3BC" />
    <rect x={15} y={22} width={13} height={10} rx={3} fill="#235065" />
    <rect x={15} y={36} width={13} height={10} rx={3} fill="#235065" />
    <rect x={31} y={18} width={18} height={14} rx={3} fill="#235065" />
    <rect x={31} y={36} width={13} height={10} rx={3} fill="#235065" />
  </svg>
);
export default BulkUploadIcon;
