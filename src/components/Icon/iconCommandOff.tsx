import { Component, ComponentProps } from "solid-js";

export const IconCommandOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 9v8a2 2 0 1 1-2-2h8m3.411 3.417A2 2 0 0 1 15 17v-2m0-4V7a2 2 0 1 1 2 2h-4M9 9H7a2 2 0 0 1-1.417-3.411M3 3l18 18" />
  </svg>
);
