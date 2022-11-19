import { Component, ComponentProps } from "solid-js";

export const IconCursorText: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 12h4M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3M15 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3" />
  </svg>
);
