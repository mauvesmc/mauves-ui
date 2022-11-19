import { Component, ComponentProps } from "solid-js";

export const IconMilk: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 6h8V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2zM16 6l1.094 1.759a6 6 0 0 1 .906 3.17V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.071a6 6 0 0 1 .906-3.17L8 6" />
    <circle cx="12" cy="16" r="2" />
    <path d="M10 10h4" />
  </svg>
);
