import { Component, ComponentProps } from "solid-js";

export const IconLifebuoy: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="9" />
    <path d="m15 15 3.35 3.35M9 15l-3.35 3.35M5.65 5.65 9 9M18.35 5.65 15 9" />
  </svg>
);
