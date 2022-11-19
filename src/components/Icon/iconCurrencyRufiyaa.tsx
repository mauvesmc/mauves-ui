import { Component, ComponentProps } from "solid-js";

export const IconCurrencyRufiyaa: Component<ComponentProps<"svg">> = (
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
    <path d="M20 16h.01M4 16c9.5-4 11.5-8 14-9M12 8l5 3" />
  </svg>
);
