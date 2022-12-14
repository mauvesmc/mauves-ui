import { Component, ComponentProps } from "solid-js";

export const IconArrowMoveLeft: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 12H3M6 15l-3-3 3-3M17 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
  </svg>
);
