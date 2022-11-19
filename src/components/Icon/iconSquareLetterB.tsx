import { Component, ComponentProps } from "solid-js";

export const IconSquareLetterB: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="M10 16h2a2 2 0 1 0 0-4h-2 2a2 2 0 1 0 0-4h-2v8z" />
  </svg>
);
