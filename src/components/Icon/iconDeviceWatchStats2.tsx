import { Component, ComponentProps } from "solid-js";

export const IconDeviceWatchStats2: Component<ComponentProps<"svg">> = (
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
    <rect width="12" height="12" x="6" y="6" rx="3" />
    <path d="M9 18v3h6v-3M9 6V3h6v3M12 10a2 2 0 1 0 2 2" />
  </svg>
);
