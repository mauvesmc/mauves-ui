import { Component, ComponentProps } from "solid-js";

export const IconJetpack: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 6a3 3 0 1 0-6 0v7h6V6zM14 13h6V6a3 3 0 0 0-6 0v7zM5 16c0 2.333.667 4 2 5 1.333-1 2-2.667 2-5M15 16c0 2.333.667 4 2 5 1.333-1 2-2.667 2-5M10 8h4M10 11h4" />
  </svg>
);
