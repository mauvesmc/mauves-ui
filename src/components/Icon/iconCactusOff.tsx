import { Component, ComponentProps } from "solid-js";

export const IconCactusOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 9v1a3 3 0 0 0 3 3h1M18 8v5a3 3 0 0 1-.129.872m-2.014 2.004A3 3 0 0 1 15 16h-1M10 21V10m0-4V5a2 2 0 1 1 4 0v5m0 4v7M7 21h10M3 3l18 18" />
  </svg>
);
