import { Component, ComponentProps } from "solid-js";

export const IconCooker: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 7h.01M15 7h.01M9 7h.01" />
    <rect width="14" height="18" x="5" y="3" rx="2" />
    <path d="M9 15h6M5 11h14" />
  </svg>
);
