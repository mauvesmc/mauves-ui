import { Component, ComponentProps } from "solid-js";

export const IconForms: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-7M5 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1M17 12h.01M13 12h.01" />
  </svg>
);
