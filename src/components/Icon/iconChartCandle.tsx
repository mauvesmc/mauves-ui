import { Component, ComponentProps } from "solid-js";

export const IconChartCandle: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="4" height="5" x="4" y="6" rx="1" />
    <path d="M6 4v2M6 11v9" />
    <rect width="4" height="5" x="10" y="14" rx="1" />
    <path d="M12 4v10M12 19v1" />
    <rect width="4" height="6" x="16" y="5" rx="1" />
    <path d="M18 4v1M18 11v9" />
  </svg>
);
