import { Component, ComponentProps } from "solid-js";

export const IconArrowsUpDown: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 3v18M10 6 7 3 4 6M20 18l-3 3-3-3M17 21V3" />
  </svg>
);
