import { Component, ComponentProps } from "solid-js";

export const IconTxt: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 8h4M5 8v8M17 8h4M19 8v8M10 8l4 8M10 16l4-8" />
  </svg>
);
