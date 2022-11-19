import { Component, ComponentProps } from "solid-js";

export const IconConfucius: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m9 19 3 2V3M4 10l8-2M4 18l8-10M20 18l-8-8 8-4" />
  </svg>
);
