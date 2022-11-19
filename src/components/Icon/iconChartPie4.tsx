import { Component, ComponentProps } from "solid-js";

export const IconChartPie4: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 12-6.5 5.5M12 3v9h9" />
    <circle cx="12" cy="12" r="9" />
    <path d="m12 12 5 7.5" />
  </svg>
);
