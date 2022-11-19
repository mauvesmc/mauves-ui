import { Component, ComponentProps } from "solid-js";

export const IconTerminal2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m8 9 3 3-3 3M13 15h3" />
    <rect width="18" height="16" x="3" y="4" rx="2" />
  </svg>
);
