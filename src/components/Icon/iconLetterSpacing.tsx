import { Component, ComponentProps } from "solid-js";

export const IconLetterSpacing: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 12V6.5a2.5 2.5 0 0 1 5 0V12m0-4H5M13 4l3 8 3-8M5 18h14M17 20l2-2-2-2M7 16l-2 2 2 2" />
  </svg>
);
