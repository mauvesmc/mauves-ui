import { Component, ComponentProps } from "solid-js";

export const IconColumnsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 6h2M4 10h5.5M4 14h5.5M4 18h5.5M14.5 6H20M14.5 10H20M18 14h2M14.5 18H18M3 3l18 18" />
  </svg>
);
