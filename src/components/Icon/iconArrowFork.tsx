import { Component, ComponentProps } from "solid-js";

export const IconArrowFork: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 3h5v5M8 3H3v5" />
    <path d="m21 3-7.536 7.536A5 5 0 0 0 12 14.07V21M3 3l7.536 7.536A5 5 0 0 1 12 14.07V15" />
  </svg>
);
