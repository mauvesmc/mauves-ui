import { Component, ComponentProps } from "solid-js";

export const IconMap: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3V7M9 4v13M15 7v13" />
  </svg>
);
