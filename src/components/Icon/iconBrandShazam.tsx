import { Component, ComponentProps } from "solid-js";

export const IconBrandShazam: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m10 12 2-2a2.828 2.828 0 0 1 4 0 2.828 2.828 0 0 1 0 4l-3 3" />
    <path d="m14 12-2 2a2.828 2.828 0 1 1-4-4l3-3" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
