import { Component, ComponentProps } from "solid-js";

export const IconSpray: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="8" height="11" x="4" y="10" rx="2" />
    <path d="M6 10V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4M15 7h.01M18 9h.01M18 5h.01M21 3h.01M21 7h.01M21 11h.01M10 7h1" />
  </svg>
);
