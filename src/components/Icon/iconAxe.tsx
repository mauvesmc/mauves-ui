import { Component, ComponentProps } from "solid-js";

export const IconAxe: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m13 9 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 12" />
    <path d="m6.66 15.66-3.32-3.32a1.25 1.25 0 0 1 .42-2.044L7 9l6-6 3 3-6 6-1.296 3.24a1.25 1.25 0 0 1-2.044.42z" />
  </svg>
);
