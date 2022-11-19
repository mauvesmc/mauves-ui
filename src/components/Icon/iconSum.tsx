import { Component, ComponentProps } from "solid-js";

export const IconSum: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18 16v2a1 1 0 0 1-1 1H6l6-7-6-7h11a1 1 0 0 1 1 1v2" />
  </svg>
);
