import { Component, ComponentProps } from "solid-js";

export const IconCircuitCapacitorPolarized: Component<ComponentProps<"svg">> = (
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
    <path d="M22 12h-8M2 12h8M10 7v10M14 7v10M17 5h4M19 3v4" />
  </svg>
);
