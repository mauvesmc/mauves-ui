import { Component, ComponentProps } from "solid-js";

export const IconNumber: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 17V7l7 10V7M15 17h5" />
    <ellipse cx="17.5" cy="10" rx="2.5" ry="3" />
  </svg>
);
