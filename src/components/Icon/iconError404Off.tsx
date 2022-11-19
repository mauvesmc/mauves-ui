import { Component, ComponentProps } from "solid-js";

export const IconError404Off: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 7v4a1 1 0 0 0 1 1h3M7 7v10M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2m0-4V8a1 1 0 0 0-1-1h-2M17 7v4a1 1 0 0 0 1 1h3M21 7v10M3 3l18 18" />
  </svg>
);
