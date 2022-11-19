import { Component, ComponentProps } from "solid-js";

export const IconTemplate: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="4" x="4" y="4" rx="1" />
    <rect width="6" height="8" x="4" y="12" rx="1" />
    <path d="M14 12h6M14 16h6M14 20h6" />
  </svg>
);
