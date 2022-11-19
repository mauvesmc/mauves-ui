import { Component, ComponentProps } from "solid-js";

export const IconCurrencyShekel: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 18V6h4a4 4 0 0 1 4 4v4" />
    <path d="M18 6v12h-4a4 4 0 0 1-4-4v-4" />
  </svg>
);