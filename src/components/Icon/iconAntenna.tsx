import { Component, ComponentProps } from "solid-js";

export const IconAntenna: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 4v8M16 4.5v7M12 5v16M8 5.5v5M4 6v4M20 8H4" />
  </svg>
);
