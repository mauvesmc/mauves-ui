import { Component, ComponentProps } from "solid-js";

export const IconCurling: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="10" x="4" y="9" rx="4" />
    <path d="M4 14h16M8 5h6a2 2 0 0 1 2 2v2" />
  </svg>
);
