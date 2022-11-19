import { Component, ComponentProps } from "solid-js";

export const IconChartBar: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="6" height="12" x="9" y="8" rx="1" />
    <rect width="6" height="16" x="15" y="4" rx="1" />
    <path d="M4 20h14" />
  </svg>
);
