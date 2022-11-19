import { Component, ComponentProps } from "solid-js";

export const IconBackpack: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 18v-6a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zM10 6V5a2 2 0 1 1 4 0v1" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M11 10h2" />
  </svg>
);
