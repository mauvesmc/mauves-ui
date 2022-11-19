import { Component, ComponentProps } from "solid-js";

export const IconNumbers: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 10V3L6 5M6 16a2 2 0 1 1 4 0c0 .591-.601 1.46-1 2l-3 3.001h4M15 14a2 2 0 1 0 2-2 2 2 0 1 0-2-2M6.5 10h3" />
  </svg>
);
