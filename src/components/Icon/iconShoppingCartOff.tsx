import { Component, ComponentProps } from "solid-js";

export const IconShoppingCartOff: Component<ComponentProps<"svg">> = (
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
    <circle cx="6" cy="19" r="2" />
    <path d="M17 17a2 2 0 1 0 2 2M17 17H6V6M9.239 5.231 20 6l-1 7h-2m-4 0H6M3 3l18 18" />
  </svg>
);
