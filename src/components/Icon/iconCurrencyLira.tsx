import { Component, ComponentProps } from "solid-js";

export const IconCurrencyLira: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 5v15a7 7 0 0 0 7-7M6 15l8-4M14 7l-8 4" />
  </svg>
);
