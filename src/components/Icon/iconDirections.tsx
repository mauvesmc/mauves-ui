import { Component, ComponentProps } from "solid-js";

export const IconDirections: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 21v-4M12 13V9M12 5V3M10 21h4M8 5v4h11l2-2-2-2zM14 13v4H6l-2-2 2-2z" />
  </svg>
);
