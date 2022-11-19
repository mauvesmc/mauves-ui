import { Component, ComponentProps } from "solid-js";

export const IconGitMerge: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="7" cy="18" r="2" />
    <circle cx="7" cy="6" r="2" />
    <circle cx="17" cy="12" r="2" />
    <path d="M7 8v8M7 8a4 4 0 0 0 4 4h4" />
  </svg>
);
