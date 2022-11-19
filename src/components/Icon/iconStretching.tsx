import { Component, ComponentProps } from "solid-js";

export const IconStretching: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="16" cy="5" r="1" />
    <path d="m5 20 5-.5 1-2M18 20v-5h-5.5L15 8.5l-5.5 1 1.5 2" />
  </svg>
);
