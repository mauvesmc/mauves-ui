import { Component, ComponentProps } from "solid-js";

export const IconAbacus: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 3v18M19 21V3M5 7h14M5 15h14M8 13v4M11 13v4M16 13v4M14 5v4M11 5v4M8 5v4M3 21h18" />
  </svg>
);
