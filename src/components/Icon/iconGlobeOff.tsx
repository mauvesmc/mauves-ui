import { Component, ComponentProps } from "solid-js";

export const IconGlobeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.36 8.339a4 4 0 0 0 5.281 5.31m1.995-1.98a4 4 0 0 0-5.262-5.325M6.75 16a8.015 8.015 0 0 0 9.799.553m2.016-1.998A8.015 8.015 0 0 0 16 3M12 18v4M8 22h8M3 3l18 18" />
  </svg>
);
