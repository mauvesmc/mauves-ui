import { Component, ComponentProps } from "solid-js";

export const IconCurrencyLitecoin: Component<ComponentProps<"svg">> = (
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
    <path d="M18 19H9.806a2 2 0 0 1-1.98-2.283L9.5 5M14 9l-9 4" />
  </svg>
);
