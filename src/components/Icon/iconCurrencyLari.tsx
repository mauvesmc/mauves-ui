import { Component, ComponentProps } from "solid-js";

export const IconCurrencyLari: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18 13a6 6 0 1 0-6 6M6 19h12M10 5v7M14 12V5" />
  </svg>
);
