import { Component, ComponentProps } from "solid-js";

export const IconToggleRight: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="16" cy="12" r="2" />
    <rect width="20" height="12" x="2" y="6" rx="6" />
  </svg>
);
