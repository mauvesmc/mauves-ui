import { Component, ComponentProps } from "solid-js";

export const IconSword: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 4v5l-9 7-4 4-3-3 4-4 7-9zM6.5 11.5l6 6" />
  </svg>
);
