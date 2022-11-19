import { Component, ComponentProps } from "solid-js";

export const IconLetterD: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7V4" />
  </svg>
);
