import { Component, ComponentProps } from "solid-js";

export const IconHomeRibbon: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 15h5v7l-2.5-1.5L16 22z" />
    <path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h1.5" />
  </svg>
);
