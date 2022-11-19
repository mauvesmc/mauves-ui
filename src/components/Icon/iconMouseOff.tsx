import { Component, ComponentProps } from "solid-js";

export const IconMouseOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.733 3.704A3.982 3.982 0 0 1 10 3h4a4 4 0 0 1 4 4v7m-.1 3.895A4.002 4.002 0 0 1 14 21h-4a4 4 0 0 1-4-4V7c0-.3.033-.593.096-.874M12 7v1M3 3l18 18" />
  </svg>
);
