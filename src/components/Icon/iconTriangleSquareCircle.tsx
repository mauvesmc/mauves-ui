import { Component, ComponentProps } from "solid-js";

export const IconTriangleSquareCircle: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="m12 3-4 7h8z" />
    <circle cx="17" cy="17" r="3" />
    <rect width="6" height="6" x="4" y="14" rx="1" />
  </svg>
);
