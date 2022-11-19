import { Component, ComponentProps } from "solid-js";

export const IconSTurnLeft: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    <path d="M17 5H7.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7H3" />
    <path d="m6 16-3 3 3 3" />
  </svg>
);
