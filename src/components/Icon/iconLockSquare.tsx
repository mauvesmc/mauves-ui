import { Component, ComponentProps } from "solid-js";

export const IconLockSquare: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="8" height="5" x="8" y="11" rx="1" />
    <path d="M10 11V9a2 2 0 1 1 4 0v2" />
    <rect width="16" height="16" x="4" y="4" rx="2" />
  </svg>
);
