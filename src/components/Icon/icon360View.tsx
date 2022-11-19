import { Component, ComponentProps } from "solid-js";

export const Icon360View: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3M3 5h2.5A1.5 1.5 0 0 1 7 6.5v1A1.5 1.5 0 0 1 5.5 9H4h1.5A1.5 1.5 0 0 1 7 10.5v1A1.5 1.5 0 0 1 5.5 13H3M17 7v4a2 2 0 1 0 4 0V7a2 2 0 1 0-4 0zM3 16c0 1.657 4.03 3 9 3s9-1.343 9-3" />
  </svg>
);
