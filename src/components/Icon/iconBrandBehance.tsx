import { Component, ComponentProps } from "solid-js";

export const IconBrandBehance: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 18V6h4.5a3 3 0 0 1 0 6 3 3 0 0 1 0 6H3M3 12h4.5M14 13h7a3.5 3.5 0 0 0-7 0v2a3.5 3.5 0 0 0 6.64 1M16 6h3" />
  </svg>
);
