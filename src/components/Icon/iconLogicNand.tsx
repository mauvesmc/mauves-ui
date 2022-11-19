import { Component, ComponentProps } from "solid-js";

export const IconLogicNand: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M22 12h-3M2 9h3M2 15h3M7 5c6 0 8 3.5 8 7s-2 7-8 7H5V5h2z" />
    <circle cx="17" cy="12" r="2" />
  </svg>
);
