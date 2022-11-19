import { Component, ComponentProps } from "solid-js";

export const IconNumber0: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 16V8M12 20a4 4 0 0 0 4-4V8a4 4 0 1 0-8 0v8a4 4 0 0 0 4 4z" />
  </svg>
);
