import { Component, ComponentProps } from "solid-js";

export const IconSubtask: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 9h6M4 5h4M6 5v11a1 1 0 0 0 1 1h5" />
    <rect width="8" height="4" x="12" y="7" rx="1" />
    <rect width="8" height="4" x="12" y="15" rx="1" />
  </svg>
);
