import { Component, ComponentProps } from "solid-js";

export const IconBluetoothOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M16.438 16.45 12 20v-8m0-4V4l5 4-2.776 2.22m-2.222 1.779-5 4" />
  </svg>
);
