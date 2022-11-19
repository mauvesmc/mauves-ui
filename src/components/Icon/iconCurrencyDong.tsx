import { Component, ComponentProps } from "solid-js";

export const IconCurrencyDong: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 19h12" />
    <circle cx="12" cy="12" r="4" />
    <path d="M16 16V4M17 5h-4" />
  </svg>
);
