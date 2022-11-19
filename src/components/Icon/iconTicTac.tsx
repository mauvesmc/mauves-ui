import { Component, ComponentProps } from "solid-js";

export const IconTicTac: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="6" r="2" />
    <path d="M3 12h18M12 3v18M4 16l4 4M4 20l4-4M16 4l4 4M16 8l4-4" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);
