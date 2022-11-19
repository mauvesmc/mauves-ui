import { Component, ComponentProps } from "solid-js";

export const IconWalk: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="13" cy="4" r="1" />
    <path d="m7 21 3-4M16 21l-2-4-3-3 1-6" />
    <path d="m6 12 2-3 4-1 3 3 3 1" />
  </svg>
);
