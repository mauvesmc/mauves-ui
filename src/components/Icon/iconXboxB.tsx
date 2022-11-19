import { Component, ComponentProps } from "solid-js";

export const IconXboxB: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9z" />
    <path d="M13 12a2 2 0 1 1 0 4h-3v-4M13 12h-3M13 12a2 2 0 1 0 0-4h-3v4" />
  </svg>
);
