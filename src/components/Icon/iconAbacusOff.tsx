import { Component, ComponentProps } from "solid-js";

export const IconAbacusOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 5v16M19 21v-2m0-4V3M5 7h2m4 0h8M5 15h10M8 13v4M11 13v4M16 16v1M14 5v4M11 5v2M8 8v1M3 21h18M3 3l18 18" />
  </svg>
);
