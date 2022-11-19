import { Component, ComponentProps } from "solid-js";

export const IconTemperatureFahrenheit: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <circle cx="6" cy="8" r="2" />
    <path d="M13 12h5M20 6h-6a1 1 0 0 0-1 1v11" />
  </svg>
);
