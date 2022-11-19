import { Component, ComponentProps } from "solid-js";

export const IconBrandSublimeText: Component<ComponentProps<"svg">> = (
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
    <path d="M19 8 5 12.5V7l14-4.5zM19 17 5 21.5V16l14-4.5zM19 11.5 5 7M5 12.5 19 17" />
  </svg>
);
