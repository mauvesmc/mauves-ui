import { Component, ComponentProps } from "solid-js";

export const IconVocabulary: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a2 2 0 0 1 2 2 2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2 2 2 0 0 0-2-2zM12 5v16M7 7h1M7 11h1M16 7h1M16 11h1M16 15h1" />
  </svg>
);
