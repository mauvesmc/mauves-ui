import { Component, ComponentProps } from "solid-js";

export const IconLayersIntersect2: Component<ComponentProps<"svg">> = (
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
    <rect width="12" height="12" x="8" y="4" rx="2" />
    <rect width="12" height="12" x="4" y="8" rx="2" />
    <path d="m9 15 6-6" />
  </svg>
);
