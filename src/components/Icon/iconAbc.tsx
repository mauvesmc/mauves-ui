import { Component, ComponentProps } from "solid-js";

export const IconAbc: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 16v-6a2 2 0 1 1 4 0v6M3 13h4M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0-4 0v1M20.732 12A2 2 0 0 0 17 13v1a2 2 0 0 0 3.726 1.01" />
  </svg>
);
