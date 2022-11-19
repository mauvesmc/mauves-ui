import { Component, ComponentProps } from "solid-js";

export const IconCurrencyBahraini: Component<ComponentProps<"svg">> = (
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
    <path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2-2v-3M7 19.01V19M14 15.01V15M17 15h2.004a2 2 0 0 0 1.649-3.131L18 8" />
  </svg>
);
