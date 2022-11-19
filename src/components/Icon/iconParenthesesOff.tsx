import { Component, ComponentProps } from "solid-js";

export const IconParenthesesOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5.743 5.745A12.253 12.253 0 0 0 7 20M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794A12.291 12.291 0 0 1 17 20M3 3l18 18" />
  </svg>
);
