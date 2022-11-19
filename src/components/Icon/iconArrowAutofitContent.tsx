import { Component, ComponentProps } from "solid-js";

export const IconArrowAutofitContent: Component<ComponentProps<"svg">> = (
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
    <path d="M6 4 3 7l3 3M18 4l3 3-3 3" />
    <rect width="16" height="6" x="4" y="14" rx="2" />
    <path d="M10 7H3M21 7h-7" />
  </svg>
);
