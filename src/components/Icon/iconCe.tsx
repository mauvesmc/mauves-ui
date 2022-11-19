import { Component, ComponentProps } from "solid-js";

export const IconCe: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 4a8 8 0 1 0 0 16M20 4a8 8 0 1 0 0 16M12 12h8" />
  </svg>
);
