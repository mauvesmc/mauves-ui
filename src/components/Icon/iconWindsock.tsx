import { Component, ComponentProps } from "solid-js";

export const IconWindsock: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 3v18M6 11l12-1V6L6 5M10 5.5v5M14 6v4M4 21h4" />
  </svg>
);
