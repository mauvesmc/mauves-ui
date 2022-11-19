import { Component, ComponentProps } from "solid-js";

export const IconTransferOut: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 19v2h16V7l-8-4-8 4v2M13 14H4" />
    <path d="m7 11-3 3 3 3" />
  </svg>
);
