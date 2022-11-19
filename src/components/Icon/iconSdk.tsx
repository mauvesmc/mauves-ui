import { Component, ComponentProps } from "solid-js";

export const IconSdk: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3M17 8v8M21 8l-3 4 3 4M17 12h1M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2z" />
  </svg>
);
