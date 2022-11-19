import { Component, ComponentProps } from "solid-js";

export const IconTypographyOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 20h3M14 20h6M6.9 15h6.9M13 13l3 7M5 20 9.09 9.094M10.181 6.183 11 4h2l3.904 8.924M3 3l18 18" />
  </svg>
);
