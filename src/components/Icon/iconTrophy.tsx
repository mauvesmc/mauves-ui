import { Component, ComponentProps } from "solid-js";

export const IconTrophy: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 21h8M12 17v4M7 4h10M17 4v8a5 5 0 0 1-10 0V4" />
    <circle cx="5" cy="9" r="2" />
    <circle cx="19" cy="9" r="2" />
  </svg>
);
