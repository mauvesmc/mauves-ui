import { Component, ComponentProps } from "solid-js";

export const IconAccessibleOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m10 16.5 2-3 2 3m-2-3V12m2.627-1.376L15 10.5m-6 0 2.231.744" />
    <path d="M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73" />
    <path d="M12 8a.5.5 0 1 0-.5-.5M3 3l18 18" />
  </svg>
);
