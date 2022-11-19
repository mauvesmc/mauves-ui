import { Component, ComponentProps } from "solid-js";

export const IconIdBadge: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="14" height="18" x="5" y="3" rx="3" />
    <circle cx="12" cy="13" r="2" />
    <path d="M10 6h4M9 18h6" />
  </svg>
);
