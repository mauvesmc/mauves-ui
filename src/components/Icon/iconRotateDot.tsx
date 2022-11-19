import { Component, ComponentProps } from "solid-js";

export const IconRotateDot: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);
