import { Component, ComponentProps } from "solid-js";

export const IconTemperatureOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 10v3.5a4 4 0 1 0 5.836 2.33M14 10V5a2 2 0 1 0-4 0v1M13 9h1M3 3l18 18" />
  </svg>
);
