import { Component, ComponentProps } from "solid-js";

export const IconFileSymlink: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 21v-4a3 3 0 0 1 3-3h5" />
    <path d="m9 17 3-3-3-3M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 11V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H7.5" />
  </svg>
);
