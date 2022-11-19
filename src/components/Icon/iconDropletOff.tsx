import { Component, ComponentProps } from "solid-js";

export const IconDropletOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m8.454 8.458-1.653 2.545a6 6 0 0 0 10.32 6.123M18 14a5.971 5.971 0 0 0-.803-3L12 3l-1.968 3.03M3 3l18 18" />
  </svg>
);
