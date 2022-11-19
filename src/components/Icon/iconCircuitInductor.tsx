import { Component, ComponentProps } from "solid-js";

export const IconCircuitInductor: Component<ComponentProps<"svg">> = (
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
    <path d="M2 14h3v-2a2 2 0 1 1 4 0v2-1.5a2.5 2.5 0 1 1 5 0V14v-1.5a2.5 2.5 0 1 1 5 0V14h3" />
  </svg>
);
