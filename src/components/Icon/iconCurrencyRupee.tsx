import { Component, ComponentProps } from "solid-js";

export const IconCurrencyRupee: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18 5H7h3a4 4 0 0 1 0 8H7l6 6M7 9h11" />
  </svg>
);
