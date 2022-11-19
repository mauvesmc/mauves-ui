import { Component, ComponentProps } from "solid-js";

export const IconAntennaOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 4v8M16 4.5v7M12 5v3m0 4v9M8 8v2.5M4 6v4M20 8h-8M8 8H4M3 3l18 18" />
  </svg>
);
