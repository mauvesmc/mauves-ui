import { Component, ComponentProps } from "solid-js";

export const IconMap2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18 6v.01M18 13l-3.5-5a4 4 0 1 1 7 0L18 13" />
    <path d="M10.5 4.75 9 4 3 7v13l6-3 6 3 6-3v-2M9 4v13M15 15v5" />
  </svg>
);
