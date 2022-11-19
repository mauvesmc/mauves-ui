import { Component, ComponentProps } from "solid-js";

export const IconBracketsContain: Component<ComponentProps<"svg">> = (
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
    <path d="M7 4H3v16h4M17 4h4v16h-4M8 16h.01M12 16h.01M16 16h.01" />
  </svg>
);
