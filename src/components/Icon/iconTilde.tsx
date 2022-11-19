import { Component, ComponentProps } from "solid-js";

export const IconTilde: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 12c0-1.657 1.592-3 3.556-3 1.963 0 3.11 1.5 4.444 3 1.333 1.5 2.48 3 4.444 3S20 13.657 20 12" />
  </svg>
);
