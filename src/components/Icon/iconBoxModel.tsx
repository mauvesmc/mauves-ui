import { Component, ComponentProps } from "solid-js";

export const IconBoxModel: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 8h8v8H8z" />
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="m16 16 3.3 3.3M16 8l3.3-3.3M8 8 4.7 4.7M8 16l-3.3 3.3" />
  </svg>
);
