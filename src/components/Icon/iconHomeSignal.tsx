import { Component, ComponentProps } from "solid-js";

export const IconHomeSignal: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 22v-2M18 22v-4M21 22v-6M19 12.494V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h4" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5" />
  </svg>
);
