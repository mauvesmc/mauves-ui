import { Component, ComponentProps } from "solid-js";

export const IconBrandYahoo: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 6h5M7 18h7M4.5 6l5.5 7v5M10 13l6-5M12.5 8h5M20 11v4M20 18v.01" />
  </svg>
);
