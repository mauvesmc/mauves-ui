import { Component, ComponentProps } from "solid-js";

export const IconMicrowave: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="12" x="3" y="6" rx="1" />
    <path d="M15 6v12M18 12h.01M18 15h.01M18 9h.01M6.5 10.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0M6.5 13.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0" />
  </svg>
);
