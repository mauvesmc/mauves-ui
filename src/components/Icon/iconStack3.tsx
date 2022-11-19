import { Component, ComponentProps } from "solid-js";

export const IconStack3: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 2 4 6l8 4 8-4-8-4M4 10l8 4 8-4M4 18l8 4 8-4M4 14l8 4 8-4" />
  </svg>
);
