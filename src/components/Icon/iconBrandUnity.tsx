import { Component, ComponentProps } from "solid-js";

export const IconBrandUnity: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m14 3 6 4v7M18 17l-6 4-6-4M4 14V7l6-4" />
    <path d="m4 7 8 5v9M20 7l-8 5" />
  </svg>
);
