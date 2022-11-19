import { Component, ComponentProps } from "solid-js";

export const IconZip: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 16V8h2a2 2 0 1 1 0 4h-2M12 8v8M4 8h4l-4 8h4" />
  </svg>
);