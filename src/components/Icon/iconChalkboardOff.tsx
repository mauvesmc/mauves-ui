import { Component, ComponentProps } from "solid-js";

export const IconChalkboardOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m4 0h10a2 2 0 0 1 2 2v10M17 17v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4M3 3l18 18" />
  </svg>
);
