import { Component, ComponentProps } from "solid-js";

export const IconSchemaOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 2h4v4M6 6H5V5M15 11v-1h5v4h-2M5 18h5v4H5zM5 10h5v4H5zM10 12h2M7.5 7.5V10M7.5 14v4M3 3l18 18" />
  </svg>
);
