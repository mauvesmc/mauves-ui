import { Component, ComponentProps } from "solid-js";

export const IconBrandIntercom: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="M7 8v3M10 7v6M14 7v6M17 8v3M7 15c4 2.667 6 2.667 10 0" />
  </svg>
);
