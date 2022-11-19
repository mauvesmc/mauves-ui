import { Component, ComponentProps } from "solid-js";

export const IconCaravan: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="11" cy="17" r="2" />
    <path d="M21 17h-8M9 17H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h10l4 4v8" />
    <rect width="6" height="4" x="6" y="8" rx="1" />
  </svg>
);
