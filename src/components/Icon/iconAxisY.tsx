import { Component, ComponentProps } from "solid-js";

export const IconAxisY: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 20h-.01M15 20h-.01M19 20h-.01M4 7l3-3 3 3M7 20V4" />
  </svg>
);
