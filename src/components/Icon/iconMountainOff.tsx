import { Component, ComponentProps } from "solid-js";

export const IconMountainOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18.281 14.26 14.08 5.388a2.3 2.3 0 0 0-4.158 0l-.165.349M8.468 8.456 3 20h17" />
    <path d="m7.5 11 2 2.5 2-2M3 3l18 18" />
  </svg>
);
