import { Component, ComponentProps } from "solid-js";

export const IconChartInfographic: Component<ComponentProps<"svg">> = (
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
    <circle cx="7" cy="7" r="4" />
    <path d="M7 3v4h4M9 17v4M17 14v7M13 13v8M21 12v9" />
  </svg>
);
