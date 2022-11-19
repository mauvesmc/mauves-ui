import { Component, ComponentProps } from "solid-js";

export const IconShoppingCartX: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="17" cy="19" r="2" />
    <path d="M17 17H6V3H4" />
    <path d="m6 5 7.999.571m5.43 4.43L19 13H6M17 3l4 4M21 3l-4 4" />
  </svg>
);
