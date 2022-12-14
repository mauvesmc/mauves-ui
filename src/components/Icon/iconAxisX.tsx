import { Component, ComponentProps } from "solid-js";

export const IconAxisX: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 13v.01M4 9v.01M4 5v.01M17 20l3-3-3-3M4 17h16" />
  </svg>
);
