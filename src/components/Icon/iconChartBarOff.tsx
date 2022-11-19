import { Component, ComponentProps } from "solid-js";

export const IconChartBarOff: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="6" height="8" x="3" y="12" rx="1" />
    <path d="M12 8h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9M15 11V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1-1-1v-4M4 20h14M3 3l18 18" />
  </svg>
);
