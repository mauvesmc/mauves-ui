import { Component, ComponentProps } from "solid-js";

export const IconNfc: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 20a3 3 0 0 1-3-3V6l5 5" />
    <path d="M13 4a3 3 0 0 1 3 3v11l-5-5" />
    <rect width="16" height="16" x="4" y="4" rx="3" />
  </svg>
);
