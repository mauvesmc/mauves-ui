import { Component, ComponentProps } from "solid-js";

export const IconDice5: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
    <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
    <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
    <circle cx="12" cy="12" r=".5" fill="currentColor" />
  </svg>
);
