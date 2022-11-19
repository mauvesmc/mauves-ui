import { Component, ComponentProps } from "solid-js";

export const IconCircuitBulb: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M2 12h5M17 12h5" />
    <circle cx="12" cy="12" r="5" />
    <path d="m8.5 8.5 7 7M15.5 8.5l-7 7" />
  </svg>
);
