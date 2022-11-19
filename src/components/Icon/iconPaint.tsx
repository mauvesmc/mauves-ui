import { Component, ComponentProps } from "solid-js";

export const IconPaint: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="14" height="6" x="5" y="3" rx="2" />
    <path d="M19 6h1a2 2 0 0 1 2 2 5 5 0 0 1-5 5h-5v2" />
    <rect width="4" height="6" x="10" y="15" rx="1" />
  </svg>
);
