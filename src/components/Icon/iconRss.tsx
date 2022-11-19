import { Component, ComponentProps } from "solid-js";

export const IconRss: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="5" cy="19" r="1" />
    <path d="M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9" />
  </svg>
);
