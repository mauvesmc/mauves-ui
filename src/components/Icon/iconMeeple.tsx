import { Component, ComponentProps } from "solid-js";

export const IconMeeple: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 20H4a1 1 0 0 1-1-1c0-2 3.378-4.907 4-6-1 0-4-.5-4-2 0-2 4-3.5 6-4 0-1.5.5-4 3-4s3 2.5 3 4c2 .5 6 2 6 4 0 1.5-3 2-4 2 .622 1.093 4 4 4 6a1 1 0 0 1-1 1h-5c-1 0-2-4-3-4s-2 4-3 4z" />
  </svg>
);
