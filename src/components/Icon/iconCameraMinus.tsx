import { Component, ComponentProps } from "solid-js";

export const IconCameraMinus: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="13" r="3" />
    <path d="M5 7h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h3m9 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2M15 6h6" />
  </svg>
);
