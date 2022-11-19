import { Component, ComponentProps } from "solid-js";

export const IconYoga: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="4" r="1" />
    <path d="M4 20h4l1.5-3M17 20l-1-5h-5l1-7" />
    <path d="m4 10 4-1 4-1 4 1.5 4 1.5" />
  </svg>
);
