import { Component, ComponentProps } from "solid-js";

export const IconArrowRotaryStraight: Component<ComponentProps<"svg">> = (
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
    <circle cx="13" cy="13" r="3" />
    <path d="M13 16v5M13 3v7M9 7l4-4 4 4" />
  </svg>
);
