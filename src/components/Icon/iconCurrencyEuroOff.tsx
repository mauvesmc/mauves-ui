import { Component, ComponentProps } from "solid-js";

export const IconCurrencyEuroOff: Component<ComponentProps<"svg">> = (
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
    <path d="M17.2 7c-1.977-2.26-4.954-2.602-7.234-1.04M8.053 8.039c-1.604 2.72-1.374 6.469.69 8.894 2.292 2.691 5.995 2.758 8.356.18M10 10H5m0 4h8M3 3l18 18" />
  </svg>
);
