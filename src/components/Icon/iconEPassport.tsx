import { Component, ComponentProps } from "solid-js";

export const IconEPassport: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="20" height="14" x="2" y="5" rx="1.999" />
    <circle cx="12" cy="12" r="3" />
    <path d="M9 12H2M15 12h7" />
  </svg>
);
