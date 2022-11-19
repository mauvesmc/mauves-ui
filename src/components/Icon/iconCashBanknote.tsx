import { Component, ComponentProps } from "solid-js";

export const IconCashBanknote: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="3" />
    <rect width="18" height="12" x="3" y="6" rx="2" />
    <path d="M18 12h.01M6 12h.01" />
  </svg>
);
