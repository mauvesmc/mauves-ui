import { Component, ComponentProps } from "solid-js";

export const IconChartArrows: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 18h14M9 9l3 3-3 3M14 15l3 3-3 3M3 3v18M3 12h9M18 3l3 3-3 3M3 6h18" />
  </svg>
);
