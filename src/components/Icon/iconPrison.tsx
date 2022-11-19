import { Component, ComponentProps } from "solid-js";

export const IconPrison: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18 4v16M14 4v16M6 4v5M6 15v5M10 4v5M11 9H5v6h6zM10 15v5M8 12h-.01" />
  </svg>
);
