import { Component, ComponentProps } from "solid-js";

export const IconVinyl: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16.004 3.937A9 9 0 1 0 21 12" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="20" cy="4" r="1" />
    <path d="m20 4-3.5 10-2.5 2" />
  </svg>
);