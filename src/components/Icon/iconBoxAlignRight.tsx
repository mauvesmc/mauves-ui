import { Component, ComponentProps } from "solid-js";

export const IconBoxAlignRight: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14.248 19.753v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5zM9.248 19.753h.01M4.247 19.753h.011M4.247 14.752h.011M4.247 8.752h.011M4.247 3.752h.011M9.248 3.752h.01" />
  </svg>
);
