import { Component, ComponentProps } from "solid-js";

export const IconFall: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m11 21 1-5-1-4-3-4h4l3-3M6 16l-1-4 3-4" />
    <circle cx="6" cy="5" r="1" />
    <path d="M13.5 12H16l4 2" />
  </svg>
);
