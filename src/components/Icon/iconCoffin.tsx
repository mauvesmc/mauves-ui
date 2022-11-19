import { Component, ComponentProps } from "solid-js";

export const IconCoffin: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 3 5 9l2 12h6l2-12-2-6zM10 7v5M8 9h4" />
    <path d="M13 21h4l2-12-2-6h-4" />
  </svg>
);
