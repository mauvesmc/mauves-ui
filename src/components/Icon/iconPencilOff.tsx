import { Component, ComponentProps } from "solid-js";

export const IconPencilOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10.003 9.997 4 16v4h4l6.006-6.006m1.99-1.99L18.5 9.5a2.828 2.828 0 1 0-4-4L12 8M13.5 6.5l4 4M3 3l18 18" />
  </svg>
);
