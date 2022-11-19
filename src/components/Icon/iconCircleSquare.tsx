import { Component, ComponentProps } from "solid-js";

export const IconCircleSquare: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="9.5" cy="9.5" r="6.5" />
    <rect width="11" height="11" x="10" y="10" rx="2" />
  </svg>
);
