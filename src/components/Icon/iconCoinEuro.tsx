import { Component, ComponentProps } from "solid-js";

export const IconCoinEuro: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M14.401 8c-.669-.628-1.5-1-2.401-1-2.21 0-4 2.239-4 5s1.79 5 4 5c.9 0 1.731-.372 2.4-1M7 10.5h4M7 13.5h4" />
  </svg>
);
