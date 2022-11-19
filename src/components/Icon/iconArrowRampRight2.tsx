import { Component, ComponentProps } from "solid-js";

export const IconArrowRampRight2: Component<ComponentProps<"svg">> = (
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
    <path d="M6 3v8.707M16 14l4-4-4-4" />
    <path d="M6 21c0-6.075 4.925-11 11-11h3" />
  </svg>
);
