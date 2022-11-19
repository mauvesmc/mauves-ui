import { Component, ComponentProps } from "solid-js";

export const IconZodiacCapricorn: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M4 4a3 3 0 0 1 3 3v9M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1-3 3" />
    <circle cx="16" cy="17" r="3" />
  </svg>
);
