import { Component, ComponentProps } from "solid-js";

export const IconCalculator: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="18" x="4" y="3" rx="2" />
    <rect width="8" height="3" x="8" y="7" rx="1" />
    <path d="M8 14v.01M12 14v.01M16 14v.01M8 17v.01M12 17v.01M16 17v.01" />
  </svg>
);
