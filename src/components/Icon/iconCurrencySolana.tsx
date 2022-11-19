import { Component, ComponentProps } from "solid-js";

export const IconCurrencySolana: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 18h12l4-4H8zM8 14l-4-4h12l4 4M16 10l4-4H8l-4 4" />
  </svg>
);
