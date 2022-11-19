import { Component, ComponentProps } from "solid-js";

export const IconTorii: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 4c5.333 1.333 10.667 1.333 16 0M4 8h16M12 5v3M18 4.5V20M6 4.5V20" />
  </svg>
);
