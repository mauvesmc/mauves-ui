import { Component, ComponentProps } from "solid-js";

export const IconH6: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    <path d="M21 12a2 2 0 1 0-4 0v4M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" />
  </svg>
);
