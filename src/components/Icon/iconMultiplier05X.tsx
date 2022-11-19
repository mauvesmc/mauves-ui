import { Component, ComponentProps } from "solid-js";

export const IconMultiplier05X: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 16h2a2 2 0 1 0 0-4H8V8h4M5 16v.01M15 16l4-4M19 16l-4-4" />
  </svg>
);
