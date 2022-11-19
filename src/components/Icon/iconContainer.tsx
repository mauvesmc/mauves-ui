import { Component, ComponentProps } from "solid-js";

export const IconContainer: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 4v.01M20 20v.01M20 16v.01M20 12v.01M20 8v.01" />
    <rect width="8" height="16" x="8" y="4" rx="1" />
    <path d="M4 4v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01" />
  </svg>
);
