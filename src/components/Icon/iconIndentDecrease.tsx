import { Component, ComponentProps } from "solid-js";

export const IconIndentDecrease: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 6h-7M20 12h-9M20 18h-7M8 8l-4 4 4 4" />
  </svg>
);
