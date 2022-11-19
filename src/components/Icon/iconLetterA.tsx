import { Component, ComponentProps } from "solid-js";

export const IconLetterA: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 20V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v12M7 13h10" />
  </svg>
);
