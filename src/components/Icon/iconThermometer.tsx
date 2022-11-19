import { Component, ComponentProps } from "solid-js";

export const IconThermometer: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8H7v-4l8-8a2.828 2.828 0 0 1 4 0zM16 7l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 17l-3 3" />
  </svg>
);
