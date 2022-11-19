import { Component, ComponentProps } from "solid-js";

export const IconHighlight: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 19h4L17.5 8.5a2.828 2.828 0 1 0-4-4L3 15v4M12.5 5.5l4 4M4.5 13.5l4 4M21 15v4h-8l4-4z" />
  </svg>
);
