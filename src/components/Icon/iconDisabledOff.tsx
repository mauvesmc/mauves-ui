import { Component, ComponentProps } from "solid-js";

export const IconDisabledOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 7a2 2 0 1 0-2-2M11 11v4h4l4 5M15 11h1M7 11.5a5 5 0 1 0 6 7.5M3 3l18 18" />
  </svg>
);
