import { Component, ComponentProps } from "solid-js";

export const IconApi: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 13h5M12 16V8h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3M20 8v8M9 16v-5.5a2.5 2.5 0 0 0-5 0V16" />
  </svg>
);
