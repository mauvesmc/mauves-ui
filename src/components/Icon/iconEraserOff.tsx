import { Component, ComponentProps } from "solid-js";

export const IconEraserOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M19 20H8.5l-4.21-4.3a1 1 0 0 1 0-1.41l4.995-4.993m2.009-2.01 2.997-2.996a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41c-1.417 1.431-2.406 2.432-2.97 3m-2.02 2.043L11.5 20M18 13.3 11.7 7" />
  </svg>
);
