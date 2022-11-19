import { Component, ComponentProps } from "solid-js";

export const IconStepOut: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 3v12M16 7l-4-4M8 7l4-4" />
    <circle cx="12" cy="20" r="1" />
  </svg>
);
