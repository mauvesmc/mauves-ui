import { Component, ComponentProps } from "solid-js";

export const IconToolsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m16 12 4-4a2.828 2.828 0 1 0-4-4l-4 4m-2 2-7 7v4h4l7-7M14.5 5.5l4 4" />
    <path d="M12 8 7 3M4.996 5.004 3 7l5 5M7 8 5.5 9.5M16 12l5 5m-2 2-2 2-5-5M16 17l-1.5 1.5M3 3l18 18" />
  </svg>
);
