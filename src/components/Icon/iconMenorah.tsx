import { Component, ComponentProps } from "solid-js";

export const IconMenorah: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 4v16M8 4v2a4 4 0 1 0 8 0V4" />
    <path d="M4 4v2a8 8 0 1 0 16 0V4M10 20h4" />
  </svg>
);
