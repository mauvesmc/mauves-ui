import { Component, ComponentProps } from "solid-js";

export const IconWheelchairOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="8" cy="16" r="5" />
    <path d="M17.582 17.59a2 2 0 0 0 2.833 2.824M14 14h-1.4M6 6v5M6 8h2m4 0h5M15 8v3M3 3l18 18" />
  </svg>
);
