import { Component, ComponentProps } from "solid-js";

export const IconCrane: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 21h6M9 21V3L3 9h18M9 3l10 6" />
    <path d="M17 9v4a2 2 0 1 1-2 2" />
  </svg>
);
