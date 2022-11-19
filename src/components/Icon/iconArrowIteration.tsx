import { Component, ComponentProps } from "solid-js";

export const IconArrowIteration: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.5 16A5.5 5.5 0 1 0 3 10.5v.5M3 16h18M18 13l3 3-3 3" />
  </svg>
);
