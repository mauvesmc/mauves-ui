import { Component, ComponentProps } from "solid-js";

export const IconShredder: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="5" x="4" y="10" rx="1" />
    <path d="M17 10V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4m5 5v5m4-5v2m-8-2v3" />
  </svg>
);
