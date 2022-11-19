import { Component, ComponentProps } from "solid-js";

export const IconRoute2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 17 4 4M7 17l-4 4M17 3l4 4M21 3l-4 4M14 5a2 2 0 0 0-2 2v10a2 2 0 0 1-2 2" />
  </svg>
);
