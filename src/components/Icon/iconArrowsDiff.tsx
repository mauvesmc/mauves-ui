import { Component, ComponentProps } from "solid-js";

export const IconArrowsDiff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 16h10M11 16l4 4M11 16l4-4M13 8H3M13 8l-4 4M13 8 9 4" />
  </svg>
);
