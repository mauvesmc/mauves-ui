import { Component, ComponentProps } from "solid-js";

export const IconStackPop: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 9.5 4 11l8 4 8-4-2.999-1.5M4 15l8 4 8-4M12 11V4M9 7l3-3 3 3" />
  </svg>
);
