import { Component, ComponentProps } from "solid-js";

export const IconHaze: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7.7M18.4 5.6l-.7.7M8 12a4 4 0 1 1 8 0M3 16h18M3 20h18" />
  </svg>
);
