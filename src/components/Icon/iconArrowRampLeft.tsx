import { Component, ComponentProps } from "solid-js";

export const IconArrowRampLeft: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 3v8.707M13 7l4-4 4 4M7 14l-4-4 4-4" />
    <path d="M17 21A11 11 0 0 0 6 10H3" />
  </svg>
);
