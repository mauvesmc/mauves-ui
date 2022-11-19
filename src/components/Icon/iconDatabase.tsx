import { Component, ComponentProps } from "solid-js";

export const IconDatabase: Component<ComponentProps<"svg">> = (props) => (
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
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6a8 3 0 0 0 16 0V6" />
    <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
  </svg>
);
