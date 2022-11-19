import { Component, ComponentProps } from "solid-js";

export const IconFrameOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 7h3m4 0h9M4 17h13M7 7v13M17 4v9m0 4v3M3 3l18 18" />
  </svg>
);
