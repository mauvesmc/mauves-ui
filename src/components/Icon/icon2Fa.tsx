import { Component, ComponentProps } from "solid-js";

export const Icon2Fa: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 16H3l3.47-4.66A2 2 0 1 0 3 9.8M10 16V8h4M10 12h3M17 16v-6a2 2 0 0 1 4 0v6M17 13h4" />
  </svg>
);
