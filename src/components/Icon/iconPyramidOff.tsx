import { Component, ComponentProps } from "solid-js";

export const IconPyramidOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.483 8.471 3 17l9 4 6.22-2.764M21 17 12 3l-1.937 3.014M12 3v5m0 4v9M3 3l18 18" />
  </svg>
);
