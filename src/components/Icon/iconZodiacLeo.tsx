import { Component, ComponentProps } from "solid-js";

export const IconZodiacLeo: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 17a4 4 0 1 0 8 0" />
    <circle cx="6" cy="16" r="3" />
    <circle cx="11" cy="7" r="4" />
    <path d="M7 7c0 3 2 5 2 9M15 7c0 4-2 6-2 10" />
  </svg>
);
