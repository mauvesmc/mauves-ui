import { Component, ComponentProps } from "solid-js";

export const IconPerfume: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 6v3M14 6v3" />
    <rect width="14" height="12" x="5" y="9" rx="2" />
    <circle cx="12" cy="15" r="2" />
    <path d="M9 3h6v3H9z" />
  </svg>
);
