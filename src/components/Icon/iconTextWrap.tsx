import { Component, ComponentProps } from "solid-js";

export const IconTextWrap: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 6h16M4 18h5M4 12h13a3 3 0 0 1 0 6h-4l2-2m0 4-2-2" />
  </svg>
);
