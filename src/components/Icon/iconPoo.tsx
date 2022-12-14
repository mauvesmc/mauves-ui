import { Component, ComponentProps } from "solid-js";

export const IconPoo: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 12h.01M14 12h.01M10 16a3.5 3.5 0 0 0 4 0" />
    <path d="M11 4c2 0 3.5 1.5 3.5 4l.164.005a2.5 2.5 0 0 1 2.196 3.32 3 3 0 0 1 1.615 3.063 3 3 0 0 1-1.299 5.607L17 20H7a3 3 0 0 1-1.474-5.613 3 3 0 0 1 1.615-3.062 2.5 2.5 0 0 1 2.195-3.32L9.5 8C11 8 12 6 11 4z" />
  </svg>
);
