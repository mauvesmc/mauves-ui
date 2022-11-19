import { Component, ComponentProps } from "solid-js";

export const IconCornerLeftDown: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18 6h-6a3 3 0 0 0-3 3v10l-4-4m8 0-4 4" />
  </svg>
);
