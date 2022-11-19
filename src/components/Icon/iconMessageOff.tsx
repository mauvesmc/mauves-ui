import { Component, ComponentProps } from "solid-js";

export const IconMessageOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M17 17H8l-4 4V8a3 3 0 0 1 1.44-2.563M9.001 5h8a3 3 0 0 1 3 3v6c0 .575-.162 1.112-.442 1.568" />
  </svg>
);
