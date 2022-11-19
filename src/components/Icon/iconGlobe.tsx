import { Component, ComponentProps } from "solid-js";

export const IconGlobe: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="10" r="4" />
    <path d="M6.75 16A8.015 8.015 0 1 0 16 3M12 18v4M8 22h8" />
  </svg>
);
