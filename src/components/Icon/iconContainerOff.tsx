import { Component, ComponentProps } from "solid-js";

export const IconContainerOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 4v.01M20 20v.01M20 16v.01M20 12v.01M20 8v.01M8.297 4.289A.997.997 0 0 1 9 4h6a1 1 0 0 1 1 1v7m0 4v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8M4 4v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01M3 3l18 18" />
  </svg>
);
