import { Component, ComponentProps } from "solid-js";

export const IconSignLeft: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 21h-4M14 21V11M14 6V3M18 6H8L6 8.5 8 11h10z" />
  </svg>
);
