import { Component, ComponentProps } from "solid-js";

export const IconVectorBezier: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="4" height="4" x="3" y="14" rx="1" />
    <rect width="4" height="4" x="17" y="14" rx="1" />
    <rect width="4" height="4" x="10" y="6" rx="1" />
    <path d="M10 8.5A6 6 0 0 0 5 14M14 8.5a6 6 0 0 1 5 5.5M10 8H4M20 8h-6" />
    <circle cx="3" cy="8" r="1" />
    <circle cx="21" cy="8" r="1" />
  </svg>
);
