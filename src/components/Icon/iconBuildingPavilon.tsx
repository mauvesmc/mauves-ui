import { Component, ComponentProps } from "solid-js";

export const IconBuildingPavilon: Component<ComponentProps<"svg">> = (
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
    <path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7M6 21v-9M18 21v-9M6 12h12a3 3 0 0 0 3-3 9 8 0 0 1-9-6 9 8 0 0 1-9 6 3 3 0 0 0 3 3" />
  </svg>
);
