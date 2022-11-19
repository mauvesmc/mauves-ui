import { Component, ComponentProps } from "solid-js";

export const IconPepper: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 11c0 2.21-2.239 4-5 4s-5-1.79-5-4a8 8 0 1 0 16 0 3 3 0 0 0-6 0" />
    <path d="M16 8c0-2 2-4 4-4" />
  </svg>
);
