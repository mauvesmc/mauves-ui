import { Component, ComponentProps } from "solid-js";

export const IconDeviceMobileVibration: Component<ComponentProps<"svg">> = (
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
    <rect width="12" height="18" x="3" y="3" rx="2" />
    <path d="M8 4h2M9 17v.01M21 6l-2 3 2 3-2 3 2 3" />
  </svg>
);
