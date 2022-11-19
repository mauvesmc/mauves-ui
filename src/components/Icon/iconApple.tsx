import { Component, ComponentProps } from "solid-js";

export const IconApple: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="14" r="7" />
    <path d="M12 11V5a2 2 0 0 1 2-2h2v1a2 2 0 0 1-2 2h-2" />
    <path d="M10 10.5c1.333.667 2.667.667 4 0" />
  </svg>
);
