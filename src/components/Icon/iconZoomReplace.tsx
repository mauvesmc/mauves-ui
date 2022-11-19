import { Component, ComponentProps } from "solid-js";

export const IconZoomReplace: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m21 21-6-6M3.291 8.003a7 7 0 0 1 5.077-4.806A7.021 7.021 0 0 1 16.61 7.6" />
    <path d="M17 4v4h-4M16.705 12.005a7 7 0 0 1-5.074 4.798A7.021 7.021 0 0 1 3.39 12.4" />
    <path d="M3 16v-4h4" />
  </svg>
);
