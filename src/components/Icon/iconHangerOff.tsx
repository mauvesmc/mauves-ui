import { Component, ComponentProps } from "solid-js";

export const IconHangerOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14.004 6a2 2 0 1 0-4 0m6.506 6.506 3.461 1.922A2 2 0 0 1 21 16.177V17m-2 2H5a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.029-1.749l6.673-3.707M3 3l18 18" />
  </svg>
);
