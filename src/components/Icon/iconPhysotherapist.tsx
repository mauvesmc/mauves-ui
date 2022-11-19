import { Component, ComponentProps } from "solid-js";

export const IconPhysotherapist: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m9 15-1-3 4-2 4 1h3.5" />
    <circle cx="4" cy="19" r="1" />
    <circle cx="12" cy="6" r="1" />
    <path d="M12 17v-7M8 20h7l1-4 4-2M18 20h3" />
  </svg>
);
