import { Component, ComponentProps } from "solid-js";

export const IconSlideshow: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 6h.01" />
    <rect width="18" height="14" x="3" y="3" rx="3" />
    <path d="m3 13 4-4a3 5 0 0 1 3 0l4 4" />
    <path d="m13 12 2-2a3 5 0 0 1 3 0l3 3M8 21h.01M12 21h.01M16 21h.01" />
  </svg>
);
