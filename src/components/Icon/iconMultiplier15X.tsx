import { Component, ComponentProps } from "solid-js";

export const IconMultiplier15X: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 16V8l-2 2M10 16h2a2 2 0 1 0 0-4h-2V8h4M7 16v.01M17 16l4-4M21 16l-4-4" />
  </svg>
);
