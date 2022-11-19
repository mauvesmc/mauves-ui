import { Component, ComponentProps } from "solid-js";

export const IconRadarOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11.291 11.295A1 1 0 0 0 12 13v8c2.488 0 4.74-1.01 6.37-2.642m1.675-2.319A8.962 8.962 0 0 0 21 12h-5M15.999 8.998a5 5 0 0 0-5.063-1.88M8.47 8.465A5 5 0 0 0 9 16" />
    <path d="M20.486 8.995A9 9 0 0 0 7.961 3.963M5.644 5.638a9 9 0 0 0 3.36 14.852M3 3l18 18" />
  </svg>
);
