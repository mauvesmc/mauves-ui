import { Component, ComponentProps } from "solid-js";

export const IconApps: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="6" height="6" x="4" y="4" rx="1" />
    <rect width="6" height="6" x="4" y="14" rx="1" />
    <rect width="6" height="6" x="14" y="14" rx="1" />
    <path d="M14 7h6M17 4v6" />
  </svg>
);
