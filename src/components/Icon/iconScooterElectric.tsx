import { Component, ComponentProps } from "solid-js";

export const IconScooterElectric: Component<ComponentProps<"svg">> = (
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
    <circle cx="18" cy="17" r="2" />
    <circle cx="6" cy="17" r="2" />
    <path d="M8 17h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1M10 4 8 8h3l-2 4" />
  </svg>
);
