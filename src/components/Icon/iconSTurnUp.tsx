import { Component, ComponentProps } from "solid-js";

export const IconSTurnUp: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
    <path d="M5 17V7.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0V3" />
    <path d="m16 6 3-3 3 3" />
  </svg>
);
