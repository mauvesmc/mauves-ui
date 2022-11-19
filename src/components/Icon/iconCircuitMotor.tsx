import { Component, ComponentProps } from "solid-js";

export const IconCircuitMotor: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="7" />
    <path d="M5 12H2M19 12h3M10 14v-4l2 2 2-2v4" />
  </svg>
);
