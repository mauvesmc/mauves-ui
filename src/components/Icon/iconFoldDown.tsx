import { Component, ComponentProps } from "solid-js";

export const IconFoldDown: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 11v8l3-3m-6 0 3 3M9 7h1M14 7h1M19 7h1M4 7h1" />
  </svg>
);
