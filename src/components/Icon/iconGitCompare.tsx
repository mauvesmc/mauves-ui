import { Component, ComponentProps } from "solid-js";

export const IconGitCompare: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M11 6h5a2 2 0 0 1 2 2v8" />
    <path d="m14 9-3-3 3-3M13 18H8a2 2 0 0 1-2-2V8" />
    <path d="m10 15 3 3-3 3" />
  </svg>
);
