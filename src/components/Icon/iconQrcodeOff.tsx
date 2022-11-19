import { Component, ComponentProps } from "solid-js";

export const IconQrcodeOff: Component<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4h1a1 1 0 0 1 1 1v1m-.297 3.711A.997.997 0 0 1 9 10H5a1 1 0 0 1-1-1V5c0-.275.11-.524.29-.705M7 17v.01" />
    <rect width="6" height="6" x="14" y="4" rx="1" />
    <path d="M7 7v.01" />
    <rect width="6" height="6" x="4" y="14" rx="1" />
    <path d="M17 7v.01M20 14v.01M14 14v3M14 20h3M3 3l18 18" />
  </svg>
);
