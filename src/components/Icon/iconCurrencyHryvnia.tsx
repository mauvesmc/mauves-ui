import { Component, ComponentProps } from "solid-js";

export const IconCurrencyHryvnia: Component<ComponentProps<"svg">> = (
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
    <path d="M8 7a2.64 2.64 0 0 1 2.562-2h3.376A2.64 2.64 0 0 1 16.5 7a2.57 2.57 0 0 1-1.344 2.922L9.28 12.86A3.338 3.338 0 0 0 7.5 16.5a3.11 3.11 0 0 0 3.05 2.5h2.888A2.64 2.64 0 0 0 16 17M6 10h12M6 14h12" />
  </svg>
);
