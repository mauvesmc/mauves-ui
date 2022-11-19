import { Component, ComponentProps } from "solid-js";

export const IconMoodNerd: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <circle cx="8" cy="10" r="2" />
    <circle cx="16" cy="10" r="2" />
    <path d="M9.5 15a3.5 3.5 0 0 0 5 0M3.5 9H6M18 9h2.5M10 9.5c1.333-1.333 2.667-1.333 4 0" />
  </svg>
);
