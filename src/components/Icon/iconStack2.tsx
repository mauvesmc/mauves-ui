import { Component, ComponentProps } from "solid-js";

export const IconStack2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 4 4 8l8 4 8-4-8-4M4 12l8 4 8-4M4 16l8 4 8-4" />
  </svg>
);
