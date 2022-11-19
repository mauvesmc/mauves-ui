import { Component, ComponentProps } from "solid-js";

export const IconFidgetSpinner: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 17a3 3 0 1 1-1.543-2.623l2.087-3.754A3 3 0 0 1 12 5a3 3 0 0 1 1.457 5.623l2.087 3.754a3 3 0 1 1-1.538 2.8L14 17h-4zM17 17v.01M7 17v.01M12 8v.01" />
  </svg>
);
