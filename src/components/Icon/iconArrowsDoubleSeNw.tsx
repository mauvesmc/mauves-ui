import { Component, ComponentProps } from "solid-js";

export const IconArrowsDoubleSeNw: Component<ComponentProps<"svg">> = (
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
    <path d="m3 10 11 11M14 17v4h-4M14 3h-4v4M21 14 10 3" />
  </svg>
);
