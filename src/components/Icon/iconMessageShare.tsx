import { Component, ComponentProps } from "solid-js";

export const IconMessageShare: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 11v3a3 3 0 0 1-3 3H8l-4 4V8a3 3 0 0 1 3-3h7M17 4h4v4M16 9l5-5" />
  </svg>
);
