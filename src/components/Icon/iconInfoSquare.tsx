import { Component, ComponentProps } from "solid-js";

export const IconInfoSquare: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 8h.01" />
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="M11 12h1v4h1" />
  </svg>
);