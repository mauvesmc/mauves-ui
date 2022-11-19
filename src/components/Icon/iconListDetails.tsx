import { Component, ComponentProps } from "solid-js";

export const IconListDetails: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 5h8M13 9h5M13 15h8M13 19h5" />
    <rect width="6" height="6" x="3" y="4" rx="1" />
    <rect width="6" height="6" x="3" y="14" rx="1" />
  </svg>
);
