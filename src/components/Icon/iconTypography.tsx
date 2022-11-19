import { Component, ComponentProps } from "solid-js";

export const IconTypography: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 20h3M14 20h7M6.9 15h6.9M10.2 6.3 16 20M5 20l6-16h2l7 16" />
  </svg>
);
