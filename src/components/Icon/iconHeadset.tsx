import { Component, ComponentProps } from "solid-js";

export const IconHeadset: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="4" height="6" x="4" y="13" rx="2" />
    <rect width="4" height="6" x="16" y="13" rx="2" />
    <path d="M4 15v-3a8 8 0 0 1 16 0v3M18 19a6 3 0 0 1-6 3" />
  </svg>
);
