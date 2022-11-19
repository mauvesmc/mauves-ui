import { Component, ComponentProps } from "solid-js";

export const IconCodeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m7 8-4 4 4 4M17 8l4 4-2.5 2.5M14 4l-1.201 4.805m-.802 3.207L10 20M3 3l18 18" />
  </svg>
);
