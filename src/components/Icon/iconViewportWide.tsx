import { Component, ComponentProps } from "solid-js";

export const IconViewportWide: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 12H3l3-3m0 6-3-3M14 12h7l-3-3m0 6 3-3M3 6V3h18v3M3 18v3h18v-3" />
  </svg>
);
