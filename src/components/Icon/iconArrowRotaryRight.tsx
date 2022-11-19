import { Component, ComponentProps } from "solid-js";

export const IconArrowRotaryRight: Component<ComponentProps<"svg">> = (
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
    <circle cx="8" cy="7" r="3" />
    <path d="M8 10v10M17 11l4-4-4-4M11 7h10" />
  </svg>
);
