import { Component, ComponentProps } from "solid-js";

export const IconChartDots: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="9" cy="9" r="2" />
    <circle cx="19" cy="7" r="2" />
    <circle cx="14" cy="15" r="2" />
    <path d="m10.16 10.62 2.34 2.88M15.088 13.328l2.837-4.586" />
  </svg>
);
