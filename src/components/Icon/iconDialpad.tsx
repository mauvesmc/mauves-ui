import { Component, ComponentProps } from "solid-js";

export const IconDialpad: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 3h4v4H3zM17 3h4v4h-4zM10 3h4v4h-4zM3 10h4v4H3zM17 10h4v4h-4zM10 10h4v4h-4zM10 17h4v4h-4z" />
  </svg>
);
