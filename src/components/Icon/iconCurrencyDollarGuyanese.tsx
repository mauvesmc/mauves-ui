import { Component, ComponentProps } from "solid-js";

export const IconCurrencyDollarGuyanese: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4M10 6H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3v-6H8M17 20v-2M18 6V4" />
  </svg>
);
