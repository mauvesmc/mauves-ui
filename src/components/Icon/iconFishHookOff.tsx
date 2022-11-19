import { Component, ComponentProps } from "solid-js";

export const IconFishHookOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 9v3m-.085 3.924A5.002 5.002 0 0 1 6 15v-4l3 3" />
    <circle cx="16" cy="7" r="2" />
    <path d="M16 5V3M3 3l18 18" />
  </svg>
);
