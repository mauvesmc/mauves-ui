import { Component, ComponentProps } from "solid-js";

export const IconTextOrientation: Component<ComponentProps<"svg">> = (
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
    <path d="m9 15-5-5C2.633 8.633 2.633 6.367 4 5s3.633-1.367 5 0l5 5M5.5 11.5l5-5M21 12l-9 9M21 12v4M21 12h-4" />
  </svg>
);
