import { Component, ComponentProps } from "solid-js";

export const IconDoorEnter: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 12v.01M3 21h18M5 21V5a2 2 0 0 1 2-2h6m4 10.5V21M21 7h-7m3-3-3 3 3 3" />
  </svg>
);
