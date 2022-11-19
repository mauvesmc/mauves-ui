import { Component, ComponentProps } from "solid-js";

export const IconSunglasses: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4H6L3 14M16 4h2l3 10M10 16h4M21 16.5a3.5 3.5 0 0 1-7 0V14h7v2.5M10 16.5a3.5 3.5 0 0 1-7 0V14h7v2.5M4 14l4.5 4.5M15 14l4.5 4.5" />
  </svg>
);
