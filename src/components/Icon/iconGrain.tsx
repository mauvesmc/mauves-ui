import { Component, ComponentProps } from "solid-js";

export const IconGrain: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="4.5" cy="9.5" r="1" />
    <circle cx="9.5" cy="4.5" r="1" />
    <circle cx="9.5" cy="14.5" r="1" />
    <circle cx="4.5" cy="19.5" r="1" />
    <circle cx="14.5" cy="9.5" r="1" />
    <circle cx="19.5" cy="4.5" r="1" />
    <circle cx="14.5" cy="19.5" r="1" />
    <circle cx="19.5" cy="14.5" r="1" />
  </svg>
);
