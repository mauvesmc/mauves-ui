import { Component, ComponentProps } from "solid-js";

export const IconPlugOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m16.123 16.092-.177.177a5.81 5.81 0 1 1-8.215-8.215l.159-.159M4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M3 3l18 18" />
  </svg>
);
