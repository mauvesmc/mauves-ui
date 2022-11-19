import { Component, ComponentProps } from "solid-js";

export const IconBuildingCottage: Component<ComponentProps<"svg">> = (
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
    <path d="M3 21h18M4 21V10l2.5-4.5L12 3l5.5 2.5L20 10v11" />
    <circle cx="12" cy="9" r="2" />
    <path d="M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
  </svg>
);
