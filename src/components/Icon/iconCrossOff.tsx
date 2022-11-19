import { Component, ComponentProps } from "solid-js";

export const IconCrossOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 12h3V8h-5V3h-4v3M8 8H5v4h5v9h4v-7M3 3l18 18" />
  </svg>
);
