import { Component, ComponentProps } from "solid-js";

export const IconBeta: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 22V8a4 4 0 0 1 4-4h.5a3.5 3.5 0 0 1 0 7H12h.5A4.5 4.5 0 1 1 8 15.5V15" />
  </svg>
);
