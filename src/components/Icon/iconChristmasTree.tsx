import { Component, ComponentProps } from "solid-js";

export const IconChristmasTree: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 3 4 4-2 1 4 4-3 1 4 4H5l4-4-3-1 4-4-2-1zM14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3" />
  </svg>
);
