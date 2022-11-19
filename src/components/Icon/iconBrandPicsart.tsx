import { Component, ComponentProps } from "solid-js";

export const IconBrandPicsart: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="9" r="7" />
    <circle cx="12" cy="9" r="3" />
    <path d="M5 9v11a2 2 0 1 0 4 0v-4.5" />
  </svg>
);