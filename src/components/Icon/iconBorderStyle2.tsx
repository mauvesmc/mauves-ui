import { Component, ComponentProps } from "solid-js";

export const IconBorderStyle2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 18v.01M8 18v.01M12 18v.01M16 18v.01M20 18v.01M18 12h2M11 12h2M4 12h2M4 6h16" />
  </svg>
);
