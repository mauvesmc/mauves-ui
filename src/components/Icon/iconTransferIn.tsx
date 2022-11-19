import { Component, ComponentProps } from "solid-js";

export const IconTransferIn: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 18v3h16V7l-8-4-8 4v3M4 14h9" />
    <path d="m10 11 3 3-3 3" />
  </svg>
);
