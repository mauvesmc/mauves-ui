import { Component, ComponentProps } from "solid-js";

export const IconViewportNarrow: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 12h7L7 9m0 6 3-3M21 12h-7l3-3m0 6-3-3M9 6V3h6v3M9 18v3h6v-3" />
  </svg>
);
