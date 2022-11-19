import { Component, ComponentProps } from "solid-js";

export const IconCurrencyForint: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 4H7a3 3 0 0 0-3 3v12M10 11H4M16 4v13a2 2 0 0 0 2 2h2M19 9h-5" />
  </svg>
);
