import { Component, ComponentProps } from "solid-js";

export const IconShoppingCartDiscount: Component<ComponentProps<"svg">> = (
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
    <circle cx="17" cy="19" r="2" />
    <path d="M17 17H6V3H4" />
    <path d="m20 6-1 7H6M10 10l6-6" />
    <circle cx="10.5" cy="4.5" r=".5" />
    <circle cx="15.5" cy="9.5" r=".5" />
  </svg>
);
