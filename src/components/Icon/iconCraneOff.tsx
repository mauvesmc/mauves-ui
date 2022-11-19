import { Component, ComponentProps } from "solid-js";

export const IconCraneOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 21h6M9 21V9M9 5V3L7.999 4.001M6.005 5.995 3 9h6M13 9h8M9 3l10 6M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1-2-2M3 3l18 18" />
  </svg>
);
