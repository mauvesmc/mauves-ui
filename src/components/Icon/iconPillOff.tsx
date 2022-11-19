import { Component, ComponentProps } from "solid-js";

export const IconPillOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10.495 6.505 12.5 4.5a4.95 4.95 0 0 1 7 7l-1.998 1.998m-2 2L11.5 19.5a4.95 4.95 0 0 1-7-7l4-4M8.5 8.5l7 7M3 3l18 18" />
  </svg>
);
