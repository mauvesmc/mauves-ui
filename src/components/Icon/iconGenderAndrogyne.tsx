import { Component, ComponentProps } from "solid-js";

export const IconGenderAndrogyne: Component<ComponentProps<"svg">> = (
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
    <path d="m13 11 6-6" />
    <circle cx="9" cy="15" r="5" />
    <path d="M19 9V5h-4M16.5 10.5l-3-3" />
  </svg>
);
