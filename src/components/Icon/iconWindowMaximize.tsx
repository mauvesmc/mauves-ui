import { Component, ComponentProps } from "solid-js";

export const IconWindowMaximize: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
    <path d="M12 8h4v4M16 8l-5 5" />
  </svg>
);
