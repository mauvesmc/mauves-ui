import { Component, ComponentProps } from "solid-js";

export const IconNumber2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 8a4 4 0 1 1 8 0c0 1.098-.564 2.025-1.159 2.815L8 20h8" />
  </svg>
);
