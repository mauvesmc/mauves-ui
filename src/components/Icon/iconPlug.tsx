import { Component, ComponentProps } from "solid-js";

export const IconPlug: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.785 6 18 14.215l-2.054 2.054a5.81 5.81 0 1 1-8.215-8.215L9.785 6zM4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5" />
  </svg>
);
