import { Component, ComponentProps } from "solid-js";

export const IconCurrencyBitcoin: Component<ComponentProps<"svg">> = (
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
    <path d="M6 6h8a3 3 0 0 1 0 6 3 3 0 0 1 0 6H6M8 6v12M8 12h6M9 3v3M13 3v3M9 18v3M13 18v3" />
  </svg>
);
