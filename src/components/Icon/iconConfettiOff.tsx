import { Component, ComponentProps } from "solid-js";

export const IconConfettiOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 5h1M5 5v1M11.5 4 11 6M18 5h2M19 4v2M15 9l-1 1M18 13l2-.5M18 19h1M19 19v1M14 16.518 7.482 10l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329L14 16.519v-.001zM3 3l18 18" />
  </svg>
);
