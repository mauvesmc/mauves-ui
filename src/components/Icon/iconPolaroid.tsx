import { Component, ComponentProps } from "solid-js";

export const IconPolaroid: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="M4 16h16M4 12l3-3c.928-.893 2.072-.893 3 0l4 4" />
    <path d="m13 12 2-2c.928-.893 2.072-.893 3 0l2 2M14 7h.01" />
  </svg>
);
