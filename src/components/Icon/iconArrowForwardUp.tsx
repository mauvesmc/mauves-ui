import { Component, ComponentProps } from "solid-js";

export const IconArrowForwardUp: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m15 13 4-4-4-4m4 4H8a4 4 0 0 0 0 8h1" />
  </svg>
);
