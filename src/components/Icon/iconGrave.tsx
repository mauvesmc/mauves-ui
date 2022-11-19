import { Component, ComponentProps } from "solid-js";

export const IconGrave: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 21v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2H5zM10 16v-5H6V7h4V3h4v4h4v4h-4v5" />
  </svg>
);
