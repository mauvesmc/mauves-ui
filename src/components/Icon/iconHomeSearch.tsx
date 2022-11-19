import { Component, ComponentProps } from "solid-js";

export const IconHomeSearch: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h4.7" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2" />
    <circle cx="18" cy="18" r="3" />
    <path d="M20.2 20.2 22 22" />
  </svg>
);
