import { Component, ComponentProps } from "solid-js";

export const IconUvIndex: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 12h1m16 0h1M5.6 5.6l.7.7m12.1-.7-.7.7M8 12a4 4 0 1 1 8 0M12 4V3M13 16l2 5h1l2-5M6 16v3a2 2 0 1 0 4 0v-3" />
  </svg>
);
