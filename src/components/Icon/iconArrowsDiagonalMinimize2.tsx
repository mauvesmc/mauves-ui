import { Component, ComponentProps } from "solid-js";

export const IconArrowsDiagonalMinimize2: Component<ComponentProps<"svg">> = (
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
    <path d="M18 10h-4V6M20 4l-6 6M6 14h4v4M10 14l-6 6" />
  </svg>
);
