import { Component, ComponentProps } from "solid-js";

export const IconCurrencyEuro: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17.2 7a6 7 0 1 0 0 10M13 10H5m0 4h8" />
  </svg>
);
