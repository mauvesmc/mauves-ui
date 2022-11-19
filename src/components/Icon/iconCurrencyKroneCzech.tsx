import { Component, ComponentProps } from "solid-js";

export const IconCurrencyKroneCzech: Component<ComponentProps<"svg">> = (
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
    <path d="M5 6v12M5 12c3.5 0 6-3 6-6M5 12c3.5 0 6 3 6 6M19 6l-2 2-2-2M19 12h-2a3 3 0 0 0 0 6h2" />
  </svg>
);
