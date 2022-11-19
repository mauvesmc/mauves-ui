import { Component, ComponentProps } from "solid-js";

export const IconHexagons: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 18v-5l4-2 4 2v5l-4 2zM8 11V6l4-2 4 2v5M12 13l4-2 4 2v5l-4 2-4-2" />
  </svg>
);
