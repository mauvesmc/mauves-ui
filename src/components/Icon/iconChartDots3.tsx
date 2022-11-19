import { Component, ComponentProps } from "solid-js";

export const IconChartDots3: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="5" cy="7" r="2" />
    <circle cx="16" cy="15" r="2" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="m9 17 5-1.5M6.5 8.5l7.81 5.37M7 7l8-1" />
  </svg>
);
