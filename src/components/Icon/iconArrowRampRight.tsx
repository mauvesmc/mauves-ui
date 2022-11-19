import { Component, ComponentProps } from "solid-js";

export const IconArrowRampRight: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 3v8.707M11 7 7 3 3 7M17 14l4-4-4-4" />
    <path d="M7 21a11 11 0 0 1 11-11h3" />
  </svg>
);
