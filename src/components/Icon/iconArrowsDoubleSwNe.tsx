import { Component, ComponentProps } from "solid-js";

export const IconArrowsDoubleSwNe: Component<ComponentProps<"svg">> = (
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
    <path d="M14 3 3 14M3 10v4h4M17 10h4v4M10 21l11-11" />
  </svg>
);
