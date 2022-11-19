import { Component, ComponentProps } from "solid-js";

export const IconEyeglassOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5.536 5.546 3 14M16 4h2l3 10M10 16h4M19.426 19.423A3.5 3.5 0 0 1 14 16.5V14m4 0h3v2.5c0 .157-.01.312-.03.463M10 16.5a3.5 3.5 0 0 1-7 0V14h7v2.5M3 3l18 18" />
  </svg>
);
