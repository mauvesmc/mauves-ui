import { Component, ComponentProps } from "solid-js";

export const IconChartDots2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 3v18h18" />
    <circle cx="9" cy="15" r="2" />
    <circle cx="13" cy="5" r="2" />
    <circle cx="18" cy="12" r="2" />
    <path d="m21 3-6 1.5M14.113 6.65l2.771 3.695M16 12.5l-5 2" />
  </svg>
);
