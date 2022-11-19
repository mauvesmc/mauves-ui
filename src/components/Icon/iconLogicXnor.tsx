import { Component, ComponentProps } from "solid-js";

export const IconLogicXnor: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M22 12h-2M2 9h4M2 15h4M5 19c1.778-4.667 1.778-9.333 0-14M8 5c10.667 2.1 10.667 12.6 0 14 1.806-4.667 1.806-9.333 0-14z" />
    <circle cx="18" cy="12" r="2" />
  </svg>
);
