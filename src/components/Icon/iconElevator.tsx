import { Component, ComponentProps } from "solid-js";

export const IconElevator: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="14" height="16" x="5" y="4" rx="1" />
    <path d="m10 10 2-2 2 2M10 14l2 2 2-2" />
  </svg>
);
