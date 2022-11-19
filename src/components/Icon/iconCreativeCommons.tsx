import { Component, ComponentProps } from "solid-js";

export const IconCreativeCommons: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.928 1.928 0 0 0 0 2.768 2.188 2.188 0 0 0 2.914.116M16.5 10.5a2.187 2.187 0 0 0-2.914.116 1.928 1.928 0 0 0 0 2.768 2.188 2.188 0 0 0 2.914.116" />
  </svg>
);
