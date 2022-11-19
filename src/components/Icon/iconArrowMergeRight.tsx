import { Component, ComponentProps } from "solid-js";

export const IconArrowMergeRight: Component<ComponentProps<"svg">> = (
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
    <path d="m16 8-4-4-4 4M12 20V4M18 18c-4-1.333-6-4.667-6-10" />
  </svg>
);
