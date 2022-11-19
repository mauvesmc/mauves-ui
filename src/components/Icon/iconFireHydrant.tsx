import { Component, ComponentProps } from "solid-js";

export const IconFireHydrant: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 21h14M17 21v-5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1V8A5 5 0 0 0 7 8v4H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v5" />
    <circle cx="12" cy="14" r="2" />
    <path d="M6 8h12" />
  </svg>
);
