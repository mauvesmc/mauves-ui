import { Component, ComponentProps } from "solid-js";

export const IconSignal3G: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 8h3a2 2 0 1 1 0 4H5M19 8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1M8 12a2 2 0 1 1 0 4H5" />
  </svg>
);
