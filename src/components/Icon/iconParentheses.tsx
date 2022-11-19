import { Component, ComponentProps } from "solid-js";

export const IconParentheses: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 4a12.25 12.25 0 0 0 0 16M17 4a12.25 12.25 0 0 1 0 16" />
  </svg>
);
