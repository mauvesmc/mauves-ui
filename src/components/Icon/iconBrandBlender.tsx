import { Component, ComponentProps } from "solid-js";

export const IconBrandBlender: Component<ComponentProps<"svg">> = (props) => (
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
    <ellipse cx="15" cy="14" rx="6" ry="5" />
    <circle cx="15" cy="14" r="1" />
    <path d="m3 16 9-6.5M6 9h9M13 5l5.65 5" />
  </svg>
);
