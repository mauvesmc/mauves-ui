import { Component, ComponentProps } from "solid-js";

export const IconArrowMerge: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m8 7 4-4 4 4" />
    <path d="M12 3v5.394A6.737 6.737 0 0 1 9 14a6.737 6.737 0 0 0-3 5.606V21" />
    <path d="M12 3v5.394A6.737 6.737 0 0 0 15 14a6.737 6.737 0 0 1 3 5.606V21" />
  </svg>
);
