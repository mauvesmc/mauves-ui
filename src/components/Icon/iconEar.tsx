import { Component, ComponentProps } from "solid-js";

export const IconEar: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 10a7 7 0 1 1 13 3.6 10 10 0 0 1-2 2 8 8 0 0 0-2 3A4.5 4.5 0 0 1 8.2 20" />
    <path d="M10 10a3 3 0 1 1 5 2.2" />
  </svg>
);
