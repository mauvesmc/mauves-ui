import { Component, ComponentProps } from "solid-js";

export const IconMusic: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="17" r="3" />
    <circle cx="16" cy="17" r="3" />
    <path d="M9 17V4h10v13M9 8h10" />
  </svg>
);
