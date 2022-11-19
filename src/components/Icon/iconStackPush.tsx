import { Component, ComponentProps } from "solid-js";

export const IconStackPush: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m6 10-2 1 8 4 8-4-2-1M4 15l8 4 8-4M12 4v7" />
    <path d="m15 8-3 3-3-3" />
  </svg>
);
