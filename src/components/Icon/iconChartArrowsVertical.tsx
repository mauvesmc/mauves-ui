import { Component, ComponentProps } from "solid-js";

export const IconChartArrowsVertical: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M18 21V7M9 15l3-3 3 3M15 10l3-3 3 3M3 21h18M12 21v-9M3 6l3-3 3 3M6 21V3" />
  </svg>
);
