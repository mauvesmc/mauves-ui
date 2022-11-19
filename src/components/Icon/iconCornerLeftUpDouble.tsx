import { Component, ComponentProps } from "solid-js";

export const IconCornerLeftUpDouble: Component<ComponentProps<"svg">> = (
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
    <path d="M18 19h-6a3 3 0 0 1-3-3V9" />
    <path d="M13 13 9 9l-4 4m8-5L9 4 5 8" />
  </svg>
);
