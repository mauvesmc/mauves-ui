import { Component, ComponentProps } from "solid-js";

export const IconArrowsCross: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 4h4v4M15 9l5-5M4 20l5-5M16 20h4v-4M4 4l16 16" />
  </svg>
);
