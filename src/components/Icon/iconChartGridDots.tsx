import { Component, ComponentProps } from "solid-js";

export const IconChartGridDots: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="18" cy="6" r="2" />
    <circle cx="6" cy="12" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M8 18h8M18 20v1M18 3v1M6 20v1M6 10V3M12 3v18M18 8v8M8 12h13M21 6h-1M16 6H3M3 12h1M20 18h1M3 18h1M6 14v2" />
  </svg>
);
